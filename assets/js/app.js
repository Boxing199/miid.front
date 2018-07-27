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
    $(".fancybox").fancybox({
      helpers: {
        thumbs: {
          width: 80,
          height: 80
        }
      }
    });

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
    var $findInputItem = $(".find_input_item");
    var $findInput = $(".find_input");
    var $form = $(".find_input_item form");
    var $body = $("body");

    var activate = function activate(event) {
      event.preventDefault();
      $findInput.addClass("find_input__active");
      $body.on('click', deactivate);

      return false;
    };

    var deactivate = function deactivate() {
      $findInput.removeClass("find_input__active");
      $findInput.val('');
      $body.off('click', deactivate);
    };

    $findInputItem.click(activate);

    $findInput.keypress(function (e) {
      if (e.which === 13) {
        $form.submit();
      }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvYXBwLmpzIiwic3JjL2pzL21vZHVsZXMvYWJvdXRfdXMuanMiLCJzcmMvanMvbW9kdWxlcy9kb3RzLmpzIiwic3JjL2pzL21vZHVsZXMvaGVhZGVyLmpzIiwic3JjL2pzL21vZHVsZXMvbW9kYWwuanMiLCJzcmMvanMvbW9kdWxlcy9uZXdzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNLQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxDQUFFLFVBQUMsQ0FBRCxFQUFPO0FBQ1A7O0FBRUE7O0FBQ0EsSUFBRSxZQUFNO0FBQ04sbUJBQUcsVUFBSDtBQUNBLHVCQUFNLGFBQU47QUFDQSxtQkFBSyxVQUFMO0FBQ0EscUJBQU8sVUFBUDtBQUNBLHFCQUFPLFlBQVA7QUFDQSxvQkFBTSxXQUFOOztBQUVBLE1BQUUsVUFBRixFQUFjLE9BQWQ7QUFDQSxNQUFFLFdBQUYsRUFBZSxRQUFmLENBQXdCO0FBQ3RCLGVBQVU7QUFDUixnQkFBUztBQUNQLGlCQUFRLEVBREQ7QUFFUCxrQkFBUTtBQUZEO0FBREQ7QUFEWSxLQUF4Qjs7QUFTQSxNQUFFLElBQUYsQ0FBTyxFQUFFLFdBQUYsQ0FBUCxFQUF1QixVQUFDLEtBQUQsRUFBUSxNQUFSLEVBQW1CO0FBQ3hDLFVBQU0sVUFBVSxFQUFFLE1BQUYsRUFBVSxJQUFWLENBQWUsdUJBQWYsQ0FBaEI7QUFDQSxVQUFNLGFBQWEsUUFBUSxFQUFSLENBQVcsQ0FBWCxDQUFuQjtBQUNBLFVBQU0sYUFBYSxRQUFRLEVBQVIsQ0FBVyxDQUFYLENBQW5COztBQUVBLFFBQUUsTUFBRixFQUFVLE1BQVYsQ0FBaUI7QUFDZixlQUFPLElBRFE7QUFFZixhQUFLLENBRlU7QUFHZixhQUFLLEdBSFU7QUFJZixnQkFBUSxDQUFFLEVBQUYsRUFBTSxHQUFOLENBSk87O0FBTWYsZ0JBQVEsa0JBQVc7QUFDakIs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QUFLUixxQkFBVztBQUxIO0FBRlYsT0FWUTtBQVZHLEtBQWpCOztBQWlDQTtBQUNBLE1BQUUsY0FBRixFQUFrQixLQUFsQixDQUF3QixRQUF4QjtBQUNEO0FBckNVLENBQWI7O2tCQXdDZSxJIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiLy8gWW91IGNhbiB3cml0ZSBhIGNhbGwgYW5kIGltcG9ydCB5b3VyIGZ1bmN0aW9ucyBpbiB0aGlzIGZpbGUuXG4vL1xuLy8gVGhpcyBmaWxlIHdpbGwgYmUgY29tcGlsZWQgaW50byBhcHAuanMgYW5kIHdpbGwgbm90IGJlIG1pbmlmaWVkLlxuLy8gRmVlbCBmcmVlIHdpdGggdXNpbmcgRVM2IGhlcmUuXG5cbmltcG9ydCBERSBmcm9tICcuL21vZHVsZXMvZG90cyc7XG5pbXBvcnQgQUJPVVQgZnJvbSAnLi9tb2R1bGVzL2Fib3V0X3VzJztcbmltcG9ydCBORVdTIGZyb20gJy4vbW9kdWxlcy9uZXdzJztcbmltcG9ydCBIRUFERVIgZnJvbSAnLi9tb2R1bGVzL2hlYWRlcic7XG5pbXBvcnQgTU9EQUwgZnJvbSAnLi9tb2R1bGVzL21vZGFsJztcblxuKCAoJCkgPT4ge1xuICAndXNlIHN0cmljdCc7XG5cbiAgLy8gV2hlbiBET00gaXMgcmVhZHlcbiAgJCgoKSA9PiB7XG4gICAgREUuZG90c0VmZmVjdCgpO1xuICAgIEFCT1VULmFib3V0VXNTbGlkZXIoKTtcbiAgICBORVdTLm5ld3NTbGlkZXIoKTtcbiAgICBIRUFERVIubWVudVRvZ2dsZSgpO1xuICAgIEhFQURFUi5zZWFyY2hUb2dnbGUoKTtcbiAgICBNT0RBTC5tb2RhbFRvZ2dsZSgpO1xuXG4gICAgJChcIi5zZWxlY3QyXCIpLnNlbGVjdDIoKTtcbiAgICAkKFwiLmZhbmN5Ym94XCIpLmZhbmN5Ym94KHtcbiAgICAgIGhlbHBlcnNcdDoge1xuICAgICAgICB0aHVtYnNcdDoge1xuICAgICAgICAgIHdpZHRoXHQ6IDgwLFxuICAgICAgICAgIGhlaWdodDogODBcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgJC5lYWNoKCQoJy5qLXNsaWRlcicpLCAoaW5kZXgsIHNsaWRlcikgPT4ge1xuICAgICAgY29uc3QgaGFuZGxlcyA9ICQoc2xpZGVyKS5maW5kKCcuai1zbGlkZXItaGFuZGxlIHNwYW4nKTtcbiAgICAgIGNvbnN0IGxlZnRIYW5kbGUgPSBoYW5kbGVzLmVxKDApO1xuICAgICAgY29uc3QgcmlnaEhhbmRsZSA9IGhhbmRsZXMuZXEoMSk7XG5cbiAgICAgICQoc2xpZGVyKS5zbGlkZXIoe1xuICAgICAgICByYW5nZTogdHJ1ZSxcbiAgICAgICAgbWluOiAwLFxuICAgICAgICBtYXg6IDUwMCxcbiAgICAgICAgdmFsdWVzOiBbIDc1LCAzMDAgXSxcblxuICAgICAgICBjcmVhdGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGxlZnRIYW5kbGUudGV4dCggJCggdGhpcyApLnNsaWRlciggXCJ2YWx1ZXNcIiwgMCApICk7XG4gICAgICAgICAgcmlnaEhhbmRsZS50ZXh0KCAkKCB0aGlzICkuc2xpZGVyKCBcInZhbHVlc1wiLCAxICkgKTtcbiAgICAgICAgfSxcbiAgICAgICAgc2xpZGU6IGZ1bmN0aW9uKCBldmVudCwgdWkgKSB7XG4gICAgICAgICAgbGVmdEhhbmRsZS50ZXh0KCB1aS52YWx1ZXNbMF0gKTtcbiAgICAgICAgICByaWdoSGFuZGxlLnRleHQoIHVpLnZhbHVlc1sxXSApO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KVxuICB9KTtcblxufSkoalF1ZXJ5KTtcbiIsImNvbnN0IEFCT1VUID0ge1xuICBhYm91dFVzU2xpZGVyOiBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBzZXR0aW5ncyA9IHtcbiAgICAgIGFycm93czogZmFsc2UsXG4gICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgIGF1dG9wbGF5OiB0cnVlLFxuICAgICAgYXV0b3BsYXlTcGVlZDogMjAwMCxcbiAgICAgIGRvdHM6IHRydWUsXG4gICAgICBjdXN0b21QYWdpbmc6ICgpID0+ICc8ZGl2IGNsYXNzPVwiYWJvdXQtdXMtc2xpZGVyLWRvdHNcIj48L2Rpdj4nLFxuICAgICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICB7XG4gICAgICAgICAgYnJlYWtwb2ludDogMzIxLFxuICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICBhcnJvd3M6IHRydWUsXG4gICAgICAgICAgICBuZXh0QXJyb3c6IGBcbiAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJhYm91dC11cy1zbGlkZXItYXJyb3ctcmlnaHRcIlxuICAgICAgICAgICAgICAgICAgc3JjPVwiYXNzZXRzL2ltYWdlcy9tYWluL2Fycm93X3JpZ2h0LnBuZ1wiXG4gICAgICAgICAgICAgIC8+YCxcbiAgICAgICAgICAgIHByZXZBcnJvdzogYFxuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cImFib3V0LXVzLXNsaWRlci1hcnJvdy1sZWZ0XCJcbiAgICAgICAgICAgICAgICAgIHNyYz1cImFzc2V0cy9pbWFnZXMvbWFpbi9hcnJvd19sZWZ0LnBuZ1wiXG4gICAgICAgICAgICAgIC8+YCxcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9O1xuXG4gICAgLy8gaW5pdGlhbGl6ZSB0aGUgc2xpZGVyXG4gICAgJCgnLmFib3V0LXVzLXNsaWRlcicpLnNsaWNrKHNldHRpbmdzKTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgQUJPVVQ7XG4iLCIvLyBUaGlzIGlzIGFuIGV4YW1wbGVzIG9mIHNpbXBsZSBleHBvcnQuXG4vL1xuLy8gWW91IGNhbiByZW1vdmUgb3IgYWRkIHlvdXIgb3duIGZ1bmN0aW9uIGluIHRoaXMgZmlsZS5cblxudmFyIERFID0ge1xuICBkb3RzRWZmZWN0OiBmdW5jdGlvbigpIHtcbiAgICB2YXIgJGNudCAgPSAkKCcjaG9tZS1jYW52YXMnKSxcbiAgICAgICAgY2VsbHMgPSBjcmVhdGVDZWxscygpO1xuXG4gICAgJGNudC5odG1sKGNlbGxzKTtcblxuICAgIGZ1bmN0aW9uIGNyZWF0ZUNlbGxzKCkge1xuICAgICAgdmFyIHdpZHRoICA9IDEwLFxuICAgICAgICAgIGhlaWdodCA9IDEwLFxuICAgICAgICAgIHNpemUgICA9IHdpZHRoICogaGVpZ2h0LFxuICAgICAgICAgIGh0bWwgICA9ICc8ZGl2IGNsYXNzPVwiZW50cnktY2VsbHNcIj4nO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNpemU7IGkrKykge1xuICAgICAgICBodG1sICs9ICc8ZGl2IGNsYXNzPVwiY2VsbCBjZWxsLScgKyBpICsgJ1wiPjwvZGl2Pic7XG4gICAgICB9XG5cbiAgICAgIGh0bWwgKz0gJzwvZGl2Pic7XG5cbiAgICAgIHJldHVybiBodG1sO1xuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgREU7IiwiY29uc3QgSEVBREVSID0ge1xuICBtZW51VG9nZ2xlOiBmdW5jdGlvbigpIHtcbiAgICBjb25zdCB0b2dnbGVfbWVudT0gJChcIi50b2dnbGVfbWVudVwiKTtcbiAgICBjb25zdCBoZWFkZXJfbWVudT0gJChcIi5oZWFkZXJfbWVudVwiKTtcblxuICAgIHRvZ2dsZV9tZW51LmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgIGhlYWRlcl9tZW51LnRvZ2dsZUNsYXNzKFwic2hvd1wiKTtcbiAgICB9KTtcbiAgfSxcbiAgc2VhcmNoVG9nZ2xlOiBmdW5jdGlvbigpIHtcbiAgICBjb25zdCAkZmluZElucHV0SXRlbSA9ICQoXCIuZmluZF9pbnB1dF9pdGVtXCIpO1xuICAgIGNvbnN0ICRmaW5kSW5wdXQgPSAkKFwiLmZpbmRfaW5wdXRcIik7XG4gICAgY29uc3QgJGZvcm0gPSAkKFwiLmZpbmRfaW5wdXRfaXRlbSBmb3JtXCIpO1xuICAgIGNvbnN0ICRib2R5ID0gJChcImJvZHlcIik7XG5cbiAgICBjb25zdCBhY3RpdmF0ZSA9IChldmVudCkgPT4ge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICRmaW5kSW5wdXQuYWRkQ2xhc3MoXCJmaW5kX2lucHV0X19hY3RpdmVcIik7XG4gICAgICAkYm9keS5vbignY2xpY2snLCBkZWFjdGl2YXRlKTtcblxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG5cbiAgICBjb25zdCBkZWFjdGl2YXRlID0gKCkgPT4ge1xuICAgICAgJGZpbmRJbnB1dC5yZW1vdmVDbGFzcyhcImZpbmRfaW5wdXRfX2FjdGl2ZVwiKTtcbiAgICAgICRmaW5kSW5wdXQudmFsKCcnKTtcbiAgICAgICRib2R5Lm9mZignY2xpY2snLCBkZWFjdGl2YXRlKTtcbiAgICB9O1xuXG4gICAgJGZpbmRJbnB1dEl0ZW0uY2xpY2soYWN0aXZhdGUpO1xuXG4gICAgJGZpbmRJbnB1dC5rZXlwcmVzcyhmdW5jdGlvbiAoZSkge1xuICAgICAgaWYgKGUud2hpY2ggPT09IDEzKSB7XG4gICAgICAgICRmb3JtLnN1Ym1pdCgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIRUFERVI7XG4iLCJjb25zdCBNT0RBTCA9IHtcbiAgbW9kYWxUb2dnbGU6IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGJ1dHRvbl9tb2RhbD0gJChcIi5idXR0b24tbW9kYWxcIik7XG4gICAgY29uc3QgbGF5b3V0X21vZGFsPSAkKFwiLmxheW91dF9tb2RhbFwiKTtcbiAgICBjb25zdCBjbG9zZT0gJChcIi5tb2RhbC1jbG9zZVwiKTtcblxuICAgIGJ1dHRvbl9tb2RhbC5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICBsYXlvdXRfbW9kYWwuc2hvdygpO1xuICAgIH0pO1xuXG4gICAgY2xvc2UuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgbGF5b3V0X21vZGFsLmhpZGUoKTtcbiAgICB9KTtcblxuICAgICQoZG9jdW1lbnQpLm1vdXNldXAoZnVuY3Rpb24gKGUpIHtcbiAgICAgIGlmIChsYXlvdXRfbW9kYWwuaGFzKGUudGFyZ2V0KS5sZW5ndGggPT09IDApe1xuICAgICAgICBsYXlvdXRfbW9kYWwuaGlkZSgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgJChcIi5tb2RhbC1pbnB1dF9waG9uZVwiKS5tYXNrKCcrNygwMDApIDAwMCAtIDAwIC0gMDAnKTtcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1PREFMO1xuIiwiY29uc3QgTkVXUyA9IHtcbiAgbmV3c1NsaWRlcjogZnVuY3Rpb24oKSB7XG4gICAgY29uc3Qgc2V0dGluZ3MgPSB7XG4gICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgIHNsaWRlc1RvU2hvdzogMyxcbiAgICAgIHNsaWRlc1RvU2Nyb2xsOiAzLFxuICAgICAgbmV4dEFycm93OiBgXG4gICAgICAgIDxwIGNsYXNzPVwibmV3cy1zbGlkZXItYXJyb3cgbmV3cy1zbGlkZXItYXJyb3ctcmlnaHRcIj48aSBjbGFzcz1cImljb24gaWNvbi1hcnJvd1wiPjwvaT48c3Bhbj7Qv9GA0LXQtDwvc3Bhbj48L3A+XG4gICAgICBgLFxuICAgICAgcHJldkFycm93OiBgXG4gICAgICAgICA8cCBjbGFzcz1cIm5ld3Mtc2xpZGVyLWFycm93IG5ld3Mtc2xpZGVyLWFycm93LWxlZnRcIj48c3Bhbj7RgdC70LXQtDwvc3Bhbj48aSBjbGFzcz1cImljb24gaWNvbi1hcnJvd1wiPjwvaT48L3A+XG4gICAgICBgLFxuICAgICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICB7XG4gICAgICAgICAgYnJlYWtwb2ludDogMTAyNCxcbiAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcbiAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAyLFxuICAgICAgICAgICAgbmV4dEFycm93OiBmYWxzZSxcbiAgICAgICAgICAgIHByZXZBcnJvdzogZmFsc2UsXG4gICAgICAgICAgfVxuICAgICAgICB9LHtcbiAgICAgICAgICBicmVha3BvaW50OiA3MjAsXG4gICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgICAgIG5leHRBcnJvdzogZmFsc2UsXG4gICAgICAgICAgICBwcmV2QXJyb3c6IGZhbHNlLFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH07XG5cbiAgICAvLyBpbml0aWFsaXplIHRoZSBzbGlkZXJcbiAgICAkKCcubmV3cy1zbGlkZXInKS5zbGljayhzZXR0aW5ncyk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5FV1M7XG4iXX0=
