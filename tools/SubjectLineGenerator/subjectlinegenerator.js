/*
wrnum
liveid
lang
title
bl
wtype
gnwt
acessibility
duedate
wpverif
tobeopen
task
*/

$(document).ready(function() {

    console.log("Running generator...");
    var formElements = [$("#wrnum"), $("#liveid"), $("#lang"), $("#title"), $("#bl"), $("#wtype"), $("#gnwt"), $("#acessibility"), $("#duedate"), $("#wpverif"), $("#tobeopen"), $("#task")];

    formElements.forEach(function() {
        $(this).on("input", UpdateGen);
    });

    function UpdateGen() {
        var genString = "";
        genString += "WR";
        genString += $("#wrnum").val();
        genString += " - ";
        genString += $("#liveid").val();
        genString += " ";
        genString += $("#lang").val();
        genString += " ";
        genString += $("#title").val();
        genString += " - (";
        genString += $("#bl").val();
        genString += ", ";
        genString += $("#wtype").val();
        genString += ") ";
        genString += $("#gnwt").val();
        genString += $("#acessibility").val();

        if ($("#duedate").val() != "") {
            genString += " - Due ";
            genString += $("#duedate").val();
        }

        genString += $("#tobeopen").val();

        if ($("#task").val() != "") {
            genString += " - ";
            genString += $("#task").val();
        }
        $('#gen').empty();
        $('#gen').append(genString);
    }

    var button = $("button");
    button.click(function() {
        console.log("copying...");
        copyToClipboard($('#gen').html())

        button.html('COPIED!');
        setTimeout(function() {
            button.html('COPY');
        }, 2000);
    });
});

const copyToClipboard = str => {
    if (navigator && navigator.clipboard && navigator.clipboard.writeText)
        return navigator.clipboard.writeText(str);
    return Promise.reject('The Clipboard API is not available.');
};