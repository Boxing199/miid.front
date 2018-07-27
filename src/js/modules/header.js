const HEADER = {
  menuToggle: function() {
    const toggle_menu= $(".toggle_menu");
    const header_menu= $(".header_menu");

    toggle_menu.click(function () {
      header_menu.toggleClass("show");
    });
  },
  searchToggle: function() {
    const $findInputItem = $(".find_input_item");
    const $findInput = $(".find_input");
    const $form = $(".find_input_item form");
    const $body = $("body");

    const activate = (event) => {
      event.preventDefault();
      $findInput.addClass("find_input__active");
      $body.on('click', deactivate);

      return false;
    };

    const deactivate = () => {
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

export default HEADER;
