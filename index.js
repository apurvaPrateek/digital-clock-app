let hours = document.querySelector(".hours span");
let mins = document.querySelector(".mins span");
let sec = document.querySelector(".sec span");
setInterval(() => {
    let today = new Date();
    sec.innerHTML = today.getSeconds();
    mins.innerHTML = today.getMinutes();
    hours.innerHTML = today.getHours();
    if(sec.innerHTML < 10) sec.innerHTML = "0" + sec.innerHTML;
    if(mins.innerHTML < 10) mins.innerHTML = "0" + mins.innerHTML;
    if(hours.innerHTML < 10) hours.innerHTML = "0" + hours.innerHTML;
}, 1000);