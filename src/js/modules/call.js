const CALL = {
  collButton: () => {
    const maxHeight = 500;
    const $callButton = $('.js-call-widget');

    $(document).scroll(() => {
      if (window.scrollY > maxHeight) {
        $callButton.fadeIn();
      } else {
        $callButton.fadeOut();
      }
    })
  }
};

export default CALL;
