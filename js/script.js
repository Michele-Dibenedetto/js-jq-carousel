// aspetto che la pagina sia completamente caricata prima di far eseguire il mio js
$(document).ready(function() {

    // creo una variabile che fungera da arrey dove inserire tutte le immagini
    var immagini = document.getElementsByTagName("img");
    var point;
    // creo un ciclo per creare tanti pallini quente sono le immagini
    for (i=0; i < immagini.length; i++) {
        if (i==0) {
            point += document.getElementById("prova").innerHTML += "<i class='fas fa-circle active first'>" + "</i>"; 
        } else if (i==immagini.length - 1) {
            point += document.getElementById("prova").innerHTML += "<i class='fas fa-circle last'>" + "</i>";
        } else {
            point += document.getElementById("prova").innerHTML += "<i class='fas fa-circle'>" + "</i>";
        }
    }

    // al click delle icone uso le funzioni che mi fanno scorrere le immagini
    $(".next").click(function() {
        next();
    })

    $(".prev").click(function() {
        prev();
    })
    // scorrimento delle immagini con la tastiera
    // e serve per indicare l'evento
    $(document).keydown(function(e) {
        // e.which serve per identificare il tasto premuto dalla tastiera
        if (e.which == 37) {
            prev();
        } else if (e.which == 39) {
            next();
        }
    })

    // al click di uno dei pallini
    $(".point i").click(function() {
        // rimuovo la classe active alle immagini
        $("img").removeClass("active");
        // e attribuisco la classe active all'immagine che ha lo stesso indice del pallino cliccato.
        // con .eq indico l'indice dell'immagine che dovrà essere attivata e questo indice sarà lo stesso del pallino cliccato e ciò me lo ricavo con 
        // con .index che mi ricava l'indice di (this) ovvero il pallino cliccato 
        $("img").eq($(".point i").index(this)).addClass("active");

        $(".point i").removeClass("active");
        $(this).addClass("active");
    })
})

function prev() {
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
}

// aggiungo un evento al click dell'elemento che ha come classe .next
function next() {
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
}

