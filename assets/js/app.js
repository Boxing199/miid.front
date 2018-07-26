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

var _modal = require('./modules/modal');

var _modal2 = _interopRequireDefault(_modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function ($) {
  'use strict';

  // When DOM is ready

  $(function () {
    _dots2.default.dotsEffect();
    _about_us2.default.aboutUsSlider();
    _news2.default.newsSlider();
    _header2.default.menuToggle();
    _header2.default.searchToggle();
    _modal2.default.modalToggle();

    // $(".select2").select2();
  });
})(jQuery); // You can write a call and import your functions in this file.
//
// This file will be compiled into app.js and will not be minified.
// Feel free with using ES6 here.

},{"./modules/about_us":2,"./modules/dots":3,"./modules/header":4,"./modules/modal":5,"./modules/news":6}],2:[function(require,module,exports){
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
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var MODAL = {
  modalToggle: function modalToggle() {
    var button_modal = $(".button-modal");
    var layout_modal = $(".layout_modal");
    var close = $(".modal-close");

    button_modal.click(function () {
      layout_modal.show();
    });

    close.click(function () {
      layout_modal.hide();
    });

    $(document).mouseup(function (e) {
      if (layout_modal.has(e.target).length === 0) {
        layout_modal.hide();
      }
    });

    $(".modal-input_phone").mask('+7(000) 000 - 00 - 00');
  }
};

exports.default = MODAL;

},{}],6:[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvYXBwLmpzIiwic3JjL2pzL21vZHVsZXMvYWJvdXRfdXMuanMiLCJzcmMvanMvbW9kdWxlcy9kb3RzLmpzIiwic3JjL2pzL21vZHVsZXMvaGVhZGVyLmpzIiwic3JjL2pzL21vZHVsZXMvbW9kYWwuanMiLCJzcmMvanMvbW9kdWxlcy9uZXdzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNLQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFHQSxDQUFFLFVBQUMsQ0FBRCxFQUFPO0FBQ1A7O0FBRUE7O0FBQ0EsSUFBRSxZQUFNO0FBQ04sbUJBQUcsVUFBSDtBQUNBLHVCQUFNLGFBQU47QUFDQSxtQkFBSyxVQUFMO0FBQ0EscUJBQU8sVUFBUDtBQUNBLHFCQUFPLFlBQVA7QUFDQSxvQkFBTSxXQUFOOztBQUVBO0FBQ0QsR0FURDtBQVdELENBZkQsRUFlRyxNQWZILEUsQ0FaQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNIQSxJQUFNLFFBQVE7QUFDWixpQkFBZSx5QkFBVztBQUN4QixRQUFNLFdBQVc7QUFDZixjQUFRLEtBRE87QUFFZixnQkFBVSxJQUZLO0FBR2YsZ0JBQVUsSUFISztBQUlmLHFCQUFlLElBSkE7QUFLZixZQUFNLElBTFM7QUFNZixvQkFBYztBQUFBLGVBQU0sMENBQU47QUFBQSxPQU5DO0FBT2Ysa0JBQVksQ0FDVjtBQUNFLG9CQUFZLEdBRGQ7QUFFRSxrQkFBVTtBQUNSLGtCQUFRLElBREE7QUFFUixnTEFGUTtBQU9SO0FBUFE7QUFGWixPQURVO0FBUEcsS0FBakI7O0FBMkJBO0FBQ0EsTUFBRSxrQkFBRixFQUFzQixLQUF0QixDQUE0QixRQUE1QjtBQUNEO0FBL0JXLENBQWQ7O2tCQWtDZSxLOzs7Ozs7OztBQ2xDZjtBQUNBO0FBQ0E7O0FBRUEsSUFBSSxLQUFLO0FBQ1AsY0FBWSxzQkFBVztBQUNyQixRQUFJLE9BQVEsRUFBRSxjQUFGLENBQVo7QUFBQSxRQUNJLFFBQVEsYUFEWjs7QUFHQSxTQUFLLElBQUwsQ0FBVSxLQUFWOztBQUVBLGFBQVMsV0FBVCxHQUF1QjtBQUNyQixVQUFJLFFBQVMsRUFBYjtBQUFBLFVBQ0ksU0FBUyxFQURiO0FBQUEsVUFFSSxPQUFTLFFBQVEsTUFGckI7QUFBQSxVQUdJLE9BQVMsMkJBSGI7O0FBS0EsV0FBSyxJQUFJLElBQUksQ0FBYixFQUFnQixJQUFJLElBQXBCLEVBQTBCLEdBQTFCLEVBQStCO0FBQzdCLGdCQUFRLDJCQUEyQixDQUEzQixHQUErQixVQUF2QztBQUNEOztBQUVELGNBQVEsUUFBUjs7QUFFQSxhQUFPLElBQVA7QUFDRDtBQUNGO0FBckJNLENBQVQ7O2tCQXdCZSxFOzs7Ozs7OztBQzVCZixJQUFNLFNBQVM7QUFDYixjQUFZLHNCQUFXO0FBQ3JCLFFBQU0sY0FBYSxFQUFFLGNBQUYsQ0FBbkI7QUFDQSxRQUFNLGNBQWEsRUFBRSxjQUFGLENBQW5COztBQUVBLGdCQUFZLEtBQVosQ0FBa0IsWUFBWTtBQUM1QixrQkFBWSxXQUFaLENBQXdCLE1BQXhCO0FBQ0QsS0FGRDtBQUdELEdBUlk7QUFTYixnQkFBYyx3QkFBVztBQUN2QixRQUFNLGtCQUFrQixFQUFFLGtCQUFGLENBQXhCO0FBQ0EsUUFBTSxhQUFhLEVBQUUsYUFBRixDQUFuQjs7QUFFQSxvQkFBZ0IsS0FBaEIsQ0FBc0IsWUFBWTtBQUNoQyxpQkFBVyxXQUFYLENBQXVCLG9CQUF2QjtBQUNELEtBRkQ7QUFHRDtBQWhCWSxDQUFmOztrQkFtQmUsTTs7Ozs7Ozs7QUNuQmYsSUFBTSxRQUFRO0FBQ1osZUFBYSx1QkFBVztBQUN0QixRQUFNLGVBQWMsRUFBRSxlQUFGLENBQXBCO0FBQ0EsUUFBTSxlQUFjLEVBQUUsZUFBRixDQUFwQjtBQUNBLFFBQU0sUUFBTyxFQUFFLGNBQUYsQ0FBYjs7QUFFQSxpQkFBYSxLQUFiLENBQW1CLFlBQVk7QUFDN0IsbUJBQWEsSUFBYjtBQUNELEtBRkQ7O0FBSUEsVUFBTSxLQUFOLENBQVksWUFBWTtBQUN0QixtQkFBYSxJQUFiO0FBQ0QsS0FGRDs7QUFJQSxNQUFFLFFBQUYsRUFBWSxPQUFaLENBQW9CLFVBQVUsQ0FBVixFQUFhO0FBQy9CLFVBQUksYUFBYSxHQUFiLENBQWlCLEVBQUUsTUFBbkIsRUFBMkIsTUFBM0IsS0FBc0MsQ0FBMUMsRUFBNEM7QUFDMUMscUJBQWEsSUFBYjtBQUNEO0FBQ0YsS0FKRDs7QUFNQSxNQUFFLG9CQUFGLEVBQXdCLElBQXhCLENBQTZCLHVCQUE3QjtBQUNEO0FBckJXLENBQWQ7O2tCQXdCZSxLOzs7Ozs7OztBQ3hCZixJQUFNLE9BQU87QUFDWCxjQUFZLHNCQUFXO0FBQ3JCLFFBQU0sV0FBVztBQUNmLGdCQUFVLElBREs7QUFFZixvQkFBYyxDQUZDO0FBR2Ysc0JBQWdCLENBSEQ7QUFJZixrS0FKZTtBQU9mLGtLQVBlO0FBVWYsa0JBQVksQ0FDVjtBQUNFLG9CQUFZLElBRGQ7QUFFRSxrQkFBVTtBQUNSLGtCQUFRLEtBREE7QUFFUix3QkFBYyxDQUZOO0FBR1IsMEJBQWdCLENBSFI7QUFJUixxQkFBVyxLQUpIO0FBS1IscUJBQVc7QUFMSDtBQUZaLE9BRFUsRUFVUjtBQUNBLG9CQUFZLEdBRFo7QUFFQSxrQkFBVTtBQUNSLGtCQUFRLEtBREE7QUFFUix3QkFBYyxDQUZOO0FBR1IsMEJBQWdCLENBSFI7QUFJUixxQkFBVyxLQUpIO0FBS1IscUJBQVc7QUFMSDtBQUZWLE9BVlE7QUFWRyxLQUFqQjs7QUFpQ0E7QUFDQSxNQUFFLGNBQUYsRUFBa0IsS0FBbEIsQ0FBd0IsUUFBeEI7QUFDRDtBQXJDVSxDQUFiOztrQkF3Q2UsSSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIi8vIFlvdSBjYW4gd3JpdGUgYSBjYWxsIGFuZCBpbXBvcnQgeW91ciBmdW5jdGlvbnMgaW4gdGhpcyBmaWxlLlxuLy9cbi8vIFRoaXMgZmlsZSB3aWxsIGJlIGNvbXBpbGVkIGludG8gYXBwLmpzIGFuZCB3aWxsIG5vdCBiZSBtaW5pZmllZC5cbi8vIEZlZWwgZnJlZSB3aXRoIHVzaW5nIEVTNiBoZXJlLlxuXG5pbXBvcnQgREUgZnJvbSAnLi9tb2R1bGVzL2RvdHMnO1xuaW1wb3J0IEFCT1VUIGZyb20gJy4vbW9kdWxlcy9hYm91dF91cyc7XG5pbXBvcnQgTkVXUyBmcm9tICcuL21vZHVsZXMvbmV3cyc7XG5pbXBvcnQgSEVBREVSIGZyb20gJy4vbW9kdWxlcy9oZWFkZXInO1xuaW1wb3J0IE1PREFMIGZyb20gJy4vbW9kdWxlcy9tb2RhbCc7XG5cblxuKCAoJCkgPT4ge1xuICAndXNlIHN0cmljdCc7XG5cbiAgLy8gV2hlbiBET00gaXMgcmVhZHlcbiAgJCgoKSA9PiB7XG4gICAgREUuZG90c0VmZmVjdCgpO1xuICAgIEFCT1VULmFib3V0VXNTbGlkZXIoKTtcbiAgICBORVdTLm5ld3NTbGlkZXIoKTtcbiAgICBIRUFERVIubWVudVRvZ2dsZSgpO1xuICAgIEhFQURFUi5zZWFyY2hUb2dnbGUoKTtcbiAgICBNT0RBTC5tb2RhbFRvZ2dsZSgpO1xuXG4gICAgLy8gJChcIi5zZWxlY3QyXCIpLnNlbGVjdDIoKTtcbiAgfSk7XG5cbn0pKGpRdWVyeSk7XG4iLCJjb25zdCBBQk9VVCA9IHtcbiAgYWJvdXRVc1NsaWRlcjogZnVuY3Rpb24oKSB7XG4gICAgY29uc3Qgc2V0dGluZ3MgPSB7XG4gICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICBhdXRvcGxheTogdHJ1ZSxcbiAgICAgIGF1dG9wbGF5U3BlZWQ6IDIwMDAsXG4gICAgICBkb3RzOiB0cnVlLFxuICAgICAgY3VzdG9tUGFnaW5nOiAoKSA9PiAnPGRpdiBjbGFzcz1cImFib3V0LXVzLXNsaWRlci1kb3RzXCI+PC9kaXY+JyxcbiAgICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgICAge1xuICAgICAgICAgIGJyZWFrcG9pbnQ6IDMyMSxcbiAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgYXJyb3dzOiB0cnVlLFxuICAgICAgICAgICAgbmV4dEFycm93OiBgXG4gICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYWJvdXQtdXMtc2xpZGVyLWFycm93LXJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgIHNyYz1cImFzc2V0cy9pbWFnZXMvbWFpbi9hcnJvd19yaWdodC5wbmdcIlxuICAgICAgICAgICAgICAvPmAsXG4gICAgICAgICAgICBwcmV2QXJyb3c6IGBcbiAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJhYm91dC11cy1zbGlkZXItYXJyb3ctbGVmdFwiXG4gICAgICAgICAgICAgICAgICBzcmM9XCJhc3NldHMvaW1hZ2VzL21haW4vYXJyb3dfbGVmdC5wbmdcIlxuICAgICAgICAgICAgICAvPmAsXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfTtcblxuICAgIC8vIGluaXRpYWxpemUgdGhlIHNsaWRlclxuICAgICQoJy5hYm91dC11cy1zbGlkZXInKS5zbGljayhzZXR0aW5ncyk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFCT1VUO1xuIiwiLy8gVGhpcyBpcyBhbiBleGFtcGxlcyBvZiBzaW1wbGUgZXhwb3J0LlxuLy9cbi8vIFlvdSBjYW4gcmVtb3ZlIG9yIGFkZCB5b3VyIG93biBmdW5jdGlvbiBpbiB0aGlzIGZpbGUuXG5cbnZhciBERSA9IHtcbiAgZG90c0VmZmVjdDogZnVuY3Rpb24oKSB7XG4gICAgdmFyICRjbnQgID0gJCgnI2hvbWUtY2FudmFzJyksXG4gICAgICAgIGNlbGxzID0gY3JlYXRlQ2VsbHMoKTtcblxuICAgICRjbnQuaHRtbChjZWxscyk7XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVDZWxscygpIHtcbiAgICAgIHZhciB3aWR0aCAgPSAxMCxcbiAgICAgICAgICBoZWlnaHQgPSAxMCxcbiAgICAgICAgICBzaXplICAgPSB3aWR0aCAqIGhlaWdodCxcbiAgICAgICAgICBodG1sICAgPSAnPGRpdiBjbGFzcz1cImVudHJ5LWNlbGxzXCI+JztcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzaXplOyBpKyspIHtcbiAgICAgICAgaHRtbCArPSAnPGRpdiBjbGFzcz1cImNlbGwgY2VsbC0nICsgaSArICdcIj48L2Rpdj4nO1xuICAgICAgfVxuXG4gICAgICBodG1sICs9ICc8L2Rpdj4nO1xuXG4gICAgICByZXR1cm4gaHRtbDtcbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IERFOyIsImNvbnN0IEhFQURFUiA9IHtcbiAgbWVudVRvZ2dsZTogZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgdG9nZ2xlX21lbnU9ICQoXCIudG9nZ2xlX21lbnVcIik7XG4gICAgY29uc3QgaGVhZGVyX21lbnU9ICQoXCIuaGVhZGVyX21lbnVcIik7XG5cbiAgICB0b2dnbGVfbWVudS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICBoZWFkZXJfbWVudS50b2dnbGVDbGFzcyhcInNob3dcIik7XG4gICAgfSk7XG4gIH0sXG4gIHNlYXJjaFRvZ2dsZTogZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgZmluZF9pbnB1dF9pdGVtID0gJChcIi5maW5kX2lucHV0X2l0ZW1cIik7XG4gICAgY29uc3QgZmluZF9pbnB1dCA9ICQoXCIuZmluZF9pbnB1dFwiKTtcblxuICAgIGZpbmRfaW5wdXRfaXRlbS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICBmaW5kX2lucHV0LnRvZ2dsZUNsYXNzKFwiZmluZF9pbnB1dF9fYWN0aXZlXCIpO1xuICAgIH0pO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIRUFERVI7XG4iLCJjb25zdCBNT0RBTCA9IHtcbiAgbW9kYWxUb2dnbGU6IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGJ1dHRvbl9tb2RhbD0gJChcIi5idXR0b24tbW9kYWxcIik7XG4gICAgY29uc3QgbGF5b3V0X21vZGFsPSAkKFwiLmxheW91dF9tb2RhbFwiKTtcbiAgICBjb25zdCBjbG9zZT0gJChcIi5tb2RhbC1jbG9zZVwiKTtcblxuICAgIGJ1dHRvbl9tb2RhbC5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICBsYXlvdXRfbW9kYWwuc2hvdygpO1xuICAgIH0pO1xuXG4gICAgY2xvc2UuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgbGF5b3V0X21vZGFsLmhpZGUoKTtcbiAgICB9KTtcblxuICAgICQoZG9jdW1lbnQpLm1vdXNldXAoZnVuY3Rpb24gKGUpIHtcbiAgICAgIGlmIChsYXlvdXRfbW9kYWwuaGFzKGUudGFyZ2V0KS5sZW5ndGggPT09IDApe1xuICAgICAgICBsYXlvdXRfbW9kYWwuaGlkZSgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgJChcIi5tb2RhbC1pbnB1dF9waG9uZVwiKS5tYXNrKCcrNygwMDApIDAwMCAtIDAwIC0gMDAnKTtcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1PREFMO1xuIiwiY29uc3QgTkVXUyA9IHtcbiAgbmV3c1NsaWRlcjogZnVuY3Rpb24oKSB7XG4gICAgY29uc3Qgc2V0dGluZ3MgPSB7XG4gICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgIHNsaWRlc1RvU2hvdzogMyxcbiAgICAgIHNsaWRlc1RvU2Nyb2xsOiAzLFxuICAgICAgbmV4dEFycm93OiBgXG4gICAgICAgIDxwIGNsYXNzPVwibmV3cy1zbGlkZXItYXJyb3cgbmV3cy1zbGlkZXItYXJyb3ctcmlnaHRcIj48aSBjbGFzcz1cImljb24gaWNvbi1hcnJvd1wiPjwvaT48c3Bhbj7Qv9GA0LXQtDwvc3Bhbj48L3A+XG4gICAgICBgLFxuICAgICAgcHJldkFycm93OiBgXG4gICAgICAgICA8cCBjbGFzcz1cIm5ld3Mtc2xpZGVyLWFycm93IG5ld3Mtc2xpZGVyLWFycm93LWxlZnRcIj48c3Bhbj7RgdC70LXQtDwvc3Bhbj48aSBjbGFzcz1cImljb24gaWNvbi1hcnJvd1wiPjwvaT48L3A+XG4gICAgICBgLFxuICAgICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICB7XG4gICAgICAgICAgYnJlYWtwb2ludDogMTAyNCxcbiAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcbiAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAyLFxuICAgICAgICAgICAgbmV4dEFycm93OiBmYWxzZSxcbiAgICAgICAgICAgIHByZXZBcnJvdzogZmFsc2UsXG4gICAgICAgICAgfVxuICAgICAgICB9LHtcbiAgICAgICAgICBicmVha3BvaW50OiA3MjAsXG4gICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgICAgIG5leHRBcnJvdzogZmFsc2UsXG4gICAgICAgICAgICBwcmV2QXJyb3c6IGZhbHNlLFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH07XG5cbiAgICAvLyBpbml0aWFsaXplIHRoZSBzbGlkZXJcbiAgICAkKCcubmV3cy1zbGlkZXInKS5zbGljayhzZXR0aW5ncyk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5FV1M7XG4iXX0=
