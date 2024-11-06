// スプレッド構文
const peaks = ["Tallac", "Ralston", "Rose"];
const [last] = [...peaks].reverse();
// rubyでいうところの[**peaks]

// 可変長引数
function directions(...args) {
  const [start, ...remaining] = args;
  const [finish, ...stops] = remaining.reverse();
}
