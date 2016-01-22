require File.expand_path('../lib/scrivito_ace_editor/version', __FILE__)

Gem::Specification.new do |s|
  s.name        = 'scrivito_ace_editor'
  s.version     = ScrivitoAceEditor::VERSION

  s.authors     = ['Scrivito']
  s.email       = ['support@scrivito.com']
  s.homepage    = 'https://scrivito.com'

  s.summary     = 'Ace editor for Scrivito CMS'
  s.description = 'This gem integrates the JavaScript editor Ace in Scrivito CMS.'
  s.license     = 'LGPL-3.0'

  s.files = Dir['{app,lib}/**/*', 'LICENSE', 'Rakefile']

  s.add_dependency 'bundler'
  s.add_dependency 'scrivito'
  s.add_dependency 'ace-rails-ap'

  s.add_development_dependency 'rake'
end
