const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");

const relogio = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let mn = dateToday.getMinutes();
    let se = dateToday.getSeconds();

    if (hr < 10) hr ="0" + hr;

    if (mn < 10) mn ="0" + mn;

    if (se < 10) se ="0" + se;

    horas.textContent = hr;
    minutos.textContent = mn;
    segundos.textContent = se;

});