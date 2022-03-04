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

console.log("Running generator...");
var formElements = [$("#wrnum"), $("#liveid"), $("#lang"), $("#title"), $("#bl"), $("#wtype"), $("#gnwt"), $("#acessibility"), $("#duedate"), $("#wpverif"), $("#tobeopen"), $("#task")];

formElements.forEach(function() {
    $(this).change(UpdateGen);
});

function UpdateGen() {
    var genString = "";
    genString += $("#wrnum").val();
    genString += " - ";
    genString += $("#liveid").val();
    genString += " ";
    genString += $("#lang").val();
    genString += " ";
    genString += $("#title").val();
    genString += " - (";
    genString += $("#bl").val();
    genString += ", Type=";
    genString += $("#wtype").val();
    genString += ") ";
    genString += $("#gnwt").val();
    genString += $("#acessibility").val();
    genString += " - ";
    genString += $("#duedate").val();
    genString += $("#wpverif").val();
    genString += $("#tobeopen").val();
    genString += " > Task = ";
    genString += $("#task").val();

    $('#gen').empty();
    $('#gen').append(genString);
}