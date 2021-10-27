/* Variable  */
// var nama = "yudi" (variable dalam js lama)
// $nama = "Yudi"; (variable dalam php)

let nama_depan = "Yudi";
let nama_belakang = "U";
let nama_lengkap = nama_depan + " " + nama_belakang;
let nama_lengkap2 = `${nama_depan} ${nama_belakang}`;

let barang = 80;
let jumlah = 100;
let total = barang + jumlah;

/* constant  */
const country = "Indonesia";
const database = "pelatihan";

/* Data Type */
// silahkan lihat  javascript.info

/* Operator */

/* Alert */
let cookie;
cookie = "yudi 20211027";
let cookie2 = "utomo 20211027";

/* Output */
// alert(cookie);
// console.log(cookie2);
console.log("total barang " + total);
// document.write("Test dulu");

/* Conditional */
let message;

if (nama_lengkap == "Yudi Utomo") {
  // alert("selamat datang " + nama_lengkap);
  message = "Selamat datang" + nama_lengkap;
} else {
  // alert("Maaf, anda sopo yo?");
  message = "Maaf, anda sopo yo?";
}

// alert(message);

/* Loop */

for (let i = 0; i <= 10; i++) {
  // console.log("loop 1 " + i);
}

let j = 0;
while (j <= 10) {
  // console.log("loop 2 " + j);
  j++;
}

let k = 0;
do {
  // console.log("loop 3 " + k);
  k++;
} while (k <= 10);

/* Function */
nama_lengkap = null;

function greeting() {
  if (nama_lengkap) {
    console.log("User aman, bisa masuk web.");
  } else {
    console.log("User tidak aman, jangan kasih masuk");
  }
}
greeting();

function login(username, password) {
  if (username && password) {
    console.log("Selamat datang, ");
    console.log("Username: " + username);
    console.log("Password: " + password);
  } else if (username || password) {
    console.log("Username atau Password salah.");
  } else {
    console.log("Anda belum login.");
  }
}

let username = "Fulan";
let password = "1234";

login(username, password);

function luasSegitiga(alas, tinggi) {
  let luas = (alas * tinggi) / 2;
  return luas;
}

function luasSegitiga2(alas, tinggi) {
  let luas = (alas * tinggi) / 2;
  console.log(luas);
}

let alas = 10;
let tinggi = 5;
let luas = luasSegitiga(alas, tinggi);
console.log(luas);

/* Struktur Data  */
let dataMhs = ["Yudi", "Yuda", "Mila"];

let dataMhs2 = [
  ["Yudi", "Yuda", "Mila"],
  ["Melon", "Jeruk", "Anggur"],
];

let ambilDataMhs = dataMhs[2];
console.log(ambilDataMhs);

let biodataMhs = {
  nama: "Yudi",
  tempat_lahir: "Bandar Lampung",
  negara: "Indonesia",
};

let ambilBiodataMhs = biodataMhs.nama;
console.log(ambilBiodataMhs);

let biodataMhs2 = {
  nim: "11",
  biodata: {
    nama: "Yudi",
    tempat_lahir: "Bandar Lampung",
    negara: "Indonesia",
  },
  nim: "12",
  biodata: {
    nama: "Yuda",
    tempat_lahir: "Yogya",
    negara: "Indonesia",
  },
};
