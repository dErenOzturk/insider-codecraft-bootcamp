$(document).ready(function () {
  $("#loadProducts").click(function () {
    $.ajax({
      url: "products.json",
      method: "GET",
      dataType: "json",
      success: function (data) {
        $("#productList").empty();

        $.each(data, function (index, product) {
          let productCard = $("<div class='product-card'></div>");
          productCard.append("<h3>" + product.name + "</h3>");
          productCard.append("<p>Fiyat: " + product.price + "</p>");
          productCard.append(
            "<a href='" + product.link + "' target='_blank'>Ürüne Git</a>"
          );

          $("#productList").append(productCard);
        });
      },
      error: function () {
        alert("Ürünler yüklenirken hata oluştu!");
      },
    });
  });
});
