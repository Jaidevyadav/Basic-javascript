//program to show discout
// discount = Sp - Lp/lp *100

var listingPrice = 1299;
var sellingPrice = 399;

var discount = ((listingPrice - sellingPrice) / listingPrice) * 100;

console.log(Math.round(discount) + "% off");

var number = listingPrice > sellingPrice;
console.log(typeof number);
