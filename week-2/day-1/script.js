// Kullanıcı bilgileri
const userInfo = {
  userName: prompt("Adınız:"),
  userAge: prompt("Yaşınız:"),
  userJob: prompt("Mesleğiniz:"),
};

console.log(
  `Kullanıcı Bilgileri: { name: '${userInfo.userName}', age: ${userInfo.userAge}, job: '${userInfo.userJob}' }`
);

let cart = [];

// Ürün kaldırma fonksiyonu
function removeItem(productName) {
  const index = cart.findIndex(
    (item) => item.product.toLowerCase() === productName.toLowerCase()
  );
  cart.splice(index, 1);
  console.log(`'${productName}' ürünü sepetten çıkarıldı.`);
}

// Kullanıcıdan girdi alma işlemi
while (true) {
  let choice = prompt(
    "Yapmak istediğiniz işlem (Ürün ekle(e), Ürün sil(s), Çık(q)):"
  );

  if (choice === "e") {
    let productName = prompt("Sepete eklemek istediğiniz ürünü yazın:");

    let productPrice = parseFloat(prompt("Ürünün fiyatı:"));

    cart.push({ product: productName, price: productPrice });

    console.log(
      `'${productName}' ürünü sepete eklendi. Fiyatı: ${productPrice} TL`
    );
  } else if (choice === "s") {
    let productName = prompt("Sepetten çıkarmak istediğiniz ürünü yazın:");
    removeItem(productName);
  } else if (choice === "q") break;
}

// Toplam fiyat
const totalPrice = cart.reduce(function (acc, item) {
  return acc + item.price;
}, 0);

// Sepet bilgileri
console.log("\n Sepetiniz:");
cart.forEach((item) => console.log(`- ${item.product}: ${item.price} TL`));
console.log(`\n Toplam Fiyat: ${totalPrice} TL`);
