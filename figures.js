var knapp = document.getElementById('knapp');
    knapp.addEventListener('click', function(event){
    var c = document.getElementById('canvas_sirkel');
    var kontekst = c.getContext("2d");
    kontekst.beginPath();
    kontekst.arc(150,75,40, 0, 2 * Math.PI);
    kontekst.stroke();
    });

    var knapp1 = document.getElementById('knapp1');
    knapp1.addEventListener('click', function(event){
    var canvas = document.getElementById("canvas_rektangel");
    var kontekst = canvas.getContext("2d");
    kontekst.beginPath();
    kontekst.rect(75, 25, 150, 100);
    kontekst.stroke();
    });

    function changeFill(){
        document.getElementById("sirk").style.fill = document.getElementById("chooseColors").value;
    } 

    function changeFillrect(){
        document.getElementById("rect").style.fill = document.getElementById("chooseColorsRect").value;
    } 

    var div = document.getElementById('svg_rektangel1');
    var display = 0;
    function hidenshow(){
        if (display == 1){
            div.style.display = "block";
            display = 0
        }
        else{
            div.style.display = "none";
            display = 1;
        }

    } 


    var x = document.getElementById('svg_sirkel1');
    var i = 0;
    function hidenshowSirkel(){
        if (i == 1){
            x.style.display = "block";
            i = 0
        }
        else{
            x.style.display = "none";
            i = 1;
        }

    } 
    



