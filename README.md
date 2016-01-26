# Scrivito Ace Editor

[![Gem Version](https://badge.fury.io/rb/scrivito_ace_editor.svg)](http://badge.fury.io/rb/scrivito_ace_editor)

This gem integrates the JavaScript code editor [Ace](https://ace.c9.io) in [Scrivito](https://scrivito.com) CMS.

<img src="https://raw.github.com/kostia/scrivito_ace_editor/master/scrivito_ace_editor.png" alt="Screenshot Scrivito Ace Editor" width=600>

## Installation

Add to `Gemfile`:
```ruby
gem 'scrivito_ace_editor'
```

and run `bundle`.

Add to `app/assets/javascripts/application.js` _after_ `scrivito`:
```javascript
//= require scrivito_ace_editor
```

## Basic usage

In following example we enable the code editor for a `string` attribute names `"code"`, e.g.:
```erb
<%= scrivito_tag :div, widget, :code %>
```

In JavaScript:
```javascript
scrivito.on("load", function() {
  scrivito.select_editor(function(element, editor) {
    if ($(element).is("[data-scrivito-field-name=code]")) {
      editor.use("ace");
    }
  });
});
```

## Using modes and themes

In following example we store the mode in an attribute names `"mode"` and the theme in an attribute
names `"theme"`:

```ruby
class CodeWidget < Widget
  attribute :code, :string
  attribute :mode, :enum, values: ["ruby", "javascript"], default: "ruby"
  attribute :theme, :enum, values: ["solarized_light", "monokai"], default: "solarized_light"
end
```

Now, we set the mode and the theme in the view:
```erb
<%= scrivito_tag :div, widget, :code,
  "data-scrivito-editors-ace-mode" => widget.mode,
  "data-scrivito-editors-ace-theme" => widget.theme %>
```

Finally, we load the available modes and the available themes in
`app/assets/javascripts/application.js`:
```javascript
//= require ace/mode-ruby
//= require ace/mode-javascript
//= require ace/theme-solarized_light
//= require ace/theme-monokai
```

For more details on how to load modes and themes see https://github.com/codykrieger/ace-rails-ap.
For more details on Scrivito editors API see https://scrivito.com/using-and-defining-editors.
For more Scrivito add-ons see https://scrivito.com/widget-gallery.

## Outside the editable view

Scrivito editors are activated in editable view. If you want to use the Ace editor for highlighting
outside the editable view or even if the Scrivito UI is not present at all,
then you need to use `scrivito_ace_editor`:
```javascript
scrivito.on("load", function() {
  …
  if (!scrivito.in_editable_view()) {
    scrivito_ace_editor($("[data-scrivito-field-name=code]"));
  }
});
```

## Contributing

1. Fork it (https://github.com/kostia/scrivito_ace_editor/merge_tags/fork)
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create a new Pull Request
