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

var _call = require('./modules/call');

var _call2 = _interopRequireDefault(_call);

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
    _modal2.default.modalToggle();
    _call2.default.collButton();

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
      var $slider = $(slider);
      var handles = $slider.find('.j-slider-handle span');
      var leftHandle = handles.eq(0);
      var righHandle = handles.eq(1);

      $slider.slider({
        range: true,
        min: 0,
        max: 500,
        values: [75, 300],

        create: function create() {
          var $this = $(this);
          leftHandle.text($this.slider("values", 0));
          righHandle.text($this.slider("values", 1));
        },
        slide: function slide(event, ui) {
          leftHandle.text(ui.values[0]);
          righHandle.text(ui.values[1]);
        }
      });
    });
  });
})(jQuery);

},{"./modules/about_us":2,"./modules/call":3,"./modules/dots":4,"./modules/header":5,"./modules/modal":6,"./modules/news":7}],2:[function(require,module,exports){
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
var CALL = {
  collButton: function collButton() {
    var maxHeight = 500;
    var $callButton = $('.js-call-widget');

    $(document).scroll(function () {
      if (window.scrollY > maxHeight) {
        $callButton.fadeIn();
      } else {
        $callButton.fadeOut();
      }
    });
  }
};

exports.default = CALL;

},{}],4:[function(require,module,exports){
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

},{}],5:[function(require,module,exports){
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

},{}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var MODAL = {
  modalToggle: function modalToggle() {
    var button_modal = $(".js-button-modal");
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

},{}],7:[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvYXBwLmpzIiwic3JjL2pzL21vZHVsZXMvYWJvdXRfdXMuanMiLCJzcmMvanMvbW9kdWxlcy9jYWxsLmpzIiwic3JjL2pzL21vZHVsZXMvZG90cy5qcyIsInNyYy9qcy9tb2R1bGVzL2hlYWRlci5qcyIsInNyYy9qcy9tb2R1bGVzL21vZGFsLmpzIiwic3JjL2pzL21vZHVsZXMvbmV3cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDS0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFWQTtBQUNBO0FBQ0E7QUFDQTs7QUFTQSxDQUFFLFVBQUMsQ0FBRCxFQUFPO0FBQ1A7O0FBRUE7O0FBQ0EsSUFBRSxZQUFNO0FBQ04sbUJBQUcsVUFBSDtBQUNBLHVCQUFNLGFBQU47QUFDQSxtQkFBSyxVQUFMO0FBQ0EscUJBQU8sVUFBUDtBQUNBLHFCQUFPLFlBQVA7QUFDQSxvQkFBTSxXQUFOO0FBQ0EsbUJBQUssVUFBTDs7QUFFQSxNQUFFLFVBQUYsRUFBYyxPQUFkO0FBQ0EsTUFBRSxXQUFGLEVBQWUsUUFBZixDQUF3QjtBQUN0QixlQUFVO0FBQ1IsZ0JBQVM7QUFDUCxpQkFBUSxFQUREO0FBRVAsa0JBQVE7QUFGRDtBQUREO0FBRFksS0FBeEI7O0FBU0EsTUFBRSxJQUFGLENBQU8sRUFBRSxXQUFGLENBQVAsRUFBdUIsVUFBQyxLQUFELEVBQVEsTUFBUixFQUFtQjtBQUN4QyxVQUFNLFVBQVUsRUFBRSxNQUFGLENBQWhCO0FBQ0EsVUFBTSxVQUFVLFFBQVEsSUFBUixDQUFhLHVCQUFiLENBQWhCO0FBQ0EsVUFBTSxhQUFhLFFBQVEsRUFBUixDQUFXLENBQVgsQ0FBbkI7QUFDQSxVQUFNLGFBQWEsUUFBUSxFQUFSLENBQVcsQ0FBWCxDQUFuQjs7QUFFQSxjQUFRLE1BQVIsQ0FBZTtBQUNiLGVBQU8sSUFETTtBQUViLGFBQUss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VztBQUNyQixRQUFNLFdBQVc7QUFDZixnQkFBVSxJQURLO0FBRWYsb0JBQWMsQ0FGQztBQUdmLHNCQUFnQixDQUhEO0FBSWYsa0tBSmU7QUFPZixrS0FQZTtBQVVmLGtCQUFZLENBQ1Y7QUFDRSxvQkFBWSxJQURkO0FBRUUsa0JBQVU7QUFDUixrQkFBUSxLQURBO0FBRVIsd0JBQWMsQ0FGTjtBQUdSLDBCQUFnQixDQUhSO0FBSVIscUJBQVcsS0FKSDtBQUtSLHFCQUFXO0FBTEg7QUFGWixPQURVLEVBVVI7QUFDQSxvQkFBWSxHQURaO0FBRUEsa0JBQVU7QUFDUixrQkFBUSxLQURBO0FBRVIsd0JBQWMsQ0FGTjtBQUdSLDBCQUFnQixDQUhSO0FBSVIscUJBQVcsS0FKSDtBQUtSLHFCQUFXO0FBTEg7QUFGVixPQVZRO0FBVkcsS0FBakI7O0FBaUNBO0FBQ0EsTUFBRSxjQUFGLEVBQWtCLEtBQWxCLENBQXdCLFFBQXhCO0FBQ0Q7QUFyQ1UsQ0FBYjs7a0JBd0NlLEkiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIvLyBZb3UgY2FuIHdyaXRlIGEgY2FsbCBhbmQgaW1wb3J0IHlvdXIgZnVuY3Rpb25zIGluIHRoaXMgZmlsZS5cbi8vXG4vLyBUaGlzIGZpbGUgd2lsbCBiZSBjb21waWxlZCBpbnRvIGFwcC5qcyBhbmQgd2lsbCBub3QgYmUgbWluaWZpZWQuXG4vLyBGZWVsIGZyZWUgd2l0aCB1c2luZyBFUzYgaGVyZS5cblxuaW1wb3J0IERFIGZyb20gJy4vbW9kdWxlcy9kb3RzJztcbmltcG9ydCBBQk9VVCBmcm9tICcuL21vZHVsZXMvYWJvdXRfdXMnO1xuaW1wb3J0IE5FV1MgZnJvbSAnLi9tb2R1bGVzL25ld3MnO1xuaW1wb3J0IEhFQURFUiBmcm9tICcuL21vZHVsZXMvaGVhZGVyJztcbmltcG9ydCBNT0RBTCBmcm9tICcuL21vZHVsZXMvbW9kYWwnO1xuaW1wb3J0IENBTEwgZnJvbSAnLi9tb2R1bGVzL2NhbGwnO1xuXG4oICgkKSA9PiB7XG4gICd1c2Ugc3RyaWN0JztcblxuICAvLyBXaGVuIERPTSBpcyByZWFkeVxuICAkKCgpID0+IHtcbiAgICBERS5kb3RzRWZmZWN0KCk7XG4gICAgQUJPVVQuYWJvdXRVc1NsaWRlcigpO1xuICAgIE5FV1MubmV3c1NsaWRlcigpO1xuICAgIEhFQURFUi5tZW51VG9nZ2xlKCk7XG4gICAgSEVBREVSLnNlYXJjaFRvZ2dsZSgpO1xuICAgIE1PREFMLm1vZGFsVG9nZ2xlKCk7XG4gICAgQ0FMTC5jb2xsQnV0dG9uKCk7XG5cbiAgICAkKFwiLnNlbGVjdDJcIikuc2VsZWN0MigpO1xuICAgICQoXCIuZmFuY3lib3hcIikuZmFuY3lib3goe1xuICAgICAgaGVscGVyc1x0OiB7XG4gICAgICAgIHRodW1ic1x0OiB7XG4gICAgICAgICAgd2lkdGhcdDogODAsXG4gICAgICAgICAgaGVpZ2h0OiA4MFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAkLmVhY2goJCgnLmotc2xpZGVyJyksIChpbmRleCwgc2xpZGVyKSA9PiB7XG4gICAgICBjb25zdCAkc2xpZGVyID0gJChzbGlkZXIpO1xuICAgICAgY29uc3QgaGFuZGxlcyA9ICRzbGlkZXIuZmluZCgnLmotc2xpZGVyLWhhbmRsZSBzcGFuJyk7XG4gICAgICBjb25zdCBsZWZ0SGFuZGxlID0gaGFuZGxlcy5lcSgwKTtcbiAgICAgIGNvbnN0IHJpZ2hIYW5kbGUgPSBoYW5kbGVzLmVxKDEpO1xuXG4gICAgICAkc2xpZGVyLnNsaWRlcih7XG4gICAgICAgIHJhbmdlOiB0cnVlLFxuICAgICAgICBtaW46IDAsXG4gICAgICAgIG1heDogNTAwLFxuICAgICAgICB2YWx1ZXM6IFsgNzUsIDMwMCBdLFxuXG4gICAgICAgIGNyZWF0ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgbGV0ICR0aGlzID0gJCggdGhpcyApO1xuICAgICAgICAgIGxlZnRIYW5kbGUudGV4dCggJHRoaXMuc2xpZGVyKCBcInZhbHVlc1wiLCAwICkgKTtcbiAgICAgICAgICByaWdoSGFuZGxlLnRleHQoICR0aGlzLnNsaWRlciggXCJ2YWx1ZXNcIiwgMSApICk7XG4gICAgICAgIH0sXG4gICAgICAgIHNsaWRlOiBmdW5jdGlvbiggZXZlbnQsIHVpICkge1xuICAgICAgICAgIGxlZnRIYW5kbGUudGV4dCggdWkudmFsdWVzWzBdICk7XG4gICAgICAgICAgcmlnaEhhbmRsZS50ZXh0KCB1aS52YWx1ZXNbMV0gKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSlcbiAgfSk7XG5cbn0pKGpRdWVyeSk7XG4iLCJjb25zdCBBQk9VVCA9IHtcbiAgYWJvdXRVc1NsaWRlcjogZnVuY3Rpb24oKSB7XG4gICAgY29uc3Qgc2V0dGluZ3MgPSB7XG4gICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICBhdXRvcGxheTogdHJ1ZSxcbiAgICAgIGF1dG9wbGF5U3BlZWQ6IDIwMDAsXG4gICAgICBkb3RzOiB0cnVlLFxuICAgICAgY3VzdG9tUGFnaW5nOiAoKSA9PiAnPGRpdiBjbGFzcz1cImFib3V0LXVzLXNsaWRlci1kb3RzXCI+PC9kaXY+JyxcbiAgICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgICAge1xuICAgICAgICAgIGJyZWFrcG9pbnQ6IDMyMSxcbiAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgYXJyb3dzOiB0cnVlLFxuICAgICAgICAgICAgbmV4dEFycm93OiBgXG4gICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYWJvdXQtdXMtc2xpZGVyLWFycm93LXJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgIHNyYz1cImFzc2V0cy9pbWFnZXMvbWFpbi9hcnJvd19yaWdodC5wbmdcIlxuICAgICAgICAgICAgICAvPmAsXG4gICAgICAgICAgICBwcmV2QXJyb3c6IGBcbiAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJhYm91dC11cy1zbGlkZXItYXJyb3ctbGVmdFwiXG4gICAgICAgICAgICAgICAgICBzcmM9XCJhc3NldHMvaW1hZ2VzL21haW4vYXJyb3dfbGVmdC5wbmdcIlxuICAgICAgICAgICAgICAvPmAsXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfTtcblxuICAgIC8vIGluaXRpYWxpemUgdGhlIHNsaWRlclxuICAgICQoJy5hYm91dC11cy1zbGlkZXInKS5zbGljayhzZXR0aW5ncyk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFCT1VUO1xuIiwiY29uc3QgQ0FMTCA9IHtcbiAgY29sbEJ1dHRvbjogKCkgPT4ge1xuICAgIGNvbnN0IG1heEhlaWdodCA9IDUwMDtcbiAgICBjb25zdCAkY2FsbEJ1dHRvbiA9ICQoJy5qcy1jYWxsLXdpZGdldCcpO1xuXG4gICAgJChkb2N1bWVudCkuc2Nyb2xsKCgpID0+IHtcbiAgICAgIGlmICh3aW5kb3cuc2Nyb2xsWSA+IG1heEhlaWdodCkge1xuICAgICAgICAkY2FsbEJ1dHRvbi5mYWRlSW4oKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICRjYWxsQnV0dG9uLmZhZGVPdXQoKTtcbiAgICAgIH1cbiAgICB9KVxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDQUxMO1xuIiwiLy8gVGhpcyBpcyBhbiBleGFtcGxlcyBvZiBzaW1wbGUgZXhwb3J0LlxuLy9cbi8vIFlvdSBjYW4gcmVtb3ZlIG9yIGFkZCB5b3VyIG93biBmdW5jdGlvbiBpbiB0aGlzIGZpbGUuXG5cbnZhciBERSA9IHtcbiAgZG90c0VmZmVjdDogZnVuY3Rpb24oKSB7XG4gICAgdmFyICRjbnQgID0gJCgnI2hvbWUtY2FudmFzJyksXG4gICAgICAgIGNlbGxzID0gY3JlYXRlQ2VsbHMoKTtcblxuICAgICRjbnQuaHRtbChjZWxscyk7XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVDZWxscygpIHtcbiAgICAgIHZhciB3aWR0aCAgPSAxMCxcbiAgICAgICAgICBoZWlnaHQgPSAxMCxcbiAgICAgICAgICBzaXplICAgPSB3aWR0aCAqIGhlaWdodCxcbiAgICAgICAgICBodG1sICAgPSAnPGRpdiBjbGFzcz1cImVudHJ5LWNlbGxzXCI+JztcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzaXplOyBpKyspIHtcbiAgICAgICAgaHRtbCArPSAnPGRpdiBjbGFzcz1cImNlbGwgY2VsbC0nICsgaSArICdcIj48L2Rpdj4nO1xuICAgICAgfVxuXG4gICAgICBodG1sICs9ICc8L2Rpdj4nO1xuXG4gICAgICByZXR1cm4gaHRtbDtcbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IERFOyIsImNvbnN0IEhFQURFUiA9IHtcbiAgbWVudVRvZ2dsZTogZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgdG9nZ2xlX21lbnU9ICQoXCIudG9nZ2xlX21lbnVcIik7XG4gICAgY29uc3QgaGVhZGVyX21lbnU9ICQoXCIuaGVhZGVyX21lbnVcIik7XG5cbiAgICB0b2dnbGVfbWVudS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICBoZWFkZXJfbWVudS50b2dnbGVDbGFzcyhcInNob3dcIik7XG4gICAgfSk7XG4gIH0sXG4gIHNlYXJjaFRvZ2dsZTogZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgJGZpbmRJbnB1dEl0ZW0gPSAkKFwiLmZpbmRfaW5wdXRfaXRlbVwiKTtcbiAgICBjb25zdCAkZmluZElucHV0ID0gJChcIi5maW5kX2lucHV0XCIpO1xuICAgIGNvbnN0ICRmb3JtID0gJChcIi5maW5kX2lucHV0X2l0ZW0gZm9ybVwiKTtcbiAgICBjb25zdCAkYm9keSA9ICQoXCJib2R5XCIpO1xuXG4gICAgY29uc3QgYWN0aXZhdGUgPSAoZXZlbnQpID0+IHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAkZmluZElucHV0LmFkZENsYXNzKFwiZmluZF9pbnB1dF9fYWN0aXZlXCIpO1xuICAgICAgJGJvZHkub24oJ2NsaWNrJywgZGVhY3RpdmF0ZSk7XG5cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuXG4gICAgY29uc3QgZGVhY3RpdmF0ZSA9ICgpID0+IHtcbiAgICAgICRmaW5kSW5wdXQucmVtb3ZlQ2xhc3MoXCJmaW5kX2lucHV0X19hY3RpdmVcIik7XG4gICAgICAkZmluZElucHV0LnZhbCgnJyk7XG4gICAgICAkYm9keS5vZmYoJ2NsaWNrJywgZGVhY3RpdmF0ZSk7XG4gICAgfTtcblxuICAgICRmaW5kSW5wdXRJdGVtLmNsaWNrKGFjdGl2YXRlKTtcblxuICAgICRmaW5kSW5wdXQua2V5cHJlc3MoZnVuY3Rpb24gKGUpIHtcbiAgICAgIGlmIChlLndoaWNoID09PSAxMykge1xuICAgICAgICAkZm9ybS5zdWJtaXQoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgSEVBREVSO1xuIiwiY29uc3QgTU9EQUwgPSB7XG4gIG1vZGFsVG9nZ2xlOiBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBidXR0b25fbW9kYWw9ICQoXCIuanMtYnV0dG9uLW1vZGFsXCIpO1xuICAgIGNvbnN0IGxheW91dF9tb2RhbD0gJChcIi5sYXlvdXRfbW9kYWxcIik7XG4gICAgY29uc3QgY2xvc2U9ICQoXCIubW9kYWwtY2xvc2VcIik7XG5cbiAgICBidXR0b25fbW9kYWwuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgbGF5b3V0X21vZGFsLnNob3coKTtcbiAgICB9KTtcblxuICAgIGNsb3NlLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgIGxheW91dF9tb2RhbC5oaWRlKCk7XG4gICAgfSk7XG5cbiAgICAkKGRvY3VtZW50KS5tb3VzZXVwKGZ1bmN0aW9uIChlKSB7XG4gICAgICBpZiAobGF5b3V0X21vZGFsLmhhcyhlLnRhcmdldCkubGVuZ3RoID09PSAwKXtcbiAgICAgICAgbGF5b3V0X21vZGFsLmhpZGUoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgICQoXCIubW9kYWwtaW5wdXRfcGhvbmVcIikubWFzaygnKzcoMDAwKSAwMDAgLSAwMCAtIDAwJyk7XG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBNT0RBTDtcbiIsImNvbnN0IE5FV1MgPSB7XG4gIG5ld3NTbGlkZXI6IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IHNldHRpbmdzID0ge1xuICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICBzbGlkZXNUb1Nob3c6IDMsXG4gICAgICBzbGlkZXNUb1Njcm9sbDogMyxcbiAgICAgIG5leHRBcnJvdzogYFxuICAgICAgICA8cCBjbGFzcz1cIm5ld3Mtc2xpZGVyLWFycm93IG5ld3Mtc2xpZGVyLWFycm93LXJpZ2h0XCI+PGkgY2xhc3M9XCJpY29uIGljb24tYXJyb3dcIj48L2k+PHNwYW4+0L/RgNC10LQ8L3NwYW4+PC9wPlxuICAgICAgYCxcbiAgICAgIHByZXZBcnJvdzogYFxuICAgICAgICAgPHAgY2xhc3M9XCJuZXdzLXNsaWRlci1hcnJvdyBuZXdzLXNsaWRlci1hcnJvdy1sZWZ0XCI+PHNwYW4+0YHQu9C10LQ8L3NwYW4+PGkgY2xhc3M9XCJpY29uIGljb24tYXJyb3dcIj48L2k+PC9wPlxuICAgICAgYCxcbiAgICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgICAge1xuICAgICAgICAgIGJyZWFrcG9pbnQ6IDEwMjQsXG4gICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXG4gICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMixcbiAgICAgICAgICAgIG5leHRBcnJvdzogZmFsc2UsXG4gICAgICAgICAgICBwcmV2QXJyb3c6IGZhbHNlLFxuICAgICAgICAgIH1cbiAgICAgICAgfSx7XG4gICAgICAgICAgYnJlYWtwb2ludDogNzIwLFxuICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxuICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgICAgICBuZXh0QXJyb3c6IGZhbHNlLFxuICAgICAgICAgICAgcHJldkFycm93OiBmYWxzZSxcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9O1xuXG4gICAgLy8gaW5pdGlhbGl6ZSB0aGUgc2xpZGVyXG4gICAgJCgnLm5ld3Mtc2xpZGVyJykuc2xpY2soc2V0dGluZ3MpO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBORVdTO1xuIl19
