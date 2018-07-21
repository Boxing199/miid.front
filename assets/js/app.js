(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var _dots = require('./modules/dots');

var _dots2 = _interopRequireDefault(_dots);

var _about_us = require('./modules/about_us');

var _about_us2 = _interopRequireDefault(_about_us);

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
  });
})(jQuery);

},{"./modules/about_us":2,"./modules/dots":3}],2:[function(require,module,exports){
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

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvYXBwLmpzIiwic3JjL2pzL21vZHVsZXMvYWJvdXRfdXMuanMiLCJzcmMvanMvbW9kdWxlcy9kb3RzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNLQTs7OztBQUNBOzs7Ozs7QUFOQTtBQUNBO0FBQ0E7QUFDQTs7QUFLQSxDQUFFLFVBQUMsQ0FBRCxFQUFPO0FBQ1A7O0FBRUE7O0FBQ0EsSUFBRSxZQUFNO0FBQ04sbUJBQUcsVUFBSDtBQUNBLHVCQUFNLGFBQU47QUFDRCxHQUhEO0FBS0QsQ0FURCxFQVNHLE1BVEg7Ozs7Ozs7O0FDUkEsSUFBTSxRQUFRO0FBQ1osaUJBQWUseUJBQVc7QUFDeEIsUUFBTSxXQUFXO0FBQ2YsY0FBUSxLQURPO0FBRWYsZ0JBQVUsSUFGSztBQUdmLGdCQUFVLElBSEs7QUFJZixxQkFBZSxJQUpBO0FBS2YsWUFBTSxJQUxTO0FBTWYsb0JBQWM7QUFBQSxlQUFNLDBDQUFOO0FBQUEsT0FOQztBQU9mLGtCQUFZLENBQ1Y7QUFDRSxvQkFBWSxHQURkO0FBRUUsa0JBQVU7QUFDUixrQkFBUSxJQURBO0FBRVIsZ0xBRlE7QUFPUjtBQVBRO0FBRlosT0FEVTtBQVBHLEtBQWpCOztBQTJCQTtBQUNBLE1BQUUsa0JBQUYsRUFBc0IsS0FBdEIsQ0FBNEIsUUFBNUI7QUFDRDtBQS9CVyxDQUFkOztrQkFrQ2UsSzs7Ozs7Ozs7QUNsQ2Y7QUFDQTtBQUNBOztBQUVBLElBQUksS0FBSztBQUNQLGNBQVksc0JBQVc7QUFDckIsUUFBSSxPQUFRLEVBQUUsY0FBRixDQUFaO0FBQUEsUUFDSSxRQUFRLGFBRFo7O0FBR0EsU0FBSyxJQUFMLENBQVUsS0FBVjs7QUFFQSxhQUFTLFdBQVQsR0FBdUI7QUFDckIsVUFBSSxRQUFTLEVBQWI7QUFBQSxVQUNJLFNBQVMsRUFEYjtBQUFBLFVBRUksT0FBUyxRQUFRLE1BRnJCO0FBQUEsVUFHSSxPQUFTLDJCQUhiOztBQUtBLFdBQUssSUFBSSxJQUFJLENBQWIsRUFBZ0IsSUFBSSxJQUFwQixFQUEwQixHQUExQixFQUErQjtBQUM3QixnQkFBUSwyQkFBMkIsQ0FBM0IsR0FBK0IsVUFBdkM7QUFDRDs7QUFFRCxjQUFRLFFBQVI7O0FBRUEsYUFBTyxJQUFQO0FBQ0Q7QUFDRjtBQXJCTSxDQUFUOztrQkF3QmUsRSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIi8vIFlvdSBjYW4gd3JpdGUgYSBjYWxsIGFuZCBpbXBvcnQgeW91ciBmdW5jdGlvbnMgaW4gdGhpcyBmaWxlLlxuLy9cbi8vIFRoaXMgZmlsZSB3aWxsIGJlIGNvbXBpbGVkIGludG8gYXBwLmpzIGFuZCB3aWxsIG5vdCBiZSBtaW5pZmllZC5cbi8vIEZlZWwgZnJlZSB3aXRoIHVzaW5nIEVTNiBoZXJlLlxuXG5pbXBvcnQgREUgZnJvbSAnLi9tb2R1bGVzL2RvdHMnO1xuaW1wb3J0IEFCT1VUIGZyb20gJy4vbW9kdWxlcy9hYm91dF91cyc7XG5cbiggKCQpID0+IHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIC8vIFdoZW4gRE9NIGlzIHJlYWR5XG4gICQoKCkgPT4ge1xuICAgIERFLmRvdHNFZmZlY3QoKTtcbiAgICBBQk9VVC5hYm91dFVzU2xpZGVyKCk7XG4gIH0pO1xuXG59KShqUXVlcnkpO1xuIiwiY29uc3QgQUJPVVQgPSB7XG4gIGFib3V0VXNTbGlkZXI6IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IHNldHRpbmdzID0ge1xuICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgYXV0b3BsYXk6IHRydWUsXG4gICAgICBhdXRvcGxheVNwZWVkOiAyMDAwLFxuICAgICAgZG90czogdHJ1ZSxcbiAgICAgIGN1c3RvbVBhZ2luZzogKCkgPT4gJzxkaXYgY2xhc3M9XCJhYm91dC11cy1zbGlkZXItZG90c1wiPjwvZGl2PicsXG4gICAgICByZXNwb25zaXZlOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBicmVha3BvaW50OiAzMjEsXG4gICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgIGFycm93czogdHJ1ZSxcbiAgICAgICAgICAgIG5leHRBcnJvdzogYFxuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cImFib3V0LXVzLXNsaWRlci1hcnJvdy1yaWdodFwiXG4gICAgICAgICAgICAgICAgICBzcmM9XCJhc3NldHMvaW1hZ2VzL21haW4vYXJyb3dfcmlnaHQucG5nXCJcbiAgICAgICAgICAgICAgLz5gLFxuICAgICAgICAgICAgcHJldkFycm93OiBgXG4gICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYWJvdXQtdXMtc2xpZGVyLWFycm93LWxlZnRcIlxuICAgICAgICAgICAgICAgICAgc3JjPVwiYXNzZXRzL2ltYWdlcy9tYWluL2Fycm93X2xlZnQucG5nXCJcbiAgICAgICAgICAgICAgLz5gLFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH07XG5cbiAgICAvLyBpbml0aWFsaXplIHRoZSBzbGlkZXJcbiAgICAkKCcuYWJvdXQtdXMtc2xpZGVyJykuc2xpY2soc2V0dGluZ3MpO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBQk9VVDtcbiIsIi8vIFRoaXMgaXMgYW4gZXhhbXBsZXMgb2Ygc2ltcGxlIGV4cG9ydC5cbi8vXG4vLyBZb3UgY2FuIHJlbW92ZSBvciBhZGQgeW91ciBvd24gZnVuY3Rpb24gaW4gdGhpcyBmaWxlLlxuXG52YXIgREUgPSB7XG4gIGRvdHNFZmZlY3Q6IGZ1bmN0aW9uKCkge1xuICAgIHZhciAkY250ICA9ICQoJyNob21lLWNhbnZhcycpLFxuICAgICAgICBjZWxscyA9IGNyZWF0ZUNlbGxzKCk7XG5cbiAgICAkY250Lmh0bWwoY2VsbHMpO1xuXG4gICAgZnVuY3Rpb24gY3JlYXRlQ2VsbHMoKSB7XG4gICAgICB2YXIgd2lkdGggID0gMTAsXG4gICAgICAgICAgaGVpZ2h0ID0gMTAsXG4gICAgICAgICAgc2l6ZSAgID0gd2lkdGggKiBoZWlnaHQsXG4gICAgICAgICAgaHRtbCAgID0gJzxkaXYgY2xhc3M9XCJlbnRyeS1jZWxsc1wiPic7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2l6ZTsgaSsrKSB7XG4gICAgICAgIGh0bWwgKz0gJzxkaXYgY2xhc3M9XCJjZWxsIGNlbGwtJyArIGkgKyAnXCI+PC9kaXY+JztcbiAgICAgIH1cblxuICAgICAgaHRtbCArPSAnPC9kaXY+JztcblxuICAgICAgcmV0dXJuIGh0bWw7XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBERTsiXX0=
