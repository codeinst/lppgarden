async function getUsers() {
  let response = await fetch("https://jsonplaceholder.typicode.com/users");
  let data = await response.json();
  if (data) {
    console.log("kedua");
    console.log(JSON.stringify(data));
  } else {
    console.log("Data tidak ada");
  }
}
//getUsers();

async function getPosts() {
  let response = await fetch("https://jsonplaceholder.typicode.com/posts");
  let data = await response.json();
  if (data) {
    console.log("ketiga");
    console.log(JSON.stringify(data));
  } else {
    console.log("Data tidak ada");
  }
}
//getPosts();

async function getComments() {
  let response = await fetch("https://jsonplaceholder.typicode.com/comments");
  let data = await response.json();
  if (data) {
    console.log("keempat");
    console.log(JSON.stringify(data));
  } else {
    console.log("Data tidak ada");
  }
}
//getComments();
