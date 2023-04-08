function digitalclock() {
    var div1 = document.getElementById("hours");
    var div2 = document.getElementById("minutes");
    var div3 = document.getElementById("seconds");
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    if (h > 12) {
        h = h - 12;
        h = "0" + h
    }
    div1.innerHTML = h;
    div2.innerHTML = m;
    div3.innerHTML = s;
}
var set = setInterval(digitalclock, 1000);
function iftari(){
    var div1 = document.getElementById("hours");
    var div2 = document.getElementById("minutes");
    var div3 = document.getElementById("seconds");
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    if (h > 12) {
        h = h - 12;
        h = "0" + h
    }
    div1.innerHTML = h;
    div2.innerHTML = m;
    div3.innerHTML = s;
    var audi = new Audio("azan1.mp3");
    var audi2 = new Audio("sehri.mp3");
    document.getElementById("azaan").addEventListener("click",()=>{
        if (h==="0"+6 && m===52){
            audi.play();
        }
    });
    document.getElementById("siran").addEventListener("click",()=>{
        if (h==="0"+4 && m===58){
            audi2.play();
        }
    });

}
iftari();