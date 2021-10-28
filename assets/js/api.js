/* 
  Function name: getUsers()
  Description: Fungsi untuk mengambil Users
  Author: Yudi
*/
async function getUsers() {
  let response = await fetch("https://jsonplaceholder.typicode.com/users");
  let data = await response.json();
  if (data) {
    return data;
  } else {
    console.log("Data User tidak ada");
  }
}

/* 
  Function name: renderUsers()
  Description: Fungsi untuk menampilkan Users di halaman HTML
  Author: Fulan
*/
async function renderUsers() {
  let users = await getUsers();
  let html = "";
  users.forEach((user) => {
    let htmlSegment = `<p>
                          ${user.id} ${user.name}
                          ${user.username}
                          ${user.email}
                      </p>`;
    html += htmlSegment;
  });

  document.querySelector(".about").innerHTML = html;
}
renderUsers();

/* 
  Function name: getPosts()
  Description: Fungsi untuk mengambil Posts
  Author: Fulan
*/
async function getPosts() {
  let response = await fetch("https://jsonplaceholder.typicode.com/posts");
  let data = await response.json();
  if (data) {
    console.log("Data Post ada.");
    return data;
  } else {
    console.log("Data Post tidak ada");
  }
}
//getPosts();

/* 
  Function name: renderPosts()
  Description: Fungsi untuk menampilkan Posts di halaman HTML
  Author: Fulan
*/
async function renderPosts() {
  let posts = await getPosts();
  let html = "";
  posts.forEach((post) => {
    let htmlSegment = `<p>
                          ${post.id} ${post.title}
                          ${post.body}
                      </p>`;
    html += htmlSegment;
  });

  document.querySelector("#services").innerHTML = html;
}
renderPosts();

/* 
  Function name: getComments()
  Description: Fungsi untuk mengambil Comments
  Author: Fulan
*/
async function getComments() {
  let response = await fetch("https://jsonplaceholder.typicode.com/comments");
  let data = await response.json();
  if (data) {
    console.log("Data Comment ada.");
    console.log(JSON.stringify(data));
  } else {
    console.log("Data Comment tidak ada");
  }
}
