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

},{}]},{},[1]);
