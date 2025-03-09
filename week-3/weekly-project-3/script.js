$(document).ready(function () {
  $.getJSON("products.json", function (data) {
    $.each(data, function (index, product) {
      const productHtml = `
          <div class="product">
            <h3>${product.name}</h3>
            <p>${product.price}</p>
            <a href="${product.link}" target="_blank">Ürüne Git</a>
          </div>
        `;
      $("#product-list").append(productHtml);
    });

    $(".product").click(function () {
      const index = $(".product").index(this);
      const product = data[index];
      $("#popup-name").text(product.name);
      $("#popup-details").text(product.details);
      $("#popup").fadeIn();
    });

    $("#popup-close").click(function () {
      $("#popup").fadeOut();
    });
  });

  $(".product").hover(
    function () {
      $(this).animate({ width: "220px" }, 300);
    },
    function () {
      $(this).animate({ width: "200px" }, 300);
    }
  );
});
