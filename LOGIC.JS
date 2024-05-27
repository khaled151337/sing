let nav = document.querySelector("#nav");

window.addEventListener('scroll', function(){
    let test = document.documentElement.scrollTop;
    if(test > 110){
        nav.classList.add("active");
    } else{
        nav.classList.remove("active");
    }
});



//watch and mode

setInterval(function(){
    let date = new Date();

    let getHour = date.getHours();
    let getMin = date.getMinutes();
    let getSec = date.getSeconds();

    let watch_hour = document.querySelector(".hour");
    let watch_minute = document.querySelector(".minute");
    let watch_second = document.querySelector(".second");
    let watch_ampm = document.querySelector(".ampm");

    if( 12 < getHour){
        getHour -= 12;
        watch_ampm.innerHTML = "PM";
    } else{
        watch_ampm.innerHTML = "AM";
    };

    if(getHour < 10){
        watch_hour.innerHTML = "0" + getHour;
    } else{
        watch_hour.innerHTML = getHour;
    };

    if(getMin < 10){
        watch_minute.innerHTML = "0" + getMin;
    } else{
        watch_minute.innerHTML = getMin;
    };

    if(getSec < 10){
        watch_second.innerHTML = "0" + getSec;
    } else {
        watch_second.innerHTML = getSec;
    };
    
});



let bbody = document.querySelector("body");
let light = document.querySelector(".light");
let dark = document.querySelector(".dark");

let clock = document.querySelector(".clock");

light.addEventListener("click", function(){
    bbody.style.backgroundColor ='black';
    light.style.opacity = '0.4';
    dark.style.opacity = '1';
    light.style.width = '60px';
    dark.style.width = '50px';
    clock.style.border = "5px solid red";
   
});

dark.addEventListener("click", function(){
    bbody.style.backgroundColor ='white';
    light.style.opacity = '1';
    dark.style.opacity = '0.4';
    dark.style.width = '60px';
    light.style.width = '50px';
    clock.style.border = "none";
   
});


//watch and mode end