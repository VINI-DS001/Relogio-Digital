const horasRD = document.getElementById("hour");
const minutosRD = document.getElementById("minutes");
const segundosRD = document.getElementById("seconds");
const ampmRD = document.getElementById("ampm");

function Relogio() {
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let ampm = "AM"

    if (h > 12) {
        h = h - 12
        ampm = "PM"
    }

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    horasRD.innerText = h;
    minutosRD.innerText = m;
    segundosRD.innerText = s;
    ampmRD, (innerText = ampm);
    setTimeout(() => {
        Relogio()
    }, 1000)
}

Relogio()