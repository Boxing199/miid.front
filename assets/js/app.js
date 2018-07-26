(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var _dots = require('./modules/dots');

var _dots2 = _interopRequireDefault(_dots);

var _about_us = require('./modules/about_us');

var _about_us2 = _interopRequireDefault(_about_us);

var _news = require('./modules/news');

var _news2 = _interopRequireDefault(_news);

var _header = require('./modules/header');

var _header2 = _interopRequireDefault(_header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// You can write a call and import your functions in this file.
//
// This file will be compiled into app.js and will not be minified.
// Feel free with using ES6 here.

(function ($) {
  'use strict';

  // When DOM is ready

  $(function () {
    _dots2.default.dotsEffect();
    _about_us2.default.aboutUsSlider();
    _news2.default.newsSlider();
    _header2.default.menuToggle();
    _header2.default.searchToggle();

    // console.log("select2", select2)

    $(".select2").select2();
  });
})(jQuery);

},{"./modules/about_us":2,"./modules/dots":3,"./modules/header":4,"./modules/news":5}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var ABOUT = {
  aboutUsSlider: function aboutUsSlider() {
    var settings = {
      arrows: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 2000,
      dots: true,
      customPaging: function customPaging() {
        return '<div class="about-us-slider-dots"></div>';
      },
      responsive: [{
        breakpoint: 321,
        settings: {
          arrows: true,
          nextArrow: '\n              <img\n                  class="about-us-slider-arrow-right"\n                  src="assets/images/main/arrow_right.png"\n              />',
          prevArrow: '\n              <img\n                  class="about-us-slider-arrow-left"\n                  src="assets/images/main/arrow_left.png"\n              />'
        }
      }]
    };

    // initialize the slider
    $('.about-us-slider').slick(settings);
  }
};

exports.default = ABOUT;

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// This is an examples of simple export.
//
// You can remove or add your own function in this file.

var DE = {
  dotsEffect: function dotsEffect() {
    var $cnt = $('#home-canvas'),
        cells = createCells();

    $cnt.html(cells);

    function createCells() {
      var width = 10,
          height = 10,
          size = width * height,
          html = '<div class="entry-cells">';

      for (var i = 0; i < size; i++) {
        html += '<div class="cell cell-' + i + '"></div>';
      }

      html += '</div>';

      return html;
    }
  }
};

exports.default = DE;

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var HEADER = {
  menuToggle: function menuToggle() {
    var toggle_menu = $(".toggle_menu");
    var header_menu = $(".header_menu");

    toggle_menu.click(function () {
      header_menu.toggleClass("show");
    });
  },
  searchToggle: function searchToggle() {
    var find_input_item = $(".find_input_item");
    var find_input = $(".find_input");

    find_input_item.click(function () {
      find_input.toggleClass("find_input__active");
    });
  }
};

exports.default = HEADER;

},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var NEWS = {
  newsSlider: function newsSlider() {
    var settings = {
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      nextArrow: '\n        <p class="news-slider-arrow news-slider-arrow-right"><i class="icon icon-arrow"></i><span>\u043F\u0440\u0435\u0434</span></p>\n      ',
      prevArrow: '\n         <p class="news-slider-arrow news-slider-arrow-left"><span>\u0441\u043B\u0435\u0434</span><i class="icon icon-arrow"></i></p>\n      ',
      responsive: [{
        breakpoint: 1024,
        settings: {
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 2,
          nextArrow: false,
          prevArrow: false
        }
      }, {
        breakpoint: 720,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow: false,
          prevArrow: false
        }
      }]
    };

    // initialize the slider
    $('.news-slider').slick(settings);
  }
};

exports.default = NEWS;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvYXBwLmpzIiwic3JjL2pzL21vZHVsZXMvYWJvdXRfdXMuanMiLCJzcmMvanMvbW9kdWxlcy9kb3RzLmpzIiwic3JjL2pzL21vZHVsZXMvaGVhZGVyLmpzIiwic3JjL2pzL21vZHVsZXMvbmV3cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDS0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQVJBO0FBQ0E7QUFDQTtBQUNBOztBQU9BLENBQUUsVUFBQyxDQUFELEVBQU87QUFDUDs7QUFFQTs7QUFDQSxJQUFFLFlBQU07QUFDTixtQkFBRyxVQUFIO0FBQ0EsdUJBQU0sYUFBTjtBQUNBLG1CQUFLLFVBQUw7QUFDQSxxQkFBTyxVQUFQO0FBQ0EscUJBQU8sWUFBUDs7QUFFQTs7QUFFQSxNQUFFLFVBQUYsRUFBYyxPQUFkO0FBQ0QsR0FWRDtBQVlELENBaEJELEVBZ0JHLE1BaEJIOzs7Ozs7OztBQ1ZBLElBQU0sUUFBUTtBQUNaLGlCQUFlLHlCQUFXO0FBQ3hCLFFBQU0sV0FBVztBQUNmLGNBQVEsS0FETztBQUVmLGdCQUFVLElBRks7QUFHZixnQkFBVSxJQUhLO0FBSWYscUJBQWUsSUFKQTtBQUtmLFlBQU0sSUFMUztBQU1mLG9CQUFjO0FBQUEsZUFBTSwwQ0FBTjtBQUFBLE9BTkM7QUFPZixrQkFBWSxDQUNWO0FBQ0Usb0JBQVksR0FEZDtBQUVFLGtCQUFVO0FBQ1Isa0JBQVEsSUFEQTtBQUVSLGdMQUZRO0FBT1I7QUFQUTtBQUZaLE9BRFU7QUFQRyxLQUFqQjs7QUEyQkE7QUFDQSxNQUFFLGtCQUFGLEVBQXNCLEtBQXRCLENBQTRCLFFBQTVCO0FBQ0Q7QUEvQlcsQ0FBZDs7a0JBa0NlLEs7Ozs7Ozs7O0FDbENmO0FBQ0E7QUFDQTs7QUFFQSxJQUFJLEtBQUs7QUFDUCxjQUFZLHNCQUFXO0FBQ3JCLFFBQUksT0FBUSxFQUFFLGNBQUYsQ0FBWjtBQUFBLFFBQ0ksUUFBUSxhQURaOztBQUdBLFNBQUssSUFBTCxDQUFVLEtBQVY7O0FBRUEsYUFBUyxXQUFULEdBQXVCO0FBQ3JCLFVBQUksUUFBUyxFQUFiO0FBQUEsVUFDSSxTQUFTLEVBRGI7QUFBQSxVQUVJLE9BQVMsUUFBUSxNQUZyQjtBQUFBLFVBR0ksT0FBUywyQkFIYjs7QUFLQSxXQUFLLElBQUksSUFBSSxDQUFiLEVBQWdCLElBQUksSUFBcEIsRUFBMEIsR0FBMUIsRUFBK0I7QUFDN0IsZ0JBQVEsMkJBQTJCLENBQTNCLEdBQStCLFVBQXZDO0FBQ0Q7O0FBRUQsY0FBUSxRQUFSOztBQUVBLGFBQU8sSUFBUDtBQUNEO0FBQ0Y7QUFyQk0sQ0FBVDs7a0JBd0JlLEU7Ozs7Ozs7O0FDNUJmLElBQU0sU0FBUztBQUNiLGNBQVksc0JBQVc7QUFDckIsUUFBTSxjQUFhLEVBQUUsY0FBRixDQUFuQjtBQUNBLFFBQU0sY0FBYSxFQUFFLGNBQUYsQ0FBbkI7O0FBRUEsZ0JBQVksS0FBWixDQUFrQixZQUFZO0FBQzVCLGtCQUFZLFdBQVosQ0FBd0IsTUFBeEI7QUFDRCxLQUZEO0FBR0QsR0FSWTtBQVNiLGdCQUFjLHdCQUFXO0FBQ3ZCLFFBQU0sa0JBQWtCLEVBQUUsa0JBQUYsQ0FBeEI7QUFDQSxRQUFNLGFBQWEsRUFBRSxhQUFGLENBQW5COztBQUVBLG9CQUFnQixLQUFoQixDQUFzQixZQUFZO0FBQ2hDLGlCQUFXLFdBQVgsQ0FBdUIsb0JBQXZCO0FBQ0QsS0FGRDtBQUdEO0FBaEJZLENBQWY7O2tCQW1CZSxNOzs7Ozs7OztBQ25CZixJQUFNLE9BQU87QUFDWCxjQUFZLHNCQUFXO0FBQ3JCLFFBQU0sV0FBVztBQUNmLGdCQUFVLElBREs7QUFFZixvQkFBYyxDQUZDO0FBR2Ysc0JBQWdCLENBSEQ7QUFJZixrS0FKZTtBQU9mLGtLQVBlO0FBVWYsa0JBQVksQ0FDVjtBQUNFLG9CQUFZLElBRGQ7QUFFRSxrQkFBVTtBQUNSLGtCQUFRLEtBREE7QUFFUix3QkFBYyxDQUZOO0FBR1IsMEJBQWdCLENBSFI7QUFJUixxQkFBVyxLQUpIO0FBS1IscUJBQVc7QUFMSDtBQUZaLE9BRFUsRUFVUjtBQUNBLG9CQUFZLEdBRFo7QUFFQSxrQkFBVTtBQUNSLGtCQUFRLEtBREE7QUFFUix3QkFBYyxDQUZOO0FBR1IsMEJBQWdCLENBSFI7QUFJUixxQkFBVyxLQUpIO0FBS1IscUJBQVc7QUFMSDtBQUZWLE9BVlE7QUFWRyxLQUFqQjs7QUFpQ0E7QUFDQSxNQUFFLGNBQUYsRUFBa0IsS0FBbEIsQ0FBd0IsUUFBeEI7QUFDRDtBQXJDVSxDQUFiOztrQkF3Q2UsSSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIi8vIFlvdSBjYW4gd3JpdGUgYSBjYWxsIGFuZCBpbXBvcnQgeW91ciBmdW5jdGlvbnMgaW4gdGhpcyBmaWxlLlxuLy9cbi8vIFRoaXMgZmlsZSB3aWxsIGJlIGNvbXBpbGVkIGludG8gYXBwLmpzIGFuZCB3aWxsIG5vdCBiZSBtaW5pZmllZC5cbi8vIEZlZWwgZnJlZSB3aXRoIHVzaW5nIEVTNiBoZXJlLlxuXG5pbXBvcnQgREUgZnJvbSAnLi9tb2R1bGVzL2RvdHMnO1xuaW1wb3J0IEFCT1VUIGZyb20gJy4vbW9kdWxlcy9hYm91dF91cyc7XG5pbXBvcnQgTkVXUyBmcm9tICcuL21vZHVsZXMvbmV3cyc7XG5pbXBvcnQgSEVBREVSIGZyb20gJy4vbW9kdWxlcy9oZWFkZXInO1xuXG4oICgkKSA9PiB7XG4gICd1c2Ugc3RyaWN0JztcblxuICAvLyBXaGVuIERPTSBpcyByZWFkeVxuICAkKCgpID0+IHtcbiAgICBERS5kb3RzRWZmZWN0KCk7XG4gICAgQUJPVVQuYWJvdXRVc1NsaWRlcigpO1xuICAgIE5FV1MubmV3c1NsaWRlcigpO1xuICAgIEhFQURFUi5tZW51VG9nZ2xlKCk7XG4gICAgSEVBREVSLnNlYXJjaFRvZ2dsZSgpO1xuXG4gICAgLy8gY29uc29sZS5sb2coXCJzZWxlY3QyXCIsIHNlbGVjdDIpXG5cbiAgICAkKFwiLnNlbGVjdDJcIikuc2VsZWN0MigpO1xuICB9KTtcblxufSkoalF1ZXJ5KTtcbiIsImNvbnN0IEFCT1VUID0ge1xuICBhYm91dFVzU2xpZGVyOiBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBzZXR0aW5ncyA9IHtcbiAgICAgIGFycm93czogZmFsc2UsXG4gICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgIGF1dG9wbGF5OiB0cnVlLFxuICAgICAgYXV0b3BsYXlTcGVlZDogMjAwMCxcbiAgICAgIGRvdHM6IHRydWUsXG4gICAgICBjdXN0b21QYWdpbmc6ICgpID0+ICc8ZGl2IGNsYXNzPVwiYWJvdXQtdXMtc2xpZGVyLWRvdHNcIj48L2Rpdj4nLFxuICAgICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICB7XG4gICAgICAgICAgYnJlYWtwb2ludDogMzIxLFxuICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICBhcnJvd3M6IHRydWUsXG4gICAgICAgICAgICBuZXh0QXJyb3c6IGBcbiAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJhYm91dC11cy1zbGlkZXItYXJyb3ctcmlnaHRcIlxuICAgICAgICAgICAgICAgICAgc3JjPVwiYXNzZXRzL2ltYWdlcy9tYWluL2Fycm93X3JpZ2h0LnBuZ1wiXG4gICAgICAgICAgICAgIC8+YCxcbiAgICAgICAgICAgIHByZXZBcnJvdzogYFxuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cImFib3V0LXVzLXNsaWRlci1hcnJvdy1sZWZ0XCJcbiAgICAgICAgICAgICAgICAgIHNyYz1cImFzc2V0cy9pbWFnZXMvbWFpbi9hcnJvd19sZWZ0LnBuZ1wiXG4gICAgICAgICAgICAgIC8+YCxcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9O1xuXG4gICAgLy8gaW5pdGlhbGl6ZSB0aGUgc2xpZGVyXG4gICAgJCgnLmFib3V0LXVzLXNsaWRlcicpLnNsaWNrKHNldHRpbmdzKTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgQUJPVVQ7XG4iLCIvLyBUaGlzIGlzIGFuIGV4YW1wbGVzIG9mIHNpbXBsZSBleHBvcnQuXG4vL1xuLy8gWW91IGNhbiByZW1vdmUgb3IgYWRkIHlvdXIgb3duIGZ1bmN0aW9uIGluIHRoaXMgZmlsZS5cblxudmFyIERFID0ge1xuICBkb3RzRWZmZWN0OiBmdW5jdGlvbigpIHtcbiAgICB2YXIgJGNudCAgPSAkKCcjaG9tZS1jYW52YXMnKSxcbiAgICAgICAgY2VsbHMgPSBjcmVhdGVDZWxscygpO1xuXG4gICAgJGNudC5odG1sKGNlbGxzKTtcblxuICAgIGZ1bmN0aW9uIGNyZWF0ZUNlbGxzKCkge1xuICAgICAgdmFyIHdpZHRoICA9IDEwLFxuICAgICAgICAgIGhlaWdodCA9IDEwLFxuICAgICAgICAgIHNpemUgICA9IHdpZHRoICogaGVpZ2h0LFxuICAgICAgICAgIGh0bWwgICA9ICc8ZGl2IGNsYXNzPVwiZW50cnktY2VsbHNcIj4nO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNpemU7IGkrKykge1xuICAgICAgICBodG1sICs9ICc8ZGl2IGNsYXNzPVwiY2VsbCBjZWxsLScgKyBpICsgJ1wiPjwvZGl2Pic7XG4gICAgICB9XG5cbiAgICAgIGh0bWwgKz0gJzwvZGl2Pic7XG5cbiAgICAgIHJldHVybiBodG1sO1xuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgREU7IiwiY29uc3QgSEVBREVSID0ge1xuICBtZW51VG9nZ2xlOiBmdW5jdGlvbigpIHtcbiAgICBjb25zdCB0b2dnbGVfbWVudT0gJChcIi50b2dnbGVfbWVudVwiKTtcbiAgICBjb25zdCBoZWFkZXJfbWVudT0gJChcIi5oZWFkZXJfbWVudVwiKTtcblxuICAgIHRvZ2dsZV9tZW51LmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgIGhlYWRlcl9tZW51LnRvZ2dsZUNsYXNzKFwic2hvd1wiKTtcbiAgICB9KTtcbiAgfSxcbiAgc2VhcmNoVG9nZ2xlOiBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBmaW5kX2lucHV0X2l0ZW0gPSAkKFwiLmZpbmRfaW5wdXRfaXRlbVwiKTtcbiAgICBjb25zdCBmaW5kX2lucHV0ID0gJChcIi5maW5kX2lucHV0XCIpO1xuXG4gICAgZmluZF9pbnB1dF9pdGVtLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgIGZpbmRfaW5wdXQudG9nZ2xlQ2xhc3MoXCJmaW5kX2lucHV0X19hY3RpdmVcIik7XG4gICAgfSk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhFQURFUjtcbiIsImNvbnN0IE5FV1MgPSB7XG4gIG5ld3NTbGlkZXI6IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IHNldHRpbmdzID0ge1xuICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICBzbGlkZXNUb1Nob3c6IDMsXG4gICAgICBzbGlkZXNUb1Njcm9sbDogMyxcbiAgICAgIG5leHRBcnJvdzogYFxuICAgICAgICA8cCBjbGFzcz1cIm5ld3Mtc2xpZGVyLWFycm93IG5ld3Mtc2xpZGVyLWFycm93LXJpZ2h0XCI+PGkgY2xhc3M9XCJpY29uIGljb24tYXJyb3dcIj48L2k+PHNwYW4+0L/RgNC10LQ8L3NwYW4+PC9wPlxuICAgICAgYCxcbiAgICAgIHByZXZBcnJvdzogYFxuICAgICAgICAgPHAgY2xhc3M9XCJuZXdzLXNsaWRlci1hcnJvdyBuZXdzLXNsaWRlci1hcnJvdy1sZWZ0XCI+PHNwYW4+0YHQu9C10LQ8L3NwYW4+PGkgY2xhc3M9XCJpY29uIGljb24tYXJyb3dcIj48L2k+PC9wPlxuICAgICAgYCxcbiAgICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgICAge1xuICAgICAgICAgIGJyZWFrcG9pbnQ6IDEwMjQsXG4gICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXG4gICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMixcbiAgICAgICAgICAgIG5leHRBcnJvdzogZmFsc2UsXG4gICAgICAgICAgICBwcmV2QXJyb3c6IGZhbHNlLFxuICAgICAgICAgIH1cbiAgICAgICAgfSx7XG4gICAgICAgICAgYnJlYWtwb2ludDogNzIwLFxuICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxuICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgICAgICBuZXh0QXJyb3c6IGZhbHNlLFxuICAgICAgICAgICAgcHJldkFycm93OiBmYWxzZSxcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9O1xuXG4gICAgLy8gaW5pdGlhbGl6ZSB0aGUgc2xpZGVyXG4gICAgJCgnLm5ld3Mtc2xpZGVyJykuc2xpY2soc2V0dGluZ3MpO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBORVdTO1xuIl19
