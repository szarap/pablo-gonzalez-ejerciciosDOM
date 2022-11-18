const d = document,
 n = navigator;

export default function webCam(id){
const $video= d.getElementById(id);

if(n.mediaDevices.getUserMedia){
      n.mediaDevices
      .getUserMedia({video: true, audio: false})
      .then((stream)=>{
            console.log(stream);
            $video.srcObject = stream;
            $video.play();
      })
      .catch((err)=> {
            $video.insertAdjacentHTML("beforebegin", `Sucecidio el siguiente error:<p><mark>${err}</mark></p>`);
            console.log(`Sucecidio el siguiente error: ${err}`)
      });
}

}