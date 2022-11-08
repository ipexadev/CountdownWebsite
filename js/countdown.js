var comingdate = new Date('Jan 1, 2023 00:00:00');

var d = document.getElementById('d');
var h = document.getElementById('h');
var m = document.getElementById('m');
var s = document.getElementById('s');

var x = setInterval(function(){
    var timenow = new Date()
    const des = comingdate.getTime() - timenow.getTime();
    const days = Math.floor(des/(1000 * 60 * 60 * 24));
    const hours = Math.floor(des%(1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    const minutes = Math.floor(des%(1000 * 60 * 60) / (1000 * 60));
    const seconds = Math.floor(des%(1000 * 60) / 1000);

    d.innerHTML = getTrueNumber(days);
    h.innerHTML = getTrueNumber(hours);
    m.innerHTML = getTrueNumber(minutes);
    s.innerHTML = getTrueNumber(seconds);

    if(days&&hours&&minutes&&seconds <0){
        d.innerHTML = "-"
        h.innerHTML = "-"
        m.innerHTML = "-"
        s.innerHTML = "-"
    }

}, 1000)

function getTrueNumber(x) {
    if(x<10) return '0'+x;
    else return x;
}