// You can write a call and import your functions in this file.
//
// This file will be compiled into app.js and will not be minified.
// Feel free with using ES6 here.

import DE from './modules/dots';
import ABOUT from './modules/about_us';
import NEWS from './modules/news';
import HEADER from './modules/header';
import MODAL from './modules/modal';
import CALL from './modules/call';

( ($) => {
  'use strict';

  // When DOM is ready
  $(() => {
    DE.dotsEffect();
    ABOUT.aboutUsSlider();
    NEWS.newsSlider();
    HEADER.menuToggle();
    HEADER.searchToggle();
    MODAL.modalToggle();
    CALL.collButton();

    $(".select2").select2();
    $(".fancybox").fancybox({
      helpers	: {
        thumbs	: {
          width	: 80,
          height: 80
        }
      }
    });

    $.each($('.j-slider'), (index, slider) => {
      const $slider = $(slider);
      const handles = $slider.find('.j-slider-handle span');
      const leftHandle = handles.eq(0);
      const righHandle = handles.eq(1);

      $slider.slider({
        range: true,
        min: 0,
        max: 500,
        values: [ 75, 300 ],

        create: function() {
          let $this = $( this );
          leftHandle.text( $this.slider( "values", 0 ) );
          righHandle.text( $this.slider( "values", 1 ) );
        },
        slide: function( event, ui ) {
          leftHandle.text( ui.values[0] );
          righHandle.text( ui.values[1] );
        }
      });
    })
  });

})(jQuery);
