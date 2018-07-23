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
      nextArrow: '\n        <p class="news-slider-arrow news-slider-arrow-right">\u043F\u0440\u0435\u0434</p>\n      ',
      prevArrow: '\n         <p class="news-slider-arrow news-slider-arrow-left">\u0441\u043B\u0435\u0434</p>\n      ',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvYXBwLmpzIiwic3JjL2pzL21vZHVsZXMvYWJvdXRfdXMuanMiLCJzcmMvanMvbW9kdWxlcy9kb3RzLmpzIiwic3JjL2pzL21vZHVsZXMvaGVhZGVyLmpzIiwic3JjL2pzL21vZHVsZXMvbmV3cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDS0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQVJBO0FBQ0E7QUFDQTtBQUNBOztBQU9BLENBQUUsVUFBQyxDQUFELEVBQU87QUFDUDs7QUFFQTs7QUFDQSxJQUFFLFlBQU07QUFDTixtQkFBRyxVQUFIO0FBQ0EsdUJBQU0sYUFBTjtBQUNBLG1CQUFLLFVBQUw7QUFDQSxxQkFBTyxVQUFQO0FBQ0EscUJBQU8sWUFBUDtBQUNELEdBTkQ7QUFRRCxDQVpELEVBWUcsTUFaSDs7Ozs7Ozs7QUNWQSxJQUFNLFFBQVE7QUFDWixpQkFBZSx5QkFBVztBQUN4QixRQUFNLFdBQVc7QUFDZixjQUFRLEtBRE87QUFFZixnQkFBVSxJQUZLO0FBR2YsZ0JBQVUsSUFISztBQUlmLHFCQUFlLElBSkE7QUFLZixZQUFNLElBTFM7QUFNZixvQkFBYztBQUFBLGVBQU0sMENBQU47QUFBQSxPQU5DO0FBT2Ysa0JBQVksQ0FDVjtBQUNFLG9CQUFZLEdBRGQ7QUFFRSxrQkFBVTtBQUNSLGtCQUFRLElBREE7QUFFUixnTEFGUTtBQU9SO0FBUFE7QUFGWixPQURVO0FBUEcsS0FBakI7O0FBMkJBO0FBQ0EsTUFBRSxrQkFBRixFQUFzQixLQUF0QixDQUE0QixRQUE1QjtBQUNEO0FBL0JXLENBQWQ7O2tCQWtDZSxLOzs7Ozs7OztBQ2xDZjtBQUNBO0FBQ0E7O0FBRUEsSUFBSSxLQUFLO0FBQ1AsY0FBWSxzQkFBVztBQUNyQixRQUFJLE9BQVEsRUFBRSxjQUFGLENBQVo7QUFBQSxRQUNJLFFBQVEsYUFEWjs7QUFHQSxTQUFLLElBQUwsQ0FBVSxLQUFWOztBQUVBLGFBQVMsV0FBVCxHQUF1QjtBQUNyQixVQUFJLFFBQVMsRUFBYjtBQUFBLFVBQ0ksU0FBUyxFQURiO0FBQUEsVUFFSSxPQUFTLFFBQVEsTUFGckI7QUFBQSxVQUdJLE9BQVMsMkJBSGI7O0FBS0EsV0FBSyxJQUFJLElBQUksQ0FBYixFQUFnQixJQUFJLElBQXBCLEVBQTBCLEdBQTFCLEVBQStCO0FBQzdCLGdCQUFRLDJCQUEyQixDQUEzQixHQUErQixVQUF2QztBQUNEOztBQUVELGNBQVEsUUFBUjs7QUFFQSxhQUFPLElBQVA7QUFDRDtBQUNGO0FBckJNLENBQVQ7O2tCQXdCZSxFOzs7Ozs7OztBQzVCZixJQUFNLFNBQVM7QUFDYixjQUFZLHNCQUFXO0FBQ3JCLFFBQU0sY0FBYSxFQUFFLGNBQUYsQ0FBbkI7QUFDQSxRQUFNLGNBQWEsRUFBRSxjQUFGLENBQW5COztBQUVBLGdCQUFZLEtBQVosQ0FBa0IsWUFBWTtBQUM1QixrQkFBWSxXQUFaLENBQXdCLE1BQXhCO0FBQ0QsS0FGRDtBQUdELEdBUlk7QUFTYixnQkFBYyx3QkFBVztBQUN2QixRQUFNLGtCQUFrQixFQUFFLGtCQUFGLENBQXhCO0FBQ0EsUUFBTSxhQUFhLEVBQUUsYUFBRixDQUFuQjs7QUFFQSxvQkFBZ0IsS0FBaEIsQ0FBc0IsWUFBWTtBQUNoQyxpQkFBVyxXQUFYLENBQXVCLG9CQUF2QjtBQUNELEtBRkQ7QUFHRDtBQWhCWSxDQUFmOztrQkFtQmUsTTs7Ozs7Ozs7QUNuQmYsSUFBTSxPQUFPO0FBQ1gsY0FBWSxzQkFBVztBQUNyQixRQUFNLFdBQVc7QUFDZixnQkFBVSxJQURLO0FBRWYsb0JBQWMsQ0FGQztBQUdmLHNCQUFnQixDQUhEO0FBSWYsc0hBSmU7QUFPZixzSEFQZTtBQVVmLGtCQUFZLENBQ1Y7QUFDRSxvQkFBWSxJQURkO0FBRUUsa0JBQVU7QUFDUixrQkFBUSxLQURBO0FBRVIsd0JBQWMsQ0FGTjtBQUdSLDBCQUFnQixDQUhSO0FBSVIscUJBQVcsS0FKSDtBQUtSLHFCQUFXO0FBTEg7QUFGWixPQURVLEVBVVI7QUFDQSxvQkFBWSxHQURaO0FBRUEsa0JBQVU7QUFDUixrQkFBUSxLQURBO0FBRVIsd0JBQWMsQ0FGTjtBQUdSLDBCQUFnQixDQUhSO0FBSVIscUJBQVcsS0FKSDtBQUtSLHFCQUFXO0FBTEg7QUFGVixPQVZRO0FBVkcsS0FBakI7O0FBaUNBO0FBQ0EsTUFBRSxjQUFGLEVBQWtCLEtBQWxCLENBQXdCLFFBQXhCO0FBQ0Q7QUFyQ1UsQ0FBYjs7a0JBd0NlLEkiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIvLyBZb3UgY2FuIHdyaXRlIGEgY2FsbCBhbmQgaW1wb3J0IHlvdXIgZnVuY3Rpb25zIGluIHRoaXMgZmlsZS5cbi8vXG4vLyBUaGlzIGZpbGUgd2lsbCBiZSBjb21waWxlZCBpbnRvIGFwcC5qcyBhbmQgd2lsbCBub3QgYmUgbWluaWZpZWQuXG4vLyBGZWVsIGZyZWUgd2l0aCB1c2luZyBFUzYgaGVyZS5cblxuaW1wb3J0IERFIGZyb20gJy4vbW9kdWxlcy9kb3RzJztcbmltcG9ydCBBQk9VVCBmcm9tICcuL21vZHVsZXMvYWJvdXRfdXMnO1xuaW1wb3J0IE5FV1MgZnJvbSAnLi9tb2R1bGVzL25ld3MnO1xuaW1wb3J0IEhFQURFUiBmcm9tICcuL21vZHVsZXMvaGVhZGVyJztcblxuKCAoJCkgPT4ge1xuICAndXNlIHN0cmljdCc7XG5cbiAgLy8gV2hlbiBET00gaXMgcmVhZHlcbiAgJCgoKSA9PiB7XG4gICAgREUuZG90c0VmZmVjdCgpO1xuICAgIEFCT1VULmFib3V0VXNTbGlkZXIoKTtcbiAgICBORVdTLm5ld3NTbGlkZXIoKTtcbiAgICBIRUFERVIubWVudVRvZ2dsZSgpO1xuICAgIEhFQURFUi5zZWFyY2hUb2dnbGUoKTtcbiAgfSk7XG5cbn0pKGpRdWVyeSk7XG4iLCJjb25zdCBBQk9VVCA9IHtcbiAgYWJvdXRVc1NsaWRlcjogZnVuY3Rpb24oKSB7XG4gICAgY29uc3Qgc2V0dGluZ3MgPSB7XG4gICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICBhdXRvcGxheTogdHJ1ZSxcbiAgICAgIGF1dG9wbGF5U3BlZWQ6IDIwMDAsXG4gICAgICBkb3RzOiB0cnVlLFxuICAgICAgY3VzdG9tUGFnaW5nOiAoKSA9PiAnPGRpdiBjbGFzcz1cImFib3V0LXVzLXNsaWRlci1kb3RzXCI+PC9kaXY+JyxcbiAgICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgICAge1xuICAgICAgICAgIGJyZWFrcG9pbnQ6IDMyMSxcbiAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgYXJyb3dzOiB0cnVlLFxuICAgICAgICAgICAgbmV4dEFycm93OiBgXG4gICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYWJvdXQtdXMtc2xpZGVyLWFycm93LXJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgIHNyYz1cImFzc2V0cy9pbWFnZXMvbWFpbi9hcnJvd19yaWdodC5wbmdcIlxuICAgICAgICAgICAgICAvPmAsXG4gICAgICAgICAgICBwcmV2QXJyb3c6IGBcbiAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJhYm91dC11cy1zbGlkZXItYXJyb3ctbGVmdFwiXG4gICAgICAgICAgICAgICAgICBzcmM9XCJhc3NldHMvaW1hZ2VzL21haW4vYXJyb3dfbGVmdC5wbmdcIlxuICAgICAgICAgICAgICAvPmAsXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfTtcblxuICAgIC8vIGluaXRpYWxpemUgdGhlIHNsaWRlclxuICAgICQoJy5hYm91dC11cy1zbGlkZXInKS5zbGljayhzZXR0aW5ncyk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFCT1VUO1xuIiwiLy8gVGhpcyBpcyBhbiBleGFtcGxlcyBvZiBzaW1wbGUgZXhwb3J0LlxuLy9cbi8vIFlvdSBjYW4gcmVtb3ZlIG9yIGFkZCB5b3VyIG93biBmdW5jdGlvbiBpbiB0aGlzIGZpbGUuXG5cbnZhciBERSA9IHtcbiAgZG90c0VmZmVjdDogZnVuY3Rpb24oKSB7XG4gICAgdmFyICRjbnQgID0gJCgnI2hvbWUtY2FudmFzJyksXG4gICAgICAgIGNlbGxzID0gY3JlYXRlQ2VsbHMoKTtcblxuICAgICRjbnQuaHRtbChjZWxscyk7XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVDZWxscygpIHtcbiAgICAgIHZhciB3aWR0aCAgPSAxMCxcbiAgICAgICAgICBoZWlnaHQgPSAxMCxcbiAgICAgICAgICBzaXplICAgPSB3aWR0aCAqIGhlaWdodCxcbiAgICAgICAgICBodG1sICAgPSAnPGRpdiBjbGFzcz1cImVudHJ5LWNlbGxzXCI+JztcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzaXplOyBpKyspIHtcbiAgICAgICAgaHRtbCArPSAnPGRpdiBjbGFzcz1cImNlbGwgY2VsbC0nICsgaSArICdcIj48L2Rpdj4nO1xuICAgICAgfVxuXG4gICAgICBodG1sICs9ICc8L2Rpdj4nO1xuXG4gICAgICByZXR1cm4gaHRtbDtcbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IERFOyIsImNvbnN0IEhFQURFUiA9IHtcbiAgbWVudVRvZ2dsZTogZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgdG9nZ2xlX21lbnU9ICQoXCIudG9nZ2xlX21lbnVcIik7XG4gICAgY29uc3QgaGVhZGVyX21lbnU9ICQoXCIuaGVhZGVyX21lbnVcIik7XG5cbiAgICB0b2dnbGVfbWVudS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICBoZWFkZXJfbWVudS50b2dnbGVDbGFzcyhcInNob3dcIik7XG4gICAgfSk7XG4gIH0sXG4gIHNlYXJjaFRvZ2dsZTogZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgZmluZF9pbnB1dF9pdGVtID0gJChcIi5maW5kX2lucHV0X2l0ZW1cIik7XG4gICAgY29uc3QgZmluZF9pbnB1dCA9ICQoXCIuZmluZF9pbnB1dFwiKTtcblxuICAgIGZpbmRfaW5wdXRfaXRlbS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICBmaW5kX2lucHV0LnRvZ2dsZUNsYXNzKFwiZmluZF9pbnB1dF9fYWN0aXZlXCIpO1xuICAgIH0pXG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhFQURFUjtcbiIsImNvbnN0IE5FV1MgPSB7XG4gIG5ld3NTbGlkZXI6IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IHNldHRpbmdzID0ge1xuICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICBzbGlkZXNUb1Nob3c6IDMsXG4gICAgICBzbGlkZXNUb1Njcm9sbDogMyxcbiAgICAgIG5leHRBcnJvdzogYFxuICAgICAgICA8cCBjbGFzcz1cIm5ld3Mtc2xpZGVyLWFycm93IG5ld3Mtc2xpZGVyLWFycm93LXJpZ2h0XCI+0L/RgNC10LQ8L3A+XG4gICAgICBgLFxuICAgICAgcHJldkFycm93OiBgXG4gICAgICAgICA8cCBjbGFzcz1cIm5ld3Mtc2xpZGVyLWFycm93IG5ld3Mtc2xpZGVyLWFycm93LWxlZnRcIj7RgdC70LXQtDwvcD5cbiAgICAgIGAsXG4gICAgICByZXNwb25zaXZlOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBicmVha3BvaW50OiAxMDI0LFxuICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxuICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDIsXG4gICAgICAgICAgICBuZXh0QXJyb3c6IGZhbHNlLFxuICAgICAgICAgICAgcHJldkFycm93OiBmYWxzZSxcbiAgICAgICAgICB9XG4gICAgICAgIH0se1xuICAgICAgICAgIGJyZWFrcG9pbnQ6IDcyMCxcbiAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICAgICAgbmV4dEFycm93OiBmYWxzZSxcbiAgICAgICAgICAgIHByZXZBcnJvdzogZmFsc2UsXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfTtcblxuICAgIC8vIGluaXRpYWxpemUgdGhlIHNsaWRlclxuICAgICQoJy5uZXdzLXNsaWRlcicpLnNsaWNrKHNldHRpbmdzKTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgTkVXUztcbiJdfQ==
