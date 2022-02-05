const startingMinutes = 10;
let time= startingMinutes * 60;
const progressBar= document.querySelector(".progress-inner");
const countdownEL=document.getElementById('countdown');
const id=setInterval(updatecountdown,1000);
function updatecountdown(){
    const minutes= Math.floor(time / 60);
    let seconds= time % 60;
    seconds=seconds < 10 ? '0'+ seconds:seconds;
    countdownEL.innerHTML= `${minutes} m: ${seconds} s`;    
    let progresswidth=time/600*100;
    if(time>0){
        progressBar.style.width=progresswidth+"%";
    }
    else{
        clearInterval(id);
        progressBar.style.width="0%";
    }
    time--;
    console.log(minutes + ""+  seconds);
}