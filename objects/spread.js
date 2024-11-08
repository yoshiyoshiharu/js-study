// スプレッド構文
const peaks = ["Tallac", "Ralston", "Rose"];
const [last] = [...peaks].reverse();
// rubyでいうところの[**peaks]

// 可変長引数
function directions(...args) {
  const [start, ...remaining] = args;
  const [finish, ...stops] = remaining.reverse();
}

// オブジェクトのスプレッド構文
const morning = {
  breakfast: "oatmeal",
  lunch: "peanut butter and jelly"
};
const dinner = "mac and cheese";

const backpackingMeals = {
  ...morning,
  dinner
};
/*
{
  breakfast: "oatmeal",
  lunch: "peanut butter and jelly",
  dinner: "mac and cheese"
}
*/
