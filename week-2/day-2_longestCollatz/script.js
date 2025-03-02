function collatzLength(num, calculated) {
  let startingNum = num; // İstenen sayı defaul hali
  let count = 0; // Sayaç

  // Hesaplanmamışsa veya >1 ise
  while (num !== 1 && !calculated[num]) {
    if (num % 2 === 0) {
      num = num / 2;
    } else {
      num = 3 * num + 1;
    }
    count++;
  }

  if (calculated[num]) count += calculated[num]; // Hesaplanmış değer varsa uzunluğunu count'a ekle

  calculated[startingNum] = count; // Hesaplanmış değeri hafızaya ekle

  return count;
}

function longestCollatz() {
  let calculated = { 1: 1 }; // 1'in uzunluk değeri zaten 1
  let maxLength = 1; // Max uzunluk değeri
  let maxStartingNumber = 1; // Max uzunluğu başlatan sayı

  for (let i = 1; i < 1_000_000; i++) {
    let length = collatzLength(i, calculated);
    if (length > maxLength) {
      maxLength = length;
      maxStartingNumber = i;
    }
  }

  return { number: maxStartingNumber, length: maxLength };
}

let result = longestCollatz();

console.log(
  `1m'den küçük sayılar için en uzun zinciri üreten başlangıç sayısı: ${result.number} \nZincir uzunluğu: ${result.length}`
);

alert(
  `En uzun zinciri üreten başlangıç sayısı: ${result.number} \nZincir uzunluğu: ${result.length}`
);
