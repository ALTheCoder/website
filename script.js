let islog = true;
let ishov = false;
let lbtn = document.getElementById('login');
let drp = document.getElementById('dropdown');
let drpcls = document.getElementsByClassName("drop");
console.log("Script Running");
lbtn.addEventListener("mouseover", function() {
    lbtn.setAttribute("style", "border: solid white 2px;color: blue;");
    lbtn.innerHTML = '<svg id="ddarrow" style="rotate: 0deg;" version="1.0" xmlns="http://www.w3.org/2000/svg" width="9pt" height="9pt" viewBox="0 0 200.000000 200.000000"preserveAspectRatio="xMidYMid meet"><g id="gfill" transform="translate(0.000000,200.000000) scale(0.100000,-0.100000)" fill="blue" stroke="none"> <path d="M132 1470 c-29 -27 -37 -64 -23 -98 7 -16 202 -218 434 -450 393 -393 425 -422 457 -422 32 0 64 30 463 428 376 376 428 432 433 464 6 32 2 41 -24 68 -23 23 -39 30 -68 30 -37 0 -52 -13 -404 -365 -339 -338 -368 -365 -400 -365 -32 0 -61 27 -400 365 -359 357 -367 365 -406 365 -27 0 -48 -7 -62 -20z"/></g></svg> Account';
    ishov = true;
});

lbtn.addEventListener("mouseout", function() {
        lbtn.setAttribute("style", "border: solid white 2px;color: white;");
        lbtn.innerHTML = "Account";
        ishov = false;
        islog = true;
        drpcls[0].setAttribute("style", "display: none;");
        drpcls[1].setAttribute("style", "display: none;");
        drpcls[2].setAttribute("style", "display: none;");
        drp.setAttribute("style", "border:none;height:0px;");
});
lbtn.addEventListener("click", function() {
    if (ishov == true) {
        let ddarrw = document.getElementById('ddarrow');
        let gfill = document.getElementById('gfill')
        if (islog == true) {
            islog = false;
            ddarrw.setAttribute("style", "rotate: -180deg;");
            gfill.setAttribute("fill", "black");
            lbtn.setAttribute("style", "border: solid black 2px;color: black;") 
            drpcls[0].setAttribute("style", "display: grid;");
            drpcls[1].setAttribute("style", "display: grid;");
            drpcls[2].setAttribute("style", "display: grid;");
            drp.setAttribute("style", "border: solid black 2px;height:120px;");
        } else {
            islog = true;
            ddarrw.setAttribute("style", "rotate: 0deg;");
            gfill.setAttribute("fill", "blue");
            lbtn.setAttribute("style", "border: solid white 2px;color: blue;") 
            drpcls[0].setAttribute("style", "display: none;");
            drpcls[1].setAttribute("style", "display: none;");
            drpcls[2].setAttribute("style", "display: none;");
            drp.setAttribute("style", "border: solid white 2px;height:0px;top:25px;");
        }
    }
});
