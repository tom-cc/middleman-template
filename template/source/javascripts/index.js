var $ = require("jquery");
global.jQuery = $;

require("@fancyapps/fancybox");
import modernizr from 'modernizr';
import anime from 'animejs/lib/anime';
import AOS from 'aos';
import LazyLoad from "lazyload"

$(document).ready(function() {
  AOS.init({disable: 'mobile'});
  lazyload();

  anime({
    targets: '.navbar-brand',
    translateX: 0,
    rotate: '1turn',
    duration: 1200
  });
});
