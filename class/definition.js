// クラス宣言
function Vacation(destination, length) {
  this.destination = destination;
  this.length = length;
}
// インスタンスメソッド
Vacation.prototype.print = function() {
  console.log(this.destination + ": " + this.length + " days");
}
// インスタンス化
var maui = new Vacation("Maui", 7);
maui.print(); // Maui: 7 days

// classを使った場合
class Vacation {
  constructor(destination, length) {
    this.destination = destination;
    this.length = length;
  }
  print() {
    console.log(`${this.destination}: ${this.length} days`);
  }
}

const trip = new Vacation("Santiago, Chile", 7);
trip.print(); // Santiago, Chile: 7 days
