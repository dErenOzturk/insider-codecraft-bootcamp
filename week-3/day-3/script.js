$(document).ready(function () {
  $("#basvuruAc").click(function () {
    $("#formContainer").fadeIn();
  });

  $("#formKapat").click(function () {
    $("#formContainer").fadeOut();
  });

  $("#telefon").mask("(999) 999-99-99");

  $("#basvuruForm").validate({
    rules: {
      ad: "required",
      soyad: "required",
      email: {
        required: true,
        email: true,
      },
      telefon: "required",
      pozisyon: "required",
    },
    messages: {
      ad: "Lütfen adınızı girin",
      soyad: "Lütfen soyadınızı girin",
      email: "Geçerli bir e-posta girin",
      telefon: "Telefon numaranızı girin",
      pozisyon: "Pozisyon seçiniz",
    },
    submitHandler: function (form) {
      $("#formContainer").fadeOut();

      $("#basariMesaji")
        .css("display", "block")
        .hide()
        .fadeIn()
        .delay(3000)
        .fadeOut(function () {
          form.reset();
        });
    },
  });
});
