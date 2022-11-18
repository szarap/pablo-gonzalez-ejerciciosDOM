const d = document,
 n = navigator;

export default function getGeoLocation(id){
      const $id=d.getElementById(id),
      options = {
            enableHighAccurancy: true,
            timeout: 5000,
            maximumAge: 0,
      };
      
      const success = (position)=>{
            let coords = position.coords;
            console.log(position);

            $id.innerHTML = `
            <p>tu posicion actual es:</p>
            <ul>
            <li>Latitud: <b>${coords.latitude}</b></li>
            <li>Longitud: <b>${coords.longitude}</b></li>
            <li>Precision: <b>${coords.accuracy}</b>metros</li>
            </ul>
            <a href= "http://www.google.com/maps/@${coords.latitude},${coords.longitude},10z" target= "_blacnk" rel="noopener">Ver en google Maps</a>`
      } 
      const error=(err)=>{
            $id.innerHTML=`<p><mark>Error${err.code}:${err.message}</mark></p>`
      }
      n.geolocation.getCurrentPosition(success,error,options)

}