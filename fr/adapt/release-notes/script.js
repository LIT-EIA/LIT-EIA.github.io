var types = {};


$(function () {
  moment.locale('fr');

  var el = $('#release-notes');
  el.html('<h2 style="text-align: center">Chargement…</h2>')

  var success = function (data) {
    buildReleases(data);
  }

  var setTypes = function (data) {
    types = data;
  }

  var error = function (data) {
    el.html('<h2>An error occurred while fetching release notes.</h2>')
  }

  async function getData() {
    await $.ajax({
      url: 'https://lit-eia.github.io/fr/adapt/release-notes/api/types.json',
      success: setTypes,
      error: error
    })

    await $.ajax({
      url: 'https://lit-eia.github.io/fr/adapt/release-notes/api/data.json',
      success: success,
      error: error
    })
  }
  getData();
});

function buildReleases(data) {
  var releases = $.map(data, createRelease);
  $("#release-notes").empty().append(releases);
}

function createRelease(r) {
  var span = $("<span class='version-badge d-inline-block bg-purple p-1 rounded-1 mr-2 text-bold' />");
  if (r.pub_date > new Date().toISOString()) {
    span.text('PLANIFIÉ');
    span.addClass('planned-version');
  } else {
    span.text(r.version);
  }
  var header = $("<header class='timeline-decorator d-flex flex-items-center mb-3' />")
    .append(span)
    .append($("<h2 class='f3 css-truncate css-truncate-target' />")
      .text(r.pub_date ? moment(r.pub_date).format('Do MMMM YYYY') : ""));

  //var changelog = $("<ul class='list-style-none change-log' />")
  var section = $("<section class='release-note position-relative container-new py-6 px-3 text-left' />").append(header);
  Object.keys(r.notes).forEach(function (type) {
    var changelog = $("<ul class='list-style-none change-log change-log-" + type + "' />")
    const item = r.notes[type];
    //console.log(item);
    changelog.append($.map(item, createChange));
    section.append($('<h3 class="subsection-title change-log">' + types[type] + '</h3>')).append(changelog);
  })

  return section;
}

function isRegularNote(changeText) {
  return !/^\s*\[pretext\]\s/i.test(changeText)
}

function createChange(changeText) {
  if (changeText != '') {
    var trimmed = $.trim(changeText);
    var typeMatches = trimmed.match(/^\[(nouveau|corrigé|amélioré|supprimé|ajout|urgent)\]\s(.*)/i);
    var link = trimmed.match(/\[([^\[]+)\](\(.*\))/gm);
  
    if (typeMatches) {
      var changeType = typeMatches[1];
      var changeDescription = typeMatches[2];
      //console.log(changeDescription)
      if(link){
        var word = link[0].split('(')[0].slice(1, -1);
        var url = link[0].split('(')[1].slice(0, -1);
        changeDescription = changeDescription.replace(/\[([^\[]+)\](\(.*\))/gm, `<a href="${url}" target="_blank">${word}</a>`)
        //console.log(changeDescription)
      }
      var changePieces = changeDescription.split(/(#\d+)/i);
      //console.log(changePieces)

      var elClassnames = "d-flex flex-items-start mb-2";

      var el = $("<li />")
        .addClass(elClassnames);

      el.append($("<div class='change-badge' />")
        .addClass("change-badge-" + changeType.toLowerCase())
        .text(changeType));

      var changeDescriptionContainer = $("<div class='change-description' />");

      for (var i = 0; i < changePieces.length; i++) {
        var piece = changePieces[i];
        var issuePieces = piece.match(/#(\d+)/i);

        if (issuePieces) {
          var link = $("<a>").attr("href", 'https://github.com/desktop/desktop/issues/' + issuePieces[1]).text(piece);
          changeDescriptionContainer = changeDescriptionContainer.append(link);
        } else {
          changeDescriptionContainer = changeDescriptionContainer.append(piece);
        }
      }
      el = el.append(changeDescriptionContainer);

      return el;
    }

    return $("<li />").addClass(elClassnames).text(changeText);
  }
}