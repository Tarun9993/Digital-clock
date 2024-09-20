let hE = document.querySelector(".h")
let mE = document.querySelector(".m")
let sE = document.querySelector(".s")
let amPmE= document.querySelector(".amPm")

function clock(){
    let date = new Date()
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let amPm = "AM";
    
    if(h > 12){
        h = h - 12
        amPm = "PM"
    }

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    hE.innerText = h;
    mE.innerText = m;
    sE.innerText = s;
    amPmE.innerText = amPm;

    setTimeout(() =>{
        clock()
    },1000)
}
clock()