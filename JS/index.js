import hamburgerMenu from "./menuHamburguesa.js";
import {digitalClock, alarma} from "./alarma.js";
import {moveBall, shortcuts } from "./mover_key.js";
import countdown from "./cuenta_regresiva.js";
import scrollTopButton from "./boton_ir_al_inicio.js";
import darkMode from "./tema_oscuro.js";
import resposive_design from "./responsive_design.js";
import responsiveTester from "./responsive_tester.js";
import userDeviceInfo from "./deteccion_dispositivo.js";
import networkStatus from "./deteccion_red.js";
import webCam from "./deteccion_webcam.js";
import getGeoLocation from "./geolocalizacion.js";
import searchFilters from "./filtro_busquedas.js";
import draw from "./sorteo.js";
import slider from "./carrusel.js";
import scrollSpy from "./scroll_espia.js";
import smartVideo from "./video_inteligente.js";
import contactFormValidations from "./validaciones_formularios.js";
import speechReader from "./narrador.js";

const d = document;
d.addEventListener("DOMContentLoaded",(e)=>{
      hamburgerMenu(".panel-btn", ".panel", ".menu a");
      digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
      alarma("#ringTone", "#activar-alarma", "#desactivar-alarma")
      countdown (
      "countdown",
      "March 13, 2022 22:00:00",
      "Llego la Hora de armar la valija!")
      scrollTopButton(".panel-btn-flecha")
      resposive_design(
            "youtube",
            "(min-width: 1024px)",
            `<a href= "https://www.youtube.com/watch?v=6IwUl-4pAzc&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA" target="blank"> Ver Video</a>`,
            `<iframe width="560" height="315" src="https://www.youtube.com/embed/6IwUl-4pAzc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`  
      );
      resposive_design(
            "gmaps",
            "(min-width: 1024px)",
            `<a href= "https://goo.gl/maps/Ts2cEzRR9KVrsxCBA" target="blank"> Ver Mapa</a>`,
            `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19923.165001107525!2d26.00625084579796!3d51.37740648272653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47261117c3539b63%3A0x6de72ebb926a5626!2sLyubakhy%2C%20Rovno%2C%20Ucrania%2C%2034362!5e0!3m2!1ses!2sie!4v1643744495689!5m2!1ses!2sie" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`
            
      );
      responsiveTester("responsive-tester");
      userDeviceInfo("user-device");
      webCam("webcam");
      getGeoLocation("geolocation");
      searchFilters(".card-filter", ".card");
      draw("#winner-btn",".player");
      slider(); 
      scrollSpy();  
      smartVideo();
      contactFormValidations();    
});

d.addEventListener("keydown", (e) =>{
      shortcuts(e);
      moveBall(e,"#contenedor", "#pelotita");
})

darkMode(".dark-theme-btn", "dark-mode")
networkStatus()
speechReader();