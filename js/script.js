let clock=document.getElementById("clock") ;
function time(){
    let date=new Date()
    let hours=date.getHours(); 
    let minutes=date.getMinutes();
    let seconds=date.getSeconds() ;
    let flag="AM" ;
    if(hours==0){
        hours=12 ;
    }
    if(hours>12){
        hours-=12
        flag="PM" ;
    }
    if(hours<10){
        hours="0"+hours ;
    }
    if(seconds<10){
        seconds="0"+seconds ;
    }
    if(minutes<10){
        minutes="0"+minutes ;
    }
    clock.innerText=`${hours}:${minutes}:${seconds} ${flag}` ;
    
setTimeout(function(){
    time() ;
},1000) ;

}
time() ;