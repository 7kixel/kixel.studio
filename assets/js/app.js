
const h = React.createElement;
const videos = [
  ["Video para YouTube","Edición y montaje"],
  ["Contenido para redes","Formato vertical y dinámico"],
  ["Clip de podcast","Subtítulos y ritmo"],
  ["Pieza promocional","Contenido de marca"]
];
const services = [
  {n:"01",title:"Edición de video",items:["Montaje dinámico y ritmo narrativo","Subtítulos y recursos visuales","Música, efectos de sonido y sincronización"]},
  {n:"02",title:"Motion graphics",items:["Títulos y gráficos animados","Transiciones personalizadas","Elementos visuales con identidad"]},
  {n:"03",title:"Acabado visual y sonoro",items:["Corrección de color","Diseño y limpieza de sonido","Revisión y pulido de detalles"]},
  {n:"04",title:"Contenido para plataformas",items:["Videos para redes sociales y YouTube","Piezas promocionales y anuncios","Ediciones adaptadas a tus objetivos"]}
];
function App(){
  return h(React.Fragment,null,
    h("header",{className:"hero",id:"inicio"},
      h("img",{className:"hero-bg",src:"assets/images/banner.png",alt:"Fondo visual de Kixel Studio"}),
      h("div",{className:"hero-grain","aria-hidden":"true"}),
      h("nav",{className:"navbar"},h("div",{className:"container nav-inner"},
        h("a",{className:"brand",href:"#inicio"},h("span",{className:"brand-mark"},"K"),h("span",null,"KIXEL STUDIO")),
        h("div",{className:"nav-links"},h("a",{href:"#videos"},"Videos"),h("a",{href:"#servicios"},"Qué hago"),h("a",{href:"#contacto"},"Contacto"))
      )),
      h("div",{className:"hero-content"},
        h("div",{className:"eyebrow"},"Edición de video · Kixel Studio"),
        h("h1",null,"Cortes que ",h("span",{className:"shine"},"mantienen a la gente mirando.")),
        h("p",{className:"hero-copy"},"Transformo tus ideas en videos atractivos y profesionales, diseñados para captar la atención, mejorar la retención de audiencia y potenciar tus resultados."),
        h("div",{className:"actions"},
          h("a",{className:"btn btn-main",href:"#videos"},"Ver trabajos"),
          h("a",{className:"btn btn-ghost",href:"#contacto"},"Contactarme")
        )
      ),
      h("div",{className:"hero-scroll"},"DESLIZÁ PARA EXPLORAR")
    ),
    h("main",null,
      h("section",{className:"section",id:"sobre-mi"},h("div",{className:"container profile-grid"},
        h("div",null,
          h("div",{className:"eyebrow"},"Sobre mí"),
          h("h2",null,"Detrás de cada edición hay una idea."),
          h("p",{className:"section-intro"},"Soy Alexander Nuñez, el editor detrás de Kixel Studio. Trabajo en contenido para YouTube, redes sociales y publicidad, cuidando el montaje, el color, el sonido y los detalles que hacen que cada video funcione."),
          h("div",{className:"timeline","aria-label":"Representación de una línea de tiempo de edición"},
            h("div",{className:"timeline-top"},h("span",null,"SECUENCIA_01"),h("span",null,"24 FPS · 1920×1080")),
            h("div",{className:"tracks"},h("div",{className:"track"}),h("div",{className:"track"}),h("div",{className:"track audio"}))
          )
        ),
        h("div",{className:"profile-photo-wrap"},h("img",{className:"profile-photo",src:"assets/images/foto-perfil.jpg",alt:"Foto de perfil de Alexander Nuñez"}))
      )),
      h("section",{className:"section",id:"videos"},h("div",{className:"container"},
        h("div",{className:"section-head"},
          h("div",{className:"eyebrow"},"Portfolio"),
          h("h2",null,"Trabajos y ediciones"),
          h("p",{className:"section-intro"},"Una muestra de los formatos y estilos que puedo desarrollar. Próximamente, más proyectos.")
        ),
        h("div",{className:"video-grid"},videos.map((v,i)=>h("article",{className:"video-card",key:i},
          h("div",{className:"video-thumb","aria-hidden":"true"},h("span",{className:"play"})),
          h("div",{className:"video-info"},h("h3",null,v[0]),h("p",null,v[1]))
        )))
      )),
      h("section",{className:"section services-section",id:"servicios"},h("div",{className:"container"},
        h("div",{className:"section-head"},
          h("div",{className:"eyebrow"},"Qué hago"),
          h("h2",null,"Una edición a la altura de tus ideas."),
          h("p",{className:"section-intro"},"Desarrollo piezas audiovisuales pensadas para captar la atención, comunicar mejor y darle fuerza a tu contenido.")
        ),
        h("div",{className:"service-grid"},services.map((s,i)=>h("article",{className:"service-card",key:i},
          h("div",{className:"service-top"},h("span",{className:"service-code"},s.n),h("span",{className:"service-dot"},"KIXEL STUDIO")),
          h("h3",null,s.title),
          h("ul",{className:"service-list"},s.items.map((item,j)=>h("li",{key:j},h("span",{className:"check"},"＋"),item)))
        )))
      )),
      h("section",{className:"section",id:"informacion"},h("div",{className:"container info-callout"},
        h("div",{className:"eyebrow"},"Cada proyecto es diferente"),
        h("h2",null,"Contame qué tenés en mente."),
        h("p",null,"Cada edición se adapta a la idea, el estilo y los objetivos de tu proyecto. Escribime y conversemos sobre cómo llevarlo a cabo.")
      )),
      h("section",{className:"section",id:"contacto"},h("div",{className:"container contact-panel"},
        h("div",null,
          h("div",{className:"eyebrow"},"Empecemos tu proyecto"),
          h("h2",null,"¿Listo para llevar tu contenido al siguiente nivel?"),
          h("p",null,"Dale a tus ideas la edición que merecen. Unite a mi comunidad, escribime por email o encontrá todas mis redes sociales."),
          h("div",{className:"actions"},
            h("a",{className:"btn btn-main",href:"https://discord.gg/NPbGaGcFjR",target:"_blank",rel:"noreferrer"},"Unirme a Discord"),
            h("a",{className:"btn btn-ghost",href:"mailto:nunezbarucalexander@gmail.com"},"Enviar un email"),
            h("a",{className:"btn btn-ghost",href:"https://linktr.ee/kixelfn",target:"_blank",rel:"noreferrer"},"Mis redes sociales")
          ),
          h("div",{className:"contact-meta"},"nunezbarucalexander@gmail.com")
        )
      ))
    ),
    h("footer",null,h("div",{className:"container footer-inner"},
      h("span",null,"© 2026 Kixel Studio · Alexander Nuñez"),
      h("div",{className:"footer-links"},
        h("a",{href:"#inicio"},"Volver arriba"),
        h("a",{href:"https://discord.gg/NPbGaGcFjR",target:"_blank",rel:"noreferrer"},"Discord"),
        h("a",{href:"mailto:nunezbarucalexander@gmail.com"},"Email"),
        h("a",{href:"https://linktr.ee/kixelfn",target:"_blank",rel:"noreferrer"},"Redes")
      )
    ))
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(h(App));
