$(document).ready(function(){
    start();


});


function start(){
    $("#wrapper").empty()
    var html ="";
    html += '<div id="sweorengdivs">'
    html += '<div><button class="sweOrEngButton" onclick="swe()">Svenska</button></div>'
    html += '<div><button class="sweOrEngButton" onclick="eng()">English</button></div>'
    html += '</div>'

    $("#wrapper").append(html)
    $("#sweorengdivs").hide();
    $("#sweorengdivs").slideDown(500);
};
//SVENSKT PERSONLIGT BREV
function swe(){
    var spanWidth = $('#textSwe h1').width();
   
    $("#wrapper").empty()
    var html ="";
    html += '<div class="textSwe"><h1>Hej!</h1><p>Jag studerar webutveckling inom e-handel på medieinstitutet i Göteborg. </p>'
    html += '<p>Vi kommer under hösten 2018 utföra praktik(LIA) inom passande arbetsområder för utbildningen.</p>'
    html += '<p>Mitt krav till dig som arbetsgivare är att jag får praktisera och utföra uppgifter för er inom programmering och webdesign. </p>'
    html += ' <p>Har ni någon passande plats för mig på erat företag?</p>'
    html += '<div id="buttons"><button id="back"onclick="backToLanguage()">Språk</button>'
    html += '<a href="index.html"><button id="back">CV</button></a></div></div>'
    $('#textSwe').animate( { width: spanWidth }, 3000 );
    $("#wrapper").append(html)
    
};

function eng(){
    var spanWidth = $('#textEng h1').width();

    $("#wrapper").empty()
    var html ="";
    html += '<div class="textEng"><h1>Hi!</h1><p style="width:90vh">I am studying web development in e-commerce at the media institute in Gothenburg.</p>'
    html += '<p style="width:110vh">In autumn 2018, we will conduct internships (LIA) in the appropriate areas of work for the education.</p>'
    html += '<p>My requirement for you as an employer is that I can practice and execute tasks for you in programming and web design.</p>'
    html += '<p  style="width:65vh">Do you have any suitable place for me on at your company?</p>'
    html += '<div id="buttons"><button id="back"onclick="backToLanguage()">Språk</button>'
    html += '<a href="index.html"><button id="back">CV</button></a></div></div>'
    $('#textEng').animate( { width: spanWidth }, 3000 );
    $("#wrapper").append(html)
};

function backToLanguage(){
    start();
};


