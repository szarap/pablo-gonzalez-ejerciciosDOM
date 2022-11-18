const d = document;
let x=0,
y=0;

export function moveBall(e, contenedor, pelotita){
      const $pelotita = d.querySelector(pelotita),
      $contenedor = d.querySelector(contenedor);
      const limitsPelotita = $pelotita.getBoundingClientRect(),
      limitsContenedor = $contenedor.getBoundingClientRect();
      
      switch(e.keyCode){
            case 37:
            e.preventDefault();
            if(limitsPelotita.left > limitsContenedor.left){
                  e.preventDefault();
                  x--
            };
            break
            case 38:            
            if(limitsPelotita.top > limitsContenedor.top){
                  e.preventDefault();
                  y--
            }; 
            break
            case 39:
                  if(limitsPelotita.right < limitsContenedor.right) {
                        e.preventDefault();
                        x++};
            break
            case 40:
                  if(limitsPelotita.bottom < limitsContenedor.bottom) {
                        e.preventDefault();
                        y++};
            break
            default:
            break
      }
      $pelotita.style.transform = `translate(${x*10}px,${y*10}px)`;
}

export function shortcuts(e) {
      if (e.key === "a" && e.altKey) {
            alert("haz enviando un alerta");
      }
      if (e.key === "c" && e.altKey) {
            alert("haz enviando un confirm");
      }
      if (e.key === "p" && e.altKey) {
            alert("haz enviando un prompt");
      }
}


