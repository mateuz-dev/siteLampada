"use strict"

const lampada = document.getElementById("lampada")
let idInterval

function lampadaQuebrada() {
    return document.getElementById("lampada").src.indexOf("quebrada") !== -1
}


function ligarLampada(){
    if(!lampadaQuebrada()){
        lampada.src = "img/ligada.jpg"
        ligar.disabled = true
        desligar.disabled = false
    }
}


function desligarLampada(){
    if(!lampadaQuebrada()){
        lampada.src = "img/desligada.jpg"
        ligar.disabled = false
        desligar.disabled = true
    }
}


function quebrarLampada(){
    lampada.src = "img/quebrada.jpg"
    ligar.disabled = true
    desligar.disabled = true
}

function lampadaDesligada(){
    return lampada.src.includes("desligada")
}


function trocarImagem(){
    if(lampadaDesligada()){
        ligarLampada()
    } else{
        desligarLampada()
    }
}

function piscarLampada(){
    const buttonPiscar = document.getElementById("buttonPiscar")
    if (buttonPiscar.textContent == "PISCAR"){
        idInterval = setInterval(trocarImagem, 350)
        document.getElementById("buttonPiscar").textContent = "PARAR"
    } else{
        clearInterval(idInterval)
        document.getElementById("buttonPiscar").textContent = "PISCAR"
    }
}


document.getElementById("buttonLigar").addEventListener("click", ligarLampada)

document.getElementById("buttonDesligar").addEventListener("click", desligarLampada)

document.getElementById("buttonPiscar").addEventListener("click", piscarLampada)

document.getElementById("lampada").addEventListener("dblclick", quebrarLampada)

document.getElementById("lampada").addEventListener("mouseover", ligarLampada)

document.getElementById("lampada").addEventListener("mouseleave", desligarLampada)