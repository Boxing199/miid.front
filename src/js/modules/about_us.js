const ABOUT = {
  aboutUsSlider: function() {
    const settings = {
      arrows: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 2000,
      dots: true,
      customPaging: () => '<div class="about-us-slider-dots"></div>',
      responsive: [
        {
          breakpoint: 321,
          settings: {
            arrows: true,
            nextArrow: `
              <img
                  class="about-us-slider-arrow-right"
                  src="assets/images/main/arrow_right.png"
              />`,
            prevArrow: `
              <img
                  class="about-us-slider-arrow-left"
                  src="assets/images/main/arrow_left.png"
              />`,
          }
        }
      ]
    };

    // initialize the slider
    $('.about-us-slider').slick(settings);
  }
};

export default ABOUT;
