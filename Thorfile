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
    end

    # def add_slick_sass
    #   template 'optional/slick.sass', 'source/stylesheets/variables/_slick.sass'
    #   run 'mkdir -p source/stylesheets/blocks/slick/'
    #   directory 'optional/slick', 'source/stylesheets/blocks/slick', exclude_pattern: /\.DS_Store$/
    # end

    # def setup_sass
    #   # SVG INJECT
    #   template 'optional/svg.sass', 'source/stylesheets/blocks/_svg.sass'
    #   template 'optional/svg/svg_icons.js', 'source/fonts/svg/svg_icons.js'
    #   template 'optional/svg/svg.pattern', 'source/fonts/svg/svg.pattern'
    # end

    # def setup_addition_sass
    #   remove_file 'source/stylesheets/blocks/bemo/_canvas.sass'
    #   remove_file 'source/stylesheets/mixins/_canvas-layout.sass'
    #   template 'optional/canvas.sass', 'source/stylesheets/blocks/_canvas.sass'
    #   template 'optional/canvas-layout.sass', 'source/stylesheets/mixins/_canvas-layout.sass'
    #   template 'optional/site-nav.sass', 'source/stylesheets/blocks/_site-nav.sass'
    #   template 'optional/site-footer.sass', 'source/stylesheets/blocks/_site-footer.sass'
    #   template 'optional/aside-nav.sass', 'source/stylesheets/blocks/_aside-nav.sass'
    # end

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
