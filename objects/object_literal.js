// プロパティ名の省略
const name = '太郎';
const age = 20;

const obj = { name, age };
// { name: name, age: age } と同じ

// 関数の省略もできる
const obj = {
  hello(name) {
    console.log('hello ' + name);
  }
};
/*
以下と同じ
const obj = {
  hello: function(name) {
    console.log('hello ' + name);
  }
};
*/
