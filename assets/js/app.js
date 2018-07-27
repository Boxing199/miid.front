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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvYXBwLmpzIiwic3JjL2pzL21vZHVsZXMvYWJvdXRfdXMuanMiLCJzcmMvanMvbW9kdWxlcy9kb3RzLmpzIiwic3JjL2pzL21vZHVsZXMvaGVhZGVyLmpzIiwic3JjL2pzL21vZHVsZXMvbW9kYWwuanMiLCJzcmMvanMvbW9kdWxlcy9uZXdzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNLQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxDQUFFLFVBQUMsQ0FBRCxFQUFPO0FBQ1A7O0FBRUE7O0FBQ0EsSUFBRSxZQUFNO0FBQ04sbUJBQUcsVUFBSDtBQUNBLHVCQUFNLGFBQU47QUFDQSxtQkFBSyxVQUFMO0FBQ0EscUJBQU8sVUFBUDtBQUNBLHFCQUFPLFlBQVA7QUFDQSxvQkFBTSxXQUFOOztBQUVBLE1BQUUsVUFBRixFQUFjLE9BQWQ7QUFDQSxNQUFFLFdBQUYsRUFBZSxRQUFmLENBQXdCO0FBQ3RCLGVBQVU7QUFDUixnQkFBUztBQUNQLGlCQUFRLEVBREQ7QUFFUCxrQkFBUTtBQUZEO0FBREQ7QUFEWSxLQUF4Qjs7QUFTQSxNQUFFLElBQUYsQ0FBTyxFQUFFLFdBQUYsQ0FBUCxFQUF1QixVQUFDLEtBQUQsRUFBUSxNQUFSLEVBQW1CO0FBQ3hDLFVBQU0sVUFBVSxFQUFFLE1BQUYsRUFBVSxJQUFWLENBQWUsdUJBQWYsQ0FBaEI7QUFDQSxVQUFNLGFBQWEsUUFBUSxFQUFSLENBQVcsQ0FBWCxDQUFuQjtBQUNBLFVBQU0sYUFBYSxRQUFRLEVBQVIsQ0FBVyxDQUFYLENBQW5COztBQUVBLFFBQUUsTUFBRixFQUFVLE1BQVYsQ0FBaUI7QUFDZixlQUFPLElBRFE7QUFFZixhQUFLLENBRlU7QUFHZixhQUFLLEdBSFU7QUFJZixnQkFBUSxDQUFFLEVBQUYsRUFBTSxHQUFOLENBSk87O0FBTWYsZ0JBQVEsa0JBQVc7QUFDakIs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QW5CLEVBQTJCLE1BQTNCLEtBQXNDLENBQTFDLEVBQTRDO0FBQzFDLHFCQUFhLElBQWI7QUFDRDtBQUNGLEtBSkQ7O0FBTUEsTUFBRSxvQkFBRixFQUF3QixJQUF4QixDQUE2Qix1QkFBN0I7QUFDRDtBQXJCVyxDQUFkOztrQkF3QmUsSzs7Ozs7Ozs7QUN4QmYsSUFBTSxPQUFPO0FBQ1gsY0FBWSxzQkFBVztBQUNyQixRQUFNLFdBQVc7QUFDZixnQkFBVSxJQURLO0FBRWYsb0JBQWMsQ0FGQztBQUdmLHNCQUFnQixDQUhEO0FBSWYsa0tBSmU7QUFPZixrS0FQZTtBQVVmLGtCQUFZLENBQ1Y7QUFDRSxvQkFBWSxJQURkO0FBRUUsa0JBQVU7QUFDUixrQkFBUSxLQURBO0FBRVIsd0JBQWMsQ0FGTjtBQUdSLDBCQUFnQixDQUhSO0FBSVIscUJBQVcsS0FKSDtBQUtSLHFCQUFXO0FBTEg7QUFGWixPQURVLEVBVVI7QUFDQSxvQkFBWSxHQURaO0FBRUEsa0JBQVU7QUFDUixrQkFBUSxLQURBO0FBRVIsd0JBQWMsQ0FGTjtBQUdSLDBCQUFnQixDQUhSO0FBSVIscUJBQVcsS0FKSDtBQUtSLHFCQUFXO0FBTEg7QUFGVixPQVZRO0FBVkcsS0FBakI7O0FBaUNBO0FBQ0EsTUFBRSxjQUFGLEVBQWtCLEtBQWxCLENBQXdCLFFBQXhCO0FBQ0Q7QUFyQ1UsQ0FBYjs7a0JBd0NlLEkiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIvLyBZb3UgY2FuIHdyaXRlIGEgY2FsbCBhbmQgaW1wb3J0IHlvdXIgZnVuY3Rpb25zIGluIHRoaXMgZmlsZS5cbi8vXG4vLyBUaGlzIGZpbGUgd2lsbCBiZSBjb21waWxlZCBpbnRvIGFwcC5qcyBhbmQgd2lsbCBub3QgYmUgbWluaWZpZWQuXG4vLyBGZWVsIGZyZWUgd2l0aCB1c2luZyBFUzYgaGVyZS5cblxuaW1wb3J0IERFIGZyb20gJy4vbW9kdWxlcy9kb3RzJztcbmltcG9ydCBBQk9VVCBmcm9tICcuL21vZHVsZXMvYWJvdXRfdXMnO1xuaW1wb3J0IE5FV1MgZnJvbSAnLi9tb2R1bGVzL25ld3MnO1xuaW1wb3J0IEhFQURFUiBmcm9tICcuL21vZHVsZXMvaGVhZGVyJztcbmltcG9ydCBNT0RBTCBmcm9tICcuL21vZHVsZXMvbW9kYWwnO1xuXG4oICgkKSA9PiB7XG4gICd1c2Ugc3RyaWN0JztcblxuICAvLyBXaGVuIERPTSBpcyByZWFkeVxuICAkKCgpID0+IHtcbiAgICBERS5kb3RzRWZmZWN0KCk7XG4gICAgQUJPVVQuYWJvdXRVc1NsaWRlcigpO1xuICAgIE5FV1MubmV3c1NsaWRlcigpO1xuICAgIEhFQURFUi5tZW51VG9nZ2xlKCk7XG4gICAgSEVBREVSLnNlYXJjaFRvZ2dsZSgpO1xuICAgIE1PREFMLm1vZGFsVG9nZ2xlKCk7XG5cbiAgICAkKFwiLnNlbGVjdDJcIikuc2VsZWN0MigpO1xuICAgICQoXCIuZmFuY3lib3hcIikuZmFuY3lib3goe1xuICAgICAgaGVscGVyc1x0OiB7XG4gICAgICAgIHRodW1ic1x0OiB7XG4gICAgICAgICAgd2lkdGhcdDogODAsXG4gICAgICAgICAgaGVpZ2h0OiA4MFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAkLmVhY2goJCgnLmotc2xpZGVyJyksIChpbmRleCwgc2xpZGVyKSA9PiB7XG4gICAgICBjb25zdCBoYW5kbGVzID0gJChzbGlkZXIpLmZpbmQoJy5qLXNsaWRlci1oYW5kbGUgc3BhbicpO1xuICAgICAgY29uc3QgbGVmdEhhbmRsZSA9IGhhbmRsZXMuZXEoMCk7XG4gICAgICBjb25zdCByaWdoSGFuZGxlID0gaGFuZGxlcy5lcSgxKTtcblxuICAgICAgJChzbGlkZXIpLnNsaWRlcih7XG4gICAgICAgIHJhbmdlOiB0cnVlLFxuICAgICAgICBtaW46IDAsXG4gICAgICAgIG1heDogNTAwLFxuICAgICAgICB2YWx1ZXM6IFsgNzUsIDMwMCBdLFxuXG4gICAgICAgIGNyZWF0ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgbGVmdEhhbmRsZS50ZXh0KCAkKCB0aGlzICkuc2xpZGVyKCBcInZhbHVlc1wiLCAwICkgKTtcbiAgICAgICAgICByaWdoSGFuZGxlLnRleHQoICQoIHRoaXMgKS5zbGlkZXIoIFwidmFsdWVzXCIsIDEgKSApO1xuICAgICAgICB9LFxuICAgICAgICBzbGlkZTogZnVuY3Rpb24oIGV2ZW50LCB1aSApIHtcbiAgICAgICAgICBsZWZ0SGFuZGxlLnRleHQoIHVpLnZhbHVlc1swXSApO1xuICAgICAgICAgIHJpZ2hIYW5kbGUudGV4dCggdWkudmFsdWVzWzFdICk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pXG4gIH0pO1xuXG59KShqUXVlcnkpO1xuIiwiY29uc3QgQUJPVVQgPSB7XG4gIGFib3V0VXNTbGlkZXI6IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IHNldHRpbmdzID0ge1xuICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgYXV0b3BsYXk6IHRydWUsXG4gICAgICBhdXRvcGxheVNwZWVkOiAyMDAwLFxuICAgICAgZG90czogdHJ1ZSxcbiAgICAgIGN1c3RvbVBhZ2luZzogKCkgPT4gJzxkaXYgY2xhc3M9XCJhYm91dC11cy1zbGlkZXItZG90c1wiPjwvZGl2PicsXG4gICAgICByZXNwb25zaXZlOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBicmVha3BvaW50OiAzMjEsXG4gICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgIGFycm93czogdHJ1ZSxcbiAgICAgICAgICAgIG5leHRBcnJvdzogYFxuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cImFib3V0LXVzLXNsaWRlci1hcnJvdy1yaWdodFwiXG4gICAgICAgICAgICAgICAgICBzcmM9XCJhc3NldHMvaW1hZ2VzL21haW4vYXJyb3dfcmlnaHQucG5nXCJcbiAgICAgICAgICAgICAgLz5gLFxuICAgICAgICAgICAgcHJldkFycm93OiBgXG4gICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYWJvdXQtdXMtc2xpZGVyLWFycm93LWxlZnRcIlxuICAgICAgICAgICAgICAgICAgc3JjPVwiYXNzZXRzL2ltYWdlcy9tYWluL2Fycm93X2xlZnQucG5nXCJcbiAgICAgICAgICAgICAgLz5gLFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH07XG5cbiAgICAvLyBpbml0aWFsaXplIHRoZSBzbGlkZXJcbiAgICAkKCcuYWJvdXQtdXMtc2xpZGVyJykuc2xpY2soc2V0dGluZ3MpO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBQk9VVDtcbiIsIi8vIFRoaXMgaXMgYW4gZXhhbXBsZXMgb2Ygc2ltcGxlIGV4cG9ydC5cbi8vXG4vLyBZb3UgY2FuIHJlbW92ZSBvciBhZGQgeW91ciBvd24gZnVuY3Rpb24gaW4gdGhpcyBmaWxlLlxuXG52YXIgREUgPSB7XG4gIGRvdHNFZmZlY3Q6IGZ1bmN0aW9uKCkge1xuICAgIHZhciAkY250ICA9ICQoJyNob21lLWNhbnZhcycpLFxuICAgICAgICBjZWxscyA9IGNyZWF0ZUNlbGxzKCk7XG5cbiAgICAkY250Lmh0bWwoY2VsbHMpO1xuXG4gICAgZnVuY3Rpb24gY3JlYXRlQ2VsbHMoKSB7XG4gICAgICB2YXIgd2lkdGggID0gMTAsXG4gICAgICAgICAgaGVpZ2h0ID0gMTAsXG4gICAgICAgICAgc2l6ZSAgID0gd2lkdGggKiBoZWlnaHQsXG4gICAgICAgICAgaHRtbCAgID0gJzxkaXYgY2xhc3M9XCJlbnRyeS1jZWxsc1wiPic7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2l6ZTsgaSsrKSB7XG4gICAgICAgIGh0bWwgKz0gJzxkaXYgY2xhc3M9XCJjZWxsIGNlbGwtJyArIGkgKyAnXCI+PC9kaXY+JztcbiAgICAgIH1cblxuICAgICAgaHRtbCArPSAnPC9kaXY+JztcblxuICAgICAgcmV0dXJuIGh0bWw7XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBERTsiLCJjb25zdCBIRUFERVIgPSB7XG4gIG1lbnVUb2dnbGU6IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IHRvZ2dsZV9tZW51PSAkKFwiLnRvZ2dsZV9tZW51XCIpO1xuICAgIGNvbnN0IGhlYWRlcl9tZW51PSAkKFwiLmhlYWRlcl9tZW51XCIpO1xuXG4gICAgdG9nZ2xlX21lbnUuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgaGVhZGVyX21lbnUudG9nZ2xlQ2xhc3MoXCJzaG93XCIpO1xuICAgIH0pO1xuICB9LFxuICBzZWFyY2hUb2dnbGU6IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGZpbmRfaW5wdXRfaXRlbSA9ICQoXCIuZmluZF9pbnB1dF9pdGVtXCIpO1xuICAgIGNvbnN0IGZpbmRfaW5wdXQgPSAkKFwiLmZpbmRfaW5wdXRcIik7XG5cbiAgICBmaW5kX2lucHV0X2l0ZW0uY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgZmluZF9pbnB1dC50b2dnbGVDbGFzcyhcImZpbmRfaW5wdXRfX2FjdGl2ZVwiKTtcbiAgICB9KTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgSEVBREVSO1xuIiwiY29uc3QgTU9EQUwgPSB7XG4gIG1vZGFsVG9nZ2xlOiBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBidXR0b25fbW9kYWw9ICQoXCIuYnV0dG9uLW1vZGFsXCIpO1xuICAgIGNvbnN0IGxheW91dF9tb2RhbD0gJChcIi5sYXlvdXRfbW9kYWxcIik7XG4gICAgY29uc3QgY2xvc2U9ICQoXCIubW9kYWwtY2xvc2VcIik7XG5cbiAgICBidXR0b25fbW9kYWwuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgbGF5b3V0X21vZGFsLnNob3coKTtcbiAgICB9KTtcblxuICAgIGNsb3NlLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgIGxheW91dF9tb2RhbC5oaWRlKCk7XG4gICAgfSk7XG5cbiAgICAkKGRvY3VtZW50KS5tb3VzZXVwKGZ1bmN0aW9uIChlKSB7XG4gICAgICBpZiAobGF5b3V0X21vZGFsLmhhcyhlLnRhcmdldCkubGVuZ3RoID09PSAwKXtcbiAgICAgICAgbGF5b3V0X21vZGFsLmhpZGUoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgICQoXCIubW9kYWwtaW5wdXRfcGhvbmVcIikubWFzaygnKzcoMDAwKSAwMDAgLSAwMCAtIDAwJyk7XG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBNT0RBTDtcbiIsImNvbnN0IE5FV1MgPSB7XG4gIG5ld3NTbGlkZXI6IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IHNldHRpbmdzID0ge1xuICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICBzbGlkZXNUb1Nob3c6IDMsXG4gICAgICBzbGlkZXNUb1Njcm9sbDogMyxcbiAgICAgIG5leHRBcnJvdzogYFxuICAgICAgICA8cCBjbGFzcz1cIm5ld3Mtc2xpZGVyLWFycm93IG5ld3Mtc2xpZGVyLWFycm93LXJpZ2h0XCI+PGkgY2xhc3M9XCJpY29uIGljb24tYXJyb3dcIj48L2k+PHNwYW4+0L/RgNC10LQ8L3NwYW4+PC9wPlxuICAgICAgYCxcbiAgICAgIHByZXZBcnJvdzogYFxuICAgICAgICAgPHAgY2xhc3M9XCJuZXdzLXNsaWRlci1hcnJvdyBuZXdzLXNsaWRlci1hcnJvdy1sZWZ0XCI+PHNwYW4+0YHQu9C10LQ8L3NwYW4+PGkgY2xhc3M9XCJpY29uIGljb24tYXJyb3dcIj48L2k+PC9wPlxuICAgICAgYCxcbiAgICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgICAge1xuICAgICAgICAgIGJyZWFrcG9pbnQ6IDEwMjQsXG4gICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXG4gICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMixcbiAgICAgICAgICAgIG5leHRBcnJvdzogZmFsc2UsXG4gICAgICAgICAgICBwcmV2QXJyb3c6IGZhbHNlLFxuICAgICAgICAgIH1cbiAgICAgICAgfSx7XG4gICAgICAgICAgYnJlYWtwb2ludDogNzIwLFxuICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxuICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgICAgICBuZXh0QXJyb3c6IGZhbHNlLFxuICAgICAgICAgICAgcHJldkFycm93OiBmYWxzZSxcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9O1xuXG4gICAgLy8gaW5pdGlhbGl6ZSB0aGUgc2xpZGVyXG4gICAgJCgnLm5ld3Mtc2xpZGVyJykuc2xpY2soc2V0dGluZ3MpO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBORVdTO1xuIl19
