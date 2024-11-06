fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json()) // Promiseがresolveされた時に実行される
  .then(data => console.log(data)) // 一つ前のthenがresolveされた時に実行される
  .catch(error => console.error(error));

// async/awaitを使った場合
const getUser = async () => {
  try {
    const response = await fetch('https://json placeholder.typicode.com/users');
    const data = await response.json();
    console.log(data);
  }
  catch (error) {
    console.error(error);
  }
}
