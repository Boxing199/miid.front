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

    $(".select2").select2();

    $.each($('.j-slider'), function (index, slider) {
      var handles = $(slider).find('.j-slider-handle span');
      var leftHandle = handles.eq(0);
      var righHandle = handles.eq(1);

      $(slider).slider({
        range: true,
        min: 0,
        max: 500,
        values: [75, 300],

        create: function create() {
          leftHandle.text($(this).slider("values", 0));
          righHandle.text($(this).slider("values", 1));
        },
        slide: function slide(event, ui) {
          leftHandle.text(ui.values[0]);
          righHandle.text(ui.values[1]);
        }
      });
    });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvYXBwLmpzIiwic3JjL2pzL21vZHVsZXMvYWJvdXRfdXMuanMiLCJzcmMvanMvbW9kdWxlcy9kb3RzLmpzIiwic3JjL2pzL21vZHVsZXMvaGVhZGVyLmpzIiwic3JjL2pzL21vZHVsZXMvbW9kYWwuanMiLCJzcmMvanMvbW9kdWxlcy9uZXdzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNLQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxDQUFFLFVBQUMsQ0FBRCxFQUFPO0FBQ1A7O0FBRUE7O0FBQ0EsSUFBRSxZQUFNO0FBQ04sbUJBQUcsVUFBSDtBQUNBLHVCQUFNLGFBQU47QUFDQSxtQkFBSyxVQUFMO0FBQ0EscUJBQU8sVUFBUDtBQUNBLHFCQUFPLFlBQVA7QUFDQSxvQkFBTSxXQUFOOztBQUVBLE1BQUUsVUFBRixFQUFjLE9BQWQ7O0FBRUEsTUFBRSxJQUFGLENBQU8sRUFBRSxXQUFGLENBQVAsRUFBdUIsVUFBQyxLQUFELEVBQVEsTUFBUixFQUFtQjtBQUN4QyxVQUFNLFVBQVUsRUFBRSxNQUFGLEVBQVUsSUFBVixDQUFlLHVCQUFmLENBQWhCO0FBQ0EsVUFBTSxhQUFhLFFBQVEsRUFBUixDQUFXLENBQVgsQ0FBbkI7QUFDQSxVQUFNLGFBQWEsUUFBUSxFQUFSLENBQVcsQ0FBWCxDQUFuQjs7QUFFQSxRQUFFLE1BQUYsRUFBVSxNQUFWLENBQWlCO0FBQ2YsZUFBTyxJQURRO0FBRWYsYUFBSyxDQUZVO0FBR2YsYUFBSyxHQUhVO0FBSWYsZ0JBQVEsQ0FBRSxFQUFGLEVBQU0sR0FBTixDQUpPOztBQU1mLGdCQUFRLGtCQUFXO0FBQ2pCLHFCQUFXLElBQVgsQ0FBaUIsRUFBRyxJQUFILEVBQVUsTUFBVixDQUFrQixRQUFsQixFQUE0QixDQUE1QixDQUFqQjtBQUNBLHFCQUFXLElBQVgsQ0FBaUIsRUFBRyxJQUFILEVB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dUJBQTdCO0FBQ0Q7QUFyQlcsQ0FBZDs7a0JBd0JlLEs7Ozs7Ozs7O0FDeEJmLElBQU0sT0FBTztBQUNYLGNBQVksc0JBQVc7QUFDckIsUUFBTSxXQUFXO0FBQ2YsZ0JBQVUsSUFESztBQUVmLG9CQUFjLENBRkM7QUFHZixzQkFBZ0IsQ0FIRDtBQUlmLGtLQUplO0FBT2Ysa0tBUGU7QUFVZixrQkFBWSxDQUNWO0FBQ0Usb0JBQVksSUFEZDtBQUVFLGtCQUFVO0FBQ1Isa0JBQVEsS0FEQTtBQUVSLHdCQUFjLENBRk47QUFHUiwwQkFBZ0IsQ0FIUjtBQUlSLHFCQUFXLEtBSkg7QUFLUixxQkFBVztBQUxIO0FBRlosT0FEVSxFQVVSO0FBQ0Esb0JBQVksR0FEWjtBQUVBLGtCQUFVO0FBQ1Isa0JBQVEsS0FEQTtBQUVSLHdCQUFjLENBRk47QUFHUiwwQkFBZ0IsQ0FIUjtBQUlSLHFCQUFXLEtBSkg7QUFLUixxQkFBVztBQUxIO0FBRlYsT0FWUTtBQVZHLEtBQWpCOztBQWlDQTtBQUNBLE1BQUUsY0FBRixFQUFrQixLQUFsQixDQUF3QixRQUF4QjtBQUNEO0FBckNVLENBQWI7O2tCQXdDZSxJIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiLy8gWW91IGNhbiB3cml0ZSBhIGNhbGwgYW5kIGltcG9ydCB5b3VyIGZ1bmN0aW9ucyBpbiB0aGlzIGZpbGUuXG4vL1xuLy8gVGhpcyBmaWxlIHdpbGwgYmUgY29tcGlsZWQgaW50byBhcHAuanMgYW5kIHdpbGwgbm90IGJlIG1pbmlmaWVkLlxuLy8gRmVlbCBmcmVlIHdpdGggdXNpbmcgRVM2IGhlcmUuXG5cbmltcG9ydCBERSBmcm9tICcuL21vZHVsZXMvZG90cyc7XG5pbXBvcnQgQUJPVVQgZnJvbSAnLi9tb2R1bGVzL2Fib3V0X3VzJztcbmltcG9ydCBORVdTIGZyb20gJy4vbW9kdWxlcy9uZXdzJztcbmltcG9ydCBIRUFERVIgZnJvbSAnLi9tb2R1bGVzL2hlYWRlcic7XG5pbXBvcnQgTU9EQUwgZnJvbSAnLi9tb2R1bGVzL21vZGFsJztcblxuKCAoJCkgPT4ge1xuICAndXNlIHN0cmljdCc7XG5cbiAgLy8gV2hlbiBET00gaXMgcmVhZHlcbiAgJCgoKSA9PiB7XG4gICAgREUuZG90c0VmZmVjdCgpO1xuICAgIEFCT1VULmFib3V0VXNTbGlkZXIoKTtcbiAgICBORVdTLm5ld3NTbGlkZXIoKTtcbiAgICBIRUFERVIubWVudVRvZ2dsZSgpO1xuICAgIEhFQURFUi5zZWFyY2hUb2dnbGUoKTtcbiAgICBNT0RBTC5tb2RhbFRvZ2dsZSgpO1xuXG4gICAgJChcIi5zZWxlY3QyXCIpLnNlbGVjdDIoKTtcblxuICAgICQuZWFjaCgkKCcuai1zbGlkZXInKSwgKGluZGV4LCBzbGlkZXIpID0+IHtcbiAgICAgIGNvbnN0IGhhbmRsZXMgPSAkKHNsaWRlcikuZmluZCgnLmotc2xpZGVyLWhhbmRsZSBzcGFuJyk7XG4gICAgICBjb25zdCBsZWZ0SGFuZGxlID0gaGFuZGxlcy5lcSgwKTtcbiAgICAgIGNvbnN0IHJpZ2hIYW5kbGUgPSBoYW5kbGVzLmVxKDEpO1xuXG4gICAgICAkKHNsaWRlcikuc2xpZGVyKHtcbiAgICAgICAgcmFuZ2U6IHRydWUsXG4gICAgICAgIG1pbjogMCxcbiAgICAgICAgbWF4OiA1MDAsXG4gICAgICAgIHZhbHVlczogWyA3NSwgMzAwIF0sXG5cbiAgICAgICAgY3JlYXRlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICBsZWZ0SGFuZGxlLnRleHQoICQoIHRoaXMgKS5zbGlkZXIoIFwidmFsdWVzXCIsIDAgKSApO1xuICAgICAgICAgIHJpZ2hIYW5kbGUudGV4dCggJCggdGhpcyApLnNsaWRlciggXCJ2YWx1ZXNcIiwgMSApICk7XG4gICAgICAgIH0sXG4gICAgICAgIHNsaWRlOiBmdW5jdGlvbiggZXZlbnQsIHVpICkge1xuICAgICAgICAgIGxlZnRIYW5kbGUudGV4dCggdWkudmFsdWVzWzBdICk7XG4gICAgICAgICAgcmlnaEhhbmRsZS50ZXh0KCB1aS52YWx1ZXNbMV0gKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSlcblxuICB9KTtcblxufSkoalF1ZXJ5KTtcbiIsImNvbnN0IEFCT1VUID0ge1xuICBhYm91dFVzU2xpZGVyOiBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBzZXR0aW5ncyA9IHtcbiAgICAgIGFycm93czogZmFsc2UsXG4gICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgIGF1dG9wbGF5OiB0cnVlLFxuICAgICAgYXV0b3BsYXlTcGVlZDogMjAwMCxcbiAgICAgIGRvdHM6IHRydWUsXG4gICAgICBjdXN0b21QYWdpbmc6ICgpID0+ICc8ZGl2IGNsYXNzPVwiYWJvdXQtdXMtc2xpZGVyLWRvdHNcIj48L2Rpdj4nLFxuICAgICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICB7XG4gICAgICAgICAgYnJlYWtwb2ludDogMzIxLFxuICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICBhcnJvd3M6IHRydWUsXG4gICAgICAgICAgICBuZXh0QXJyb3c6IGBcbiAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJhYm91dC11cy1zbGlkZXItYXJyb3ctcmlnaHRcIlxuICAgICAgICAgICAgICAgICAgc3JjPVwiYXNzZXRzL2ltYWdlcy9tYWluL2Fycm93X3JpZ2h0LnBuZ1wiXG4gICAgICAgICAgICAgIC8+YCxcbiAgICAgICAgICAgIHByZXZBcnJvdzogYFxuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cImFib3V0LXVzLXNsaWRlci1hcnJvdy1sZWZ0XCJcbiAgICAgICAgICAgICAgICAgIHNyYz1cImFzc2V0cy9pbWFnZXMvbWFpbi9hcnJvd19sZWZ0LnBuZ1wiXG4gICAgICAgICAgICAgIC8+YCxcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9O1xuXG4gICAgLy8gaW5pdGlhbGl6ZSB0aGUgc2xpZGVyXG4gICAgJCgnLmFib3V0LXVzLXNsaWRlcicpLnNsaWNrKHNldHRpbmdzKTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgQUJPVVQ7XG4iLCIvLyBUaGlzIGlzIGFuIGV4YW1wbGVzIG9mIHNpbXBsZSBleHBvcnQuXG4vL1xuLy8gWW91IGNhbiByZW1vdmUgb3IgYWRkIHlvdXIgb3duIGZ1bmN0aW9uIGluIHRoaXMgZmlsZS5cblxudmFyIERFID0ge1xuICBkb3RzRWZmZWN0OiBmdW5jdGlvbigpIHtcbiAgICB2YXIgJGNudCAgPSAkKCcjaG9tZS1jYW52YXMnKSxcbiAgICAgICAgY2VsbHMgPSBjcmVhdGVDZWxscygpO1xuXG4gICAgJGNudC5odG1sKGNlbGxzKTtcblxuICAgIGZ1bmN0aW9uIGNyZWF0ZUNlbGxzKCkge1xuICAgICAgdmFyIHdpZHRoICA9IDEwLFxuICAgICAgICAgIGhlaWdodCA9IDEwLFxuICAgICAgICAgIHNpemUgICA9IHdpZHRoICogaGVpZ2h0LFxuICAgICAgICAgIGh0bWwgICA9ICc8ZGl2IGNsYXNzPVwiZW50cnktY2VsbHNcIj4nO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNpemU7IGkrKykge1xuICAgICAgICBodG1sICs9ICc8ZGl2IGNsYXNzPVwiY2VsbCBjZWxsLScgKyBpICsgJ1wiPjwvZGl2Pic7XG4gICAgICB9XG5cbiAgICAgIGh0bWwgKz0gJzwvZGl2Pic7XG5cbiAgICAgIHJldHVybiBodG1sO1xuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgREU7IiwiY29uc3QgSEVBREVSID0ge1xuICBtZW51VG9nZ2xlOiBmdW5jdGlvbigpIHtcbiAgICBjb25zdCB0b2dnbGVfbWVudT0gJChcIi50b2dnbGVfbWVudVwiKTtcbiAgICBjb25zdCBoZWFkZXJfbWVudT0gJChcIi5oZWFkZXJfbWVudVwiKTtcblxuICAgIHRvZ2dsZV9tZW51LmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgIGhlYWRlcl9tZW51LnRvZ2dsZUNsYXNzKFwic2hvd1wiKTtcbiAgICB9KTtcbiAgfSxcbiAgc2VhcmNoVG9nZ2xlOiBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBmaW5kX2lucHV0X2l0ZW0gPSAkKFwiLmZpbmRfaW5wdXRfaXRlbVwiKTtcbiAgICBjb25zdCBmaW5kX2lucHV0ID0gJChcIi5maW5kX2lucHV0XCIpO1xuXG4gICAgZmluZF9pbnB1dF9pdGVtLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgIGZpbmRfaW5wdXQudG9nZ2xlQ2xhc3MoXCJmaW5kX2lucHV0X19hY3RpdmVcIik7XG4gICAgfSk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhFQURFUjtcbiIsImNvbnN0IE1PREFMID0ge1xuICBtb2RhbFRvZ2dsZTogZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgYnV0dG9uX21vZGFsPSAkKFwiLmJ1dHRvbi1tb2RhbFwiKTtcbiAgICBjb25zdCBsYXlvdXRfbW9kYWw9ICQoXCIubGF5b3V0X21vZGFsXCIpO1xuICAgIGNvbnN0IGNsb3NlPSAkKFwiLm1vZGFsLWNsb3NlXCIpO1xuXG4gICAgYnV0dG9uX21vZGFsLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgIGxheW91dF9tb2RhbC5zaG93KCk7XG4gICAgfSk7XG5cbiAgICBjbG9zZS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICBsYXlvdXRfbW9kYWwuaGlkZSgpO1xuICAgIH0pO1xuXG4gICAgJChkb2N1bWVudCkubW91c2V1cChmdW5jdGlvbiAoZSkge1xuICAgICAgaWYgKGxheW91dF9tb2RhbC5oYXMoZS50YXJnZXQpLmxlbmd0aCA9PT0gMCl7XG4gICAgICAgIGxheW91dF9tb2RhbC5oaWRlKCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAkKFwiLm1vZGFsLWlucHV0X3Bob25lXCIpLm1hc2soJys3KDAwMCkgMDAwIC0gMDAgLSAwMCcpO1xuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgTU9EQUw7XG4iLCJjb25zdCBORVdTID0ge1xuICBuZXdzU2xpZGVyOiBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBzZXR0aW5ncyA9IHtcbiAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgc2xpZGVzVG9TaG93OiAzLFxuICAgICAgc2xpZGVzVG9TY3JvbGw6IDMsXG4gICAgICBuZXh0QXJyb3c6IGBcbiAgICAgICAgPHAgY2xhc3M9XCJuZXdzLXNsaWRlci1hcnJvdyBuZXdzLXNsaWRlci1hcnJvdy1yaWdodFwiPjxpIGNsYXNzPVwiaWNvbiBpY29uLWFycm93XCI+PC9pPjxzcGFuPtC/0YDQtdC0PC9zcGFuPjwvcD5cbiAgICAgIGAsXG4gICAgICBwcmV2QXJyb3c6IGBcbiAgICAgICAgIDxwIGNsYXNzPVwibmV3cy1zbGlkZXItYXJyb3cgbmV3cy1zbGlkZXItYXJyb3ctbGVmdFwiPjxzcGFuPtGB0LvQtdC0PC9zcGFuPjxpIGNsYXNzPVwiaWNvbiBpY29uLWFycm93XCI+PC9pPjwvcD5cbiAgICAgIGAsXG4gICAgICByZXNwb25zaXZlOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBicmVha3BvaW50OiAxMDI0LFxuICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxuICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDIsXG4gICAgICAgICAgICBuZXh0QXJyb3c6IGZhbHNlLFxuICAgICAgICAgICAgcHJldkFycm93OiBmYWxzZSxcbiAgICAgICAgICB9XG4gICAgICAgIH0se1xuICAgICAgICAgIGJyZWFrcG9pbnQ6IDcyMCxcbiAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICAgICAgbmV4dEFycm93OiBmYWxzZSxcbiAgICAgICAgICAgIHByZXZBcnJvdzogZmFsc2UsXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfTtcblxuICAgIC8vIGluaXRpYWxpemUgdGhlIHNsaWRlclxuICAgICQoJy5uZXdzLXNsaWRlcicpLnNsaWNrKHNldHRpbmdzKTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgTkVXUztcbiJdfQ==
