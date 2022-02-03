

function horoskop() {
  document.getElementById("text").innerHTML =
    "Keberuntungan Anda hari ini adalah: <hr>";
  const randomNumber = Date.now() % 10;
  console.log(randomNumber);
  cekNumber = () => {
    if (randomNumber >= 0 && randomNumber <= 3) {
      return "Mengerikan... <br>";
    } else if (randomNumber >= 4 && randomNumber <= 7) {
      return "Boleh juga! <br>";
    } else if (randomNumber >= 8 && randomNumber <= 10) {
      return "Hebat!! <br>";
    }
  };
  const divHasil = document.getElementById("hasil");
  let p = document.createElement("p");
  p.innerHTML = cekNumber(randomNumber);
  divHasil.append(p);
}

function clearText() {
    const e = document.getElementById("hasil");
    e.remove();
    location.reload();
}


// function horoskop() {
//   document.getElementById("text").innerHTML =
//     "Keberuntungan Anda hari ini adalah: <hr>";

//   const randomNumber = Date.now() % 10;
//   console.log(randomNumber);
//   const divHasil = document.getElementById("hasil");
//   let p = document.createElement("p");
//   if (randomNumber >= 0 && randomNumber <= 3) {
//     p.innerHTML = "Mengerikan... <br>";
//     divHasil.append(p);
//   } else if (randomNumber >= 4 && randomNumber <= 7) {
//     p.innerHTML = "Boleh juga! <br>";
//     divHasil.append(p);
//   } else if (randomNumber >= 8 && randomNumber <= 10) {
//     p.innerHTML = "Hebat!! <br>";
//     divHasil.append(p);
//   }
// }