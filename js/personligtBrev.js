$(document).ready(function(){
    start();


});
// var typed = new Typed(".test", options);

// var options = {
//     console.log
//     strings: ["<i>First</i> sentence.", "&amp; a second sentence."],
//     typeSpeed: 40
//   }
  



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
    console.log("syns detta?")
    $("#wrapper").empty()
    var html ="";
    html += '<div class="text"><h1>Hej!</h1></div>'
    html += '<div class="text"><h3>Jag studerar webutveckling inom e-handel på medieinstitutet i Göteborg och vi kommer under hösten 2018 utföra praktik(LIA) inom passande arbetsområder för utbildningen.<br><br>Mitt krav som jag ställer till dig som arbetsgivare kommer då vara att jag får praktisera och utföra uppgifter för er inom arbetsområdet programmering och webdesign.<br>Har ni någon passande plats för mig på erat företag?<br/><br/></h3></div>'
    html += '<div class="text"><button id="back"onclick="backToLanguage()">Tillbaka</button></div>'

    $("#wrapper").append(html)
    
};

function eng(){

    $("#wrapper").empty()
    var html ="";
    html += '<div class="text"><h1>Hi!</h1></div>'
    html += '<div class="text"><h3>I am studying Webdevelopment in E-commerce at Medieinstitutet in Gothenburg and we are scheduled for 10 weeks of work based practice(LIA) in the automn of 2018<br><br>My requirement from you as an employerI can practice and execute tasks for you in the field of programming and webdesign.<br> Do you have any ?<br/><br/></h3></div>'
    html += '<div class="text"><button id="back" onclick="backToLanguage()">Back</button></div>'

    $("#wrapper").append(html)
};

function backToLanguage(){
    start();
};


