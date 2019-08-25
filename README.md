# Middleman Template

An edited version of the base Middleman application used at [cantierecreativo] with bootstrap support, ready to deploy to [Netlify].

[cantierecreativo]: https://cantierecreativo.net/
[Netlify]: https://www.netlify.com/

## Requirements

This project requires [Node.js](https://nodejs.org/) (v8.16.1) with 
[yarn](https://yarnpkg.com/) and [Ruby](https://ruby-lang.org) (v2.6.2)

## Usage

1. Install or set Ruby (2.6.2) with RBENV:

```
$ rbenv install/set 2.6.2
```

2. Install or use Middleman gem:

```
$ gem install middleman
```

3. Install or set Node (9.3.0) with NVM:

```
$ nvm install/use 8.16.1
```

4. Then run:

```
$ middleman init project -T=cantierecreativo/middleman-template
```

## Configuration

The template init scripts asks you for the follwoing information:

- Languages string (it,en)
- DatoCMS read-only API token (from DatoCMS settings -> API Tokens)
- Base URL of site (https://sitedomain.ext)
- Remote git repository to store ORIGIN
- Remote git repository to store PRODUCTION and Netlify buildable files

After these questions, the init script installs all dependencies and creates
the complete directory site.

You should change the default data in `data/config.json` and create the proxy
routing for the new site.

The final directory structure is:

```
project/
+-- .gitignore
+-- Gemfile
+-- Gemfile.lock
+-- config.rb
+-- package.json
+-- webpack.config.js
+-- yarn.lock
+-- config
|   +-- i18n-tasks.yml
+-- data
|   +-- config.json
+-- locales
|   +-- it.yml
|   +-- en.yml
+-- source
    +-- images/
    +-- localizable/
    |   +-- index.html.slim
    +-- partials/
    +-- templates
    |   +-- browserconfig.xml.erb
    |   +-- redirects.txt.erb
    |   +-- site.webmanifest.erb
    |   +-- contact_page.html.slim
    +-- 404.html.slim
    +-- index.html.slim
    +-- javascripts
    ¦   +-- index.js
    +-- layouts
    ¦   +-- layout.slim
    +-- stylesheets
        +-- bootstrap.scss
```

* To see the list of helpers in the system read [HELPERS.md](HELPERS.md)
* To see examples of code (JS and CSS) that the template exposes read
[EXAMPLE.md](EXAMPLE.md)

## Features and Tools

This template comes with the following features and tools:

- [middleman-dato]: An extension for connect with DatoCMS.
- [middleman-svg]: An extension for inlining SVGs in your views.
- [middleman-minify-html]: Minifies whitespace around HTML when the site is
  built.
- [middleman-search_engine_sitemap]: An extension to manage sitemap.
- [Sass]: CSS pre-processor.
- [Slim]: Templating engine to reduce the syntax to the essential parts.
- [lazyload]: Delay loading of images until user scrolls to them
- [AOS]: Animate On Scroll Library
- [animeJS]: Anime.js is a lightweight JavaScript animation library with a simple, yet powerful API
- [fancybox]: JavaScript lightbox library for presenting various types of media

[middleman-dato]: https://github.com/datocms/middleman-dato
[middleman-svg]: https://github.com/cantierecreativo/middleman-svg
[middleman-minify-html]: https://github.com/middleman/middleman-minify-html
[middleman-search_engine_sitemap]: https://github.com/Aupajo/middleman-search_engine_sitemap
[Sass]: https://github.com/sass/sass
[Slim]: https://github.com/slim-template/slim
[lazyload]: https://appelsiini.net/projects/lazyload
[AOS]: http://michalsnik.github.io/aos/
[animeJS]: https://animejs.com/
[fancybox]: https://www.fancyapps.com/fancybox/3/

## License

Copyright © 2019 Tommaso Valentini. This is free software, and may
be redistributed under the terms specified in the [LICENSE] file.

[license]: LICENSE.md
