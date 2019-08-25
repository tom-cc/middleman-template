require 'thor/group'

module Middleman
  class Generator < ::Thor::Group
    include ::Thor::Actions

    source_root File.expand_path(File.dirname(__FILE__))

    def ask_stuff
      @langs = ask('Please insert your site langs: (es. it,en)')
      @token = ask('Please insert your DatoCMS site read-only token:')
      @base_url = ask('What will be the base url of your site? (eg. https://www.mysite.com)')

      @origin = ask('What is the origin remote? (eg. git@gitlab.com:cantierecreativo/PROJECT.git)')
      @production = ask('What is the production remote? (eg. git@gitlab.com:cantierecreativo/PROJECT.git)')
    end

    def copy_default_files
      directory 'template', '.', exclude_pattern: /\.DS_Store$/
    end

    def ask_about_datocms_params
      template 'optional/config.rb', 'config.rb'
      template 'optional/env', '.env'
    end

    def setup_bootstrap
      run 'yarn install'
      run 'mkdir -p source/stylesheets/'
      run 'mv ./node_modules/bootstrap/scss/* source/stylesheets/'
      run 'mv ./node_modules/bootstrap/js/src/* source/javascripts/'
    end

    def setup_remotes
      template 'optional/README.md', 'README.md'

      run "git init"
      if @origin != ""
        run "git remote add origin #{@origin}"
      end
      if @production != ""
        run "git remote add production #{@production}"
      end
      run "git add ."
      run "git commit -m 'Boostrap project with template'"
    end
  end
end
