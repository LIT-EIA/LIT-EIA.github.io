var language = 'fr';

$(document).ready(function () {
    this.editor = CKEDITOR.replace(document.querySelector('#editor4'), {
        // ESDC - added support for the editor in multiple languages
        language: language,
        language_list: ['fr:Français', 'en:English'],
        skin: 'moono',
        dataIndentationChars: '',
        disableNativeSpellChecker: false,
        //enterMode: 'ENTER_P',
        entities: false,
        extraAllowedContent: 'span(*)',
        removePlugins: 'exportpdf',
        on: {
            instanceReady: function () {
                var writer = this.dataProcessor.writer;
                var elements = Object.keys(CKEDITOR.dtd.$block);

                var rules = {
                    indent: false,
                    breakBeforeOpen: false,
                    breakAfterOpen: false,
                    breakBeforeClose: false,
                    breakAfterClose: false,
                    defaultLanguage: 'fr'
                };

                writer.indentationChars = '';
                writer.lineBreakChars = '';
                elements.forEach(function (element) { writer.setRules(element, rules); });
            }
        },
        toolbar: [
            { name: 'document', groups: ['mode', 'document', 'doctools'], items: ['Source', '-', 'ShowBlocks'] },
            { name: 'clipboard', groups: ['clipboard', 'undo'], items: ['PasteText', 'PasteFromWord', '-', 'Undo', 'Redo'] },
            { name: 'editing', groups: ['find', 'selection', 'spellchecker'], items: ['Find', 'Replace', '-', 'SelectAll'] },
            { name: 'paragraph', groups: ['list', 'indent', 'blocks', 'align', 'bidi'], items: ['NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote', 'CreateDiv'] },
            { name: 'direction', items: ['BidiLtr', 'BidiRtl', 'Language'] },
            '/',
            { name: 'basicstyles', groups: ['basicstyles', 'cleanup'], items: ['Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript', '-', 'RemoveFormat'] },
            { name: 'styles', items: ['JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock'] },
            { name: 'links', items: ['Link', 'Unlink'] },
            { name: 'colors', items: ['TextColor', 'BGColor'] },
            { name: 'insert', items: ['SpecialChar', 'Table'] },
            { name: 'tools', items: [] },
            { name: 'others', items: ['-'] }
        ]
    });
    CKEDITOR.on("instanceReady", function (event) {
        event.editor.on("beforeCommandExec", function (event) {
            // Show the paste dialog for the paste buttons and right-click paste
            if (event.data.name == "paste") {
                event.editor._.forcePasteDialog = true;
            }
            // Don't show the paste dialog for Ctrl+Shift+V
            if (event.data.name == "pastetext" && event.data.commandData.from == "keystrokeHandler") {
                event.cancel();
            }
        })
    });
});

