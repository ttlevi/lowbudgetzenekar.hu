//mobilos dropdown/hamburger menü - W3SCHOOL alapon saját fejlesztés
// forrás: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_mobile_navbar
function dropdown() 
{
    var latszik;
    var i;
    var x = document.getElementsByClassName("hide");
    for (i = 0; i < x.length; i++) {
        if(x[i].style.display === "block")
        {x[i].style.display = "none"}
        else
        {x[i].style.display = "block"}
    }

    var y = document.getElementsByClassName("close")
    for (i = 0; i < y.length; i++) {
        if(y[i].style.display === "block")
        {y[i].style.display = "none"}
        else
        {y[i].style.display = "block"}
    }
}

//oldal tetején maradó menü - W3SCHOOL alapon saját fejlesztés
// forrás: https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_onscroll2
window.onscroll = function() {sticktop()};
function sticktop()
{
    if (document.documentElement.scrollTop > window.innerHeight/6.3) //itt állítható a ragadás relatív helye mobilos nézetben...
    {
        document.getElementById("sticky_mob").className = "sticky nav_mob";
        document.getElementById("stickmargin_listen").className = "marginplus listen";
    } 
    else 
    {
        document.getElementById("sticky_mob").className = "nav_mob";
        document.getElementById("stickmargin_listen").className = "listen";
    }
    
    if (document.documentElement.scrollTop > window.innerHeight/5.5 && window.innerWidth >= 600) //...illetve tabletes és a fölött
    {
        document.getElementById("sticky_desk").className = "sticky nav_desk";
        document.getElementById("stickmargin_main").className = "marginplus main_container";
    }
    else 
    {
        document.getElementById("sticky_desk").className = "nav_desk";
        document.getElementById("stickmargin_main").className = "main_container";
    }
}

//képgaléria grid - W3SCHOOLS alapon saját fejlesztés (előtérbe kerül, hátteret sötétít, reszponzív)
// forrás: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_tab_img_gallery
function gallery(imgs) {
    var expandImg = document.getElementById("expandedImg");
    var imgText = document.getElementById("imgtext");
    expandImg.src = imgs.src;
    imgText.innerHTML = imgs.alt;
    expandImg.parentElement.style.display = "block";
}

//mouse hoverre az adott kép kerül a kiemelt helyre - saját fejlesztés
function kepkiemel1(imgs) {
    var kiemelni = document.getElementById("kiemeltkep1")
    kiemelni.src = imgs.src;
}

function kepkiemel2(imgs) {
    var kiemelni = document.getElementById("kiemeltkep2")
    kiemelni.src = imgs.src;
}

function kepkiemel3(imgs) {
    var kiemelni = document.getElementById("kiemeltkep3")
    kiemelni.src = imgs.src;
}

function kepkiemel4(imgs) {
    var kiemelni = document.getElementById("kiemeltkep4")
    kiemelni.src = imgs.src;
}

function kepkiemel5(imgs) {
    var kiemelni = document.getElementById("kiemeltkep5")
    kiemelni.src = imgs.src;
}

//űrlap értékelések összeadása - saját fejlesztés
function osszead(){
    var ossz=0;
    var ertektomb=document.getElementsByClassName("ertekeles");
    var ki=document.getElementById("osszeg");

    for (i=0; i< ertektomb.length; i++){
        ossz+=parseInt(ertektomb[i].value);
    };  
    ki.innerHTML=String(ossz);
}

