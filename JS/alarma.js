const d = document; 

export function digitalClock(clock, btnPlay, btnStop){
      let clockTempo; 
      d.addEventListener("click", (e) =>{
            if(e.target.matches(btnPlay)){
                  clockTempo = setInterval(()=> {
                        let clockHour = new Date().toLocaleTimeString();
                        d.querySelector(clock).innerHTML = `<h3>${clockHour}</h3>`;
                  }, 1000);
                  e.target.disabled = true;
            }
            if(e.target.matches(btnStop)){
                  clearInterval(clockTempo);
                  d.querySelector(clock).innerHTML = null;
                  d.querySelector(btnPlay).disabled = false;
            }           
      });
}

export function alarma(alarm, btnPlayAlarm, btnStopAlarm){
      let alarma = d.querySelector(alarm);
      d.addEventListener("click", (e)=>{
            if(e.target.matches(btnPlayAlarm)){
                  alarma.autoplay = true;
                  alarma.load(); 
            }
            if(e.target.matches(btnStopAlarm)){
                  alarma.autoplay = false;
                  alarma.load(); 
            }
      })

}