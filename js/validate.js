$(document).ready(() => {
  $("#contact_form").validate({
    rules: {
      email: {
        required: true,
        email: true,
      },
      fName: {
        required: true,
        minlength: 2,
      },
      questions: {
        required: true,
        minlength: 10,
      },
      lName: {
        required: true,
        minlength: 2,
      },
      phone: {
        required: true,
        phoneUS: true,
      },
    },
    messages: {
      date: {
        dateFormat: "Please enter a date in the format mm/dd/yy",
      },
    },
    submitHandler: function (form, event) {
      event.preventDefault();
      if ($(form).valid()) {
        form.submit();
      }
      return false;
    },
  });
});
