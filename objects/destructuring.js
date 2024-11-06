const sandwitch = {
  bread: "dutch crunch",
  meat: "tuna",
  cheese: "swiss",
  toppings: ["lettuce", "tomato", "mustard"]
}

// オブジェクトのデストラクチャリング
const { bread, meat } = sandwitch;
console.log(bread, meat);

// 関数のデストラクチャリング
const lordify = ({ firstName }) => {
  return `${firstName} of Canterbury`;
};

console.log(lordify({ firstName: "Dale", lastName: "Seo" }));

// 配列のデストラクチャリング
const [firstResort] = ["Kirkwood", "Squaw", "Alpine"];
const [, secondResort] = ["Kirkwood", "Squaw", "Alpine"];
const [,, thirdResort] = ["Kirkwood", "Squaw", "Alpine"];
