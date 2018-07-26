// You can write a call and import your functions in this file.
//
// This file will be compiled into app.js and will not be minified.
// Feel free with using ES6 here.

import DE from './modules/dots';
import ABOUT from './modules/about_us';
import NEWS from './modules/news';
import HEADER from './modules/header';

( ($) => {
  'use strict';

  // When DOM is ready
  $(() => {
    DE.dotsEffect();
    ABOUT.aboutUsSlider();
    NEWS.newsSlider();
    HEADER.menuToggle();
    HEADER.searchToggle();

    // console.log("select2", select2)

    $(".select2").select2();
  });

})(jQuery);
