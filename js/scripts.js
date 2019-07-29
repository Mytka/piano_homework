$(document).ready(function () {


    let piano = document.querySelectorAll('.piano_key')
    let audio1 = document.querySelector('#audio-a')
    let audio2 = document.querySelector('#audio-s')
    let audio3 = document.querySelector('#audio-d')
    let audio4 = document.querySelector('#audio-f')
    let audio5 = document.querySelector('#audio-g')
    let audio6 = document.querySelector('#audio-h')
    let audio7 = document.querySelector('#audio-j')
    let audio8 = document.querySelector('#audio-k')



    document.onkeydown = function (event) {

        let keyCode = event.keyCode;
        if(keyCode == 65) {
            audio1.play();
        }
        if(keyCode == 83) {
            audio2.play()
        }
        if(keyCode == 68) {
            audio3.play()
        }
        if(keyCode == 70) {
            audio4.play()
        }
        if(keyCode == 71) {
            audio5.play()
        }
        if(keyCode == 72) {
            audio6.play()
        }
        if(keyCode == 74) {
            audio7.play()
        }
        if(keyCode == 75) {
            audio8.play()
        }

    };







})/////document ready
