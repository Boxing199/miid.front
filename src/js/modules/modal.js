const MODAL = {
  modalToggle: function() {
    const button_modal= $(".button-modal");
    const layout_modal= $(".layout_modal");
    const close= $(".modal-close");

    button_modal.click(function () {
      layout_modal.show();
    });

    close.click(function () {
      layout_modal.hide();
    });

    $(document).mouseup(function (e) {
      if (layout_modal.has(e.target).length === 0){
        layout_modal.hide();
      }
    });

    $(".modal-input_phone").mask('+7(000) 000 - 00 - 00');
  },
};

export default MODAL;
