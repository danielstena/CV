var i = 0;
var k = 0;
var txtSwe1 = 'Jag studerar webutveckling inom e-handel på medieinstitutet i Göteborg och vi kommer under hösten 2018 utföra praktik(LIA) inom passande arbetsområder för utbildningen.';
var txtSwe2 = 'Mitt krav som jag ställer till dig som arbetsgivare kommer då vara att jag får praktisera och utföra uppgifter för er inom arbetsområdet programmering och webdesign. Har ni någon passande plats för mig på erat företag?';
var speed = 50;


$(document).ready(function(){
    typeWriter();
    typeWriter2();


   

});
function typeWriter() {
    if (i < txtSwe1.length) {
      document.getElementById("ts1").innerHTML += txtSwe1.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
}

function typeWriter2() {
    if (k < txtSwe2.length) {
      document.getElementById("ts2").innerHTML += txtSwe2.charAt(k);
      k++;
      setTimeout(typeWriter, speed);
    }
}

<p>Jag studerar webutveckling inom e-handel på medieinstitutet i Göteborg. </p>
        <p>Vi kommer under hösten 2018 utföra praktik(LIA) inom passande arbetsområder för utbildningen.</p>
        <p>Mitt krav till dig som arbetsgivare är att jag får praktisera och utföra uppgifter för er inom programmering och webdesign. </p>
        <p>Har ni någon passande plats för mig på erat företag?</p>