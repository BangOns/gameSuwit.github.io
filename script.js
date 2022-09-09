// role Komputer
function komputer() {
  let role = Math.round(Math.random() * 10);
  if (role > 7) {
    return `gajah`;
  } else if (role <= 7 && role > 5) {
    return `orang`;
  } else if (role <= 5) {
    return `semut`;
  }
}

//  rules game
function rules(player, comp) {
  if (player == comp) {
    return `Seri`;
  } else if (player == "gajah") {
    if (comp == `orang`) {
      return `Menang`;
    } else {
      return `Kalah`;
    }
  } else if (player == "orang") {
    if (comp == "semut") {
      return `Menang`;
    } else {
      return `Kalah`;
    }
  } else if (player == "semut") {
    if (comp == "gajah") {
      return `Menang`;
    } else {
      return "Kalah";
    }
  }
}

// mengambil tombol
const player = document.querySelectorAll(".areaPlayer ul li img");
const image = document.querySelector(".img img");
const textHasil = document.querySelector(".hasil p");
const skor = document.querySelector(".score p");
skor.innerHTML = `Skor Kamu : 0`;
let score = 0;
player.forEach((pilih) => {
  pilih.addEventListener("click", (e) => {
    const ply = e.target.classList;
    const kom = komputer();
    let hasil = rules(ply, kom);
    putar();
    setTimeout(() => {
      image.setAttribute("src", "img/" + kom + ".png");
      textHasil.innerHTML = hasil;
      if (hasil == "Menang") {
        score++;
      } else {
        score;
      }
      skor.innerHTML = `Skor Kamu : ${score}`;
    }, 1000);
  });
});

function putar() {
  const img = document.querySelector(".img img");
  let arr = ["gajah", "orang", "semut"];
  let roling = new Date().getTime();
  let l = 0;
  setInterval(() => {
    if (new Date().getTime() - roling > 1000) {
      clearInterval;
      return;
    } else {
      img.setAttribute("src", "img/" + arr[l++] + ".png");
      if (l == arr.length) {
        l = 0;
      }
    }
  }, 100);
}
