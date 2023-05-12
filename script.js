
let txtHoras = document.querySelector(".horas")
let txtData = document.querySelector(".data")
let txtOla = document.querySelector(".txtOla");

var relogio = setInterval(function time(){

    var dtAtual = new Date();


    var dia = dtAtual.getDate();
    var mes = dtAtual.getMonth() + 1;
    var ano = dtAtual.getFullYear();

    var horas = dtAtual.getHours();
    var min = dtAtual.getMinutes();
    var seg = dtAtual.getSeconds();
    


    txtHoras.innerHTML = horas+":"+min+":"+seg;

    txtData.innerHTML = dia+"/"+mes+"/"+ano;



})


function changeBackGround(){
    
    var dt = new Date();

    var horas = dt.getHours();
    /*var horas = 19;*/

    if(horas >= 0){
        txtOla.innerHTML = "Boa Noite";
        document.body.style.backgroundImage = "url('imgs/noite.jpeg')";
    }
    if(horas >= 5 && horas < 13){
        txtOla.innerHTML = "Bom dia";
        document.body.style.backgroundImage = "url('imgs/bomdia.jpeg')";
    }

    if(horas > 12 && horas <= 18) {
        txtOla.innerHTML = "Boa Tarde";
        document.body.style.backgroundImage = "url('imgs/tarde.jpeg')";
    }

    if(horas > 18){
        txtOla.innerHTML = "Boa Noite";
        document.body.style.backgroundImage = "url('imgs/noite.jpeg')";
    }

    
}

