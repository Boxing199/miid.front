const HEADER = {
  menuToggle: function() {
    const toggle_menu= $(".toggle_menu");
    const header_menu= $(".header_menu");

    toggle_menu.click(function () {
      header_menu.toggleClass("show");
    });
  },
  searchToggle: function() {
    const find_input_item = $(".find_input_item");
    const find_input = $(".find_input");

    find_input_item.click(function () {
      find_input.toggleClass("find_input__active");
    })
  }
};

export default HEADER;
