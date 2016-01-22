//= require ace-rails-ap
//= require_self

;(function() {
  var activate = function(field, is_editable) {
    var element = field.get(0);
    var mode    = field.attr('data-scrivito-editors-ace-mode');
    var theme   = field.attr('data-scrivito-editors-ace-theme');

    var editor = ace.edit(element);
    editor.setOptions({
      maxLines: Infinity,
      useSoftTabs: true,
      tabSize: 2,
      readOnly: !is_editable
    });

    if (mode) {
      editor.getSession().setMode('ace/mode/'+mode);
    }

    if (theme) {
      editor.setTheme('ace/theme/'+theme);
    }

    if (is_editable) {
      editor.getSession().on('change', function() {
        field.scrivito('save', editor.getValue());
      });
    }
  };

  scrivito.on('load', function() {
    scrivito.define_editor('ace', {
      can_use: function(element) {
        return $(element).is('[data-scrivito-field-type=string]');
      },

      activate: function(element) {
        activate($(element), true);
      }
    });
  });

  window.scrivito_ace_editor = function(element) {
    $(element).each(function() {
      activate($(this), false);
    });
  };
}());
