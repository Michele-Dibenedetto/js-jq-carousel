// aspetto che la pagina sia completamente caricata prima di far eseguire il mio js
$(document).ready(function() {
    // aggiungo un evento al click dell'elemento che ha come classe .next
    $(".next").click(function() {
        // attribuisco alla variabile l'immagine e il point che ha come classe active
        var forth = $("img.active");
        var circleForth = $(".point i.active");
        // rimuovo la classe active all'elemento che diventerà display:none
        forth.removeClass("active");
        circleForth.removeClass("active");
        // se arrivo all'ultimo elemento (a cui ho attribuito la classe last come bandiera per segnalare che è l'ultimo)
        // la classe active l'attribuisco all'elemento che ha come classe first (bandiera assegnata al primo elemento così da poter ricominciare a scorrere dal primo elemento)
        if (forth.hasClass("last")) {
            $("img.first").addClass("active");
            $("i.first").addClass("active")
        } // altrimenti assegno la classe active all'elemento successivo che abbia lo stesso tag (quindi suo fratello) dell'elemento
         else {
            forth.next("img").addClass("active");
            circleForth.next("i").addClass("active");
        }
    })

    $(".prev").click(function() {
        var back = $("img.active");
        var circleBack = $(".point i.active");
        back.removeClass("active");
        circleBack.removeClass("active");
        if (back.hasClass("first")) {
            $("img.last").addClass("active");
            $("i.last").addClass("active");
        } else {
            back.prev("img").addClass("active");
            circleBack.prev("i").addClass("active");
        }
    })
})