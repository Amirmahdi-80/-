function fun1() {
    var Number1 = Number(document.getElementById("No2").value)
    var Age = Number1 * 3.156* 10 ** 7
    document.getElementById("No3").innerText = Age.toFixed(2) + ("ثانیه")
    document.getElementById("No1").innerText = ("محاسبه انجام شد")
}
function fun2() {
    var Hoquq = Number(document.getElementById("No4").value)
    var Bime = 7
    var Maliyat = 10
    var Kasri1 = Hoquq * Bime / 100
    var Kasri2 = Hoquq * Maliyat / 100
    var Kasri = Kasri1 + Kasri2
    var Daryaft = Hoquq - Kasri
    document.getElementById("Bime").innerText = Kasri1 + (" تومان بیمه")
    document.getElementById("Maliyat").innerText = Kasri2 + (" تومان مالیات")
    document.getElementById("Daryafti").innerText = Daryaft + (" تومان خالص دریافتی")
    document.getElementById("No5").innerText = ("محاسبه انجام شد")
}
function fun3() {
    var Number1 = Number(document.getElementById("Year1").value)
    var Number2 = Number(document.getElementById("Year2").value)
    var Tavarome = ((Number2 - Number1) / Number1) * 100
    document.getElementById("Tavarom").innerText = Tavarome.toFixed(2) + ("درصد")
    var Taf = Number2 - Number1
    document.getElementById("Tafavot").innerText = Taf+ ("تومان تفاوت")
    var Jari=(Number2*(Tavarome/100))+Number2
    document.getElementById("NextYear").innerText=Jari.toFixed(2)+("تومان")
    document.getElementById("N1").innerText=("محاسبه انجام شد")
    document.getElementById("N2").innerText=("محاسبه انجام شد")
}
function fun13(){
    var Qeymat=Number(document.getElementById("Kala").value)
    var Tavarom=Number(document.getElementById("Nerkh").value)
    var Y1=(Qeymat*(Tavarom/100))+Qeymat
    document.getElementById("Sale1").innerText=Y1+("تومان ")
    var Y2=(Y1*(Tavarom/100))+Y1
    document.getElementById("Sale2").innerText=Y2+("تومان ")
    var Y2=(Y2*(Tavarom/100))+Y2
    document.getElementById("Sale3").innerText=Y2+("تومان ")
    document.getElementById("Sh1").innerText=("محاسبه انجام شد")
    document.getElementById("Sh2").innerText=("محاسبه انجام شد")
}
function fun4(){
    document.getElementById("D1").style.opacity="1"
}
function fun5(){
    document.getElementById("D2").style.opacity="1"
}
function fun6(){
    document.getElementById("D3").style.opacity="1"
}
function fun11(){
    document.getElementById("D4").style.opacity="1"
}
function fun7(){
    document.getElementById("D1").style.opacity="0"
}
function fun8(){
    document.getElementById("D2").style.opacity="0"
}
function fun9(){
    document.getElementById("D3").style.opacity="0"
}
function fun12(){
    document.getElementById("D4").style.opacity="0"
}
function fun10(){
    location.href="Pages/Calculator.html"
}