const preguntas = [
    {
        id:1,
        categoria: "personajes",
        titulo: "¿Cuál es el nombre real de Ladybug?",
        opcionA: "Alya",
        opcionB: "Marinette",
        opcionC: "Chloe",
        opcionD: "Sabine",
        correcta: "b"
    },

    {
        id:2,
        categoria: "personajes",
        titulo: "¿Quién es el superhéroe Chat Noir?",
        opcionA: "Luka",
        opcionB: "Nino",
        opcionC: "Adrien",
        opcionD: "Felix",
        correcta: "c"
    },

    {
        id:3,
        categoria: "personajes",
        titulo: "¿Quién es la mejor amiga de Marinette?",
        opcionA: "Rose",
        opcionB: "Juleka",
        opcionC: "Ayla",
        opcionD: "Sabine",
        correcta: "c"
    },

    {
        id:4,
        categoria: "personajes",
        titulo: "¿Qué nombre usa Alya cuando se convierte en superheroína?",
        opcionA: "Rena Rouge",
        opcionB: "Volpina",
        opcionC: "Lady Wi-Fi",
        opcionD: "Queen Bee",
        correcta: "a"
    },

    {
        id:5,
        categoria: "personajes",
        titulo: "¿Cómo se llama el kwami de Marinette?",
        opcionA: "Nooroo",
        opcionB: "Plagg",
        opcionC: "Tikki",
        opcionD: "Wayzz",
        correcta: "c"
    },

    {
        id:6,
        categoria: "kwamis",
        titulo: "¿Cómo se llama el kwami de Marinette?",
        opcionA: "Nooroo",
        opcionB: "Plagg",
        opcionC: "Tikki",
        opcionD: "Wayzz",
        correcta: "c"
    },

    {
        id:7,
        categoria: "kwamis",
        titulo: "¿Qué animal representa el Miraculous de Plagg?",
        opcionA: "Zorro",
        opcionB: "Mariposa",
        opcionC: "Tortuga",
        opcionD: "Gato",
        correcta: "d"
    },

    {
        id:8,
        categoria: "kwamis",
        titulo: "¿Cómo se llama el kwami del Miraculous del zorro?",
        opcionA: "Daizzi",
        opcionB: "Trixx",
        opcionC: "Barkk",
        opcionD: "Roaar",
        correcta: "b"
    },

    {
        id:9,
        categoria: "kwamis",
        titulo: "¿Qué animal representa el Miraculous de Wayzz?",
        opcionA: "Tortuga",
        opcionB: "Tigre",
        opcionC: "Serpiente",
        opcionD: "Conejo",
        correcta: "c"
    },

    {
        id:10,
        categoria: "frases",
        titulo: "¿Qué dice Marinette al transformarse?",
        opcionA: "¡Spots on!",
        opcionB: "¡Miraculous power!",
        opcionC: "¡Vamos, Tikki!",
        opcionD: "¡Manos a la obra!",
        correcta: "a"
    },

    {
        id:11,
        categoria: "frases",
        titulo: "¿Qué dice Adrien para transformarse en Chat Noir?",
        opcionA: "¡Garras listas!",
        opcionB: "¡Vamos, Plagg!",
        opcionC: "¡A luchar!",
        opcionD: "¡Claws out!",
        correcta: "d"
    },
    
    {
        id:12,
        categoria: "frases",
        titulo: "¿Qué dice Ladybug al purificar un akuma?",
        opcionA: "¡Akuma purificado!",
        opcionB: "¡Te atrapé!",
        opcionC: "¡Suerte, Ladybug!",
        opcionD: "¡Vuelve a volar, mariposa!",
        correcta: "a"
    },

    {
        id:13,
        categoria: "frases",
        titulo: "¿Qué dice Ladybug al finalizar cada misión?",
        opcionA: "¡Otro día salvado!",
        opcionB: "¡Misión cumplida!",
        opcionC: "¡Suerte, Ladybug!",
        opcionD: "¡París está a salvo!",
        correcta: "b"
    },

    {
        id:14,
        categoria: "akumatizados",
        titulo: "¿Qué provoca que una persona sea akumatizada?",
        opcionA: "Un deseo",
        opcionB: "Una emoción fuerte",
        opcionC: "Una mariposa mágica",
        opcionD: "Un objeto brillante",
        correcta: "b"
    },

    {
        id:15,
        categoria: "akumatizados",
        titulo: "¿Cómo se llama la versión akumatizada de Chloé?",
        opcionA: "Reflekta",
        opcionB: "Volpina",
        opcionC: "Reina Avispa",
        opcionD: "Lady Wi-Fi",
        correcta: "c"
    },

    {
        id:16,
        categoria: "akumatizados",
        titulo: "¿Qué supervillano fue creado a partir del enojo de Alya?",
        opcionA: "Stormy Weather",
        opcionB: "Queen Banana",
        opcionC: "Rena Rage",
        opcionD: "Lady Wi-Fi",
        correcta: "d"
    },

    {
        id:17,
        categoria: "akumatizados",
        titulo: "¿Cuál fue el primer villano akumatizado de la serie?",
        opcionA: "Stormy Weather",
        opcionB: "Stoneheart",
        opcionC: "Reflekta",
        opcionD: "Puppeteer",
        correcta: "b"
    },

    {
        id:18,
        categoria: "transformaciones",
        titulo: "¿Qué hace el poder Lucky Charm de Ladybug?",
        opcionA: "Da fuerza extra",
        opcionB: "Llama a otros héroes",
        opcionC: "Da un objeto para resolver el problema",
        opcionD: "Cura heridas",
        correcta: "c"
    },

    {
        id:19,
        categoria: "transformaciones",
        titulo: "¿Qué sucede cuando Ladybug y Chat Noir usan sus poderes máximos al mismo tiempo?",
        opcionA: "Se destransforman",
        opcionB: "Se fusionan",
        opcionC: "Se crea una explosión",
        opcionD: "El tiempo se congela",
        correcta: "a"
    },

    {
        id:20,
        categoria: "transformaciones",
        titulo: "¿Qué objeto permite a los personajes transformarse?",
        opcionA: "Un bastón mágico",
        opcionB: "Un anillo o joya",
        opcionC: "Una espada",
        opcionD: "Un celular",
        correcta: "b"
    },

    {
        id:21,
        categoria: "transformaciones",
        titulo: "¿Qué poder tiene Ladybug después de usar su yoyo para el Lucky Charm?",
        opcionA: "Vuela",
        opcionB: "Lanza rayos",
        opcionC: "Obtiene un objeto útil",
        opcionD: "Puede ver el futuro",
        correcta: "c"
    },

    {
        id:22,
        categoria: "villanos",
        titulo: "¿Quién es Hawk Moth en su identidad real?",
        opcionA: "Tom Dupain",
        opcionB: "Jagged Stone",
        opcionC: "Félix Graham",
        opcionD: "Gabriel Agreste",
        correcta: "d"
    },

    {
        id:23,
        categoria: "villanos",
        titulo: "¿Qué quiere conseguir Hawk Moth?",
        opcionA: "Convertirse en rey",
        opcionB: "El poder del gato y la mariquita",
        opcionC: "Destruir París",
        opcionD: "Hacerse rico",
        correcta: "b"
    },

    {
        id:24,
        categoria: "villanos",
        titulo: "¿Cuál es el nombre del supervillano que controla el tiempo?",
        opcionA: "Timebreaker",
        opcionB: "Chronogirl",
        opcionC: "Flashback",
        opcionD: "Tempus",
        correcta: "a"
    },

    {
        id:25,
        categoria: "villanos",
        titulo: "¿Qué akumatizada tiene el poder de hacer que todos se parezcan a ella?",
        opcionA: "Princess Fragrance",
        opcionB: "Antibug",
        opcionC: "Reflekta",
        opcionD: "Lady Wifi",
        correcta: "c"
    },
]

//tomamos los elementos html
const txtPuntaje = document.querySelector("#puntos");
const nombre = document.querySelector("#nombre");

nombre.innerHTML = localStorage.getItem("nombre");
let numPreguntaActual = 0;

//Recupero el puntaje en caso que ya este jugando
let puntajeTotal = 0;
if(!localStorage.getItem("puntaje-total")){
    puntajeTotal = 0;
    txtPuntaje.innerHTML = puntajeTotal
}else{
    puntajeTotal = parseInt(localStorage.getItem("puntaje-total"));
    txtPuntaje.innerHTML = puntajeTotal;
}

//cargar las preguntas del tema que eligió
const categoriaActual = localStorage.getItem("categoria-actual");
const preguntasCategoria = preguntas.filter(pregunta => pregunta.categoria === categoriaActual);

function cargarSiguientePregunta(num){
    //tomo los elementos donde se cargaran los datos de la pregunta
    const numPregunta = document.querySelector("#num-pregunta");
    const txtPregunta = document.querySelector("#txt-pregunta");
    const opcionA = document.querySelector("#a");
    const opcionB = document.querySelector("#b");
    const opcionC = document.querySelector("#c");
    const opcionD = document.querySelector("#d");

    numPregunta.innerHTML = num + 1;
    txtPregunta.innerHTML = preguntasCategoria[num].titulo;
    opcionA.innerHTML = preguntasCategoria[num].opcionA;
    opcionB.innerHTML = preguntasCategoria[num].opcionB;
    opcionC.innerHTML = preguntasCategoria[num].opcionC;
    opcionD.innerHTML = preguntasCategoria[num].opcionD;

    

    //Agrego un eventlistener a cada boton de respuesta
    const botonesRespuesta = document.querySelectorAll(".opcion");
    //Quito los eventListen y las clases
    botonesRespuesta.forEach(opcion=>{
        opcion.removeEventListener("click", (e)=>{});
        opcion.classList.remove("correcta");
        opcion.classList.remove("incorrecta");
        opcion.classList.remove("no-events");
    })

    botonesRespuesta.forEach(opcion=>{
        opcion.addEventListener("click", agregarEventListenerBoton);
    })

    txtPuntaje.classList.remove("efecto");
}

function agregarEventListenerBoton(e){
    console.log(e.currentTarget.id);
    console.log(numPreguntaActual);
    console.log(preguntas[numPreguntaActual].correcta);
    //Controlo si la respuesta es correcta
    if(e.currentTarget.id === preguntasCategoria[numPreguntaActual].correcta){
        e.currentTarget.classList.add("correcta");
        puntajeTotal = puntajeTotal + 100;
        txtPuntaje.innerHTML = puntajeTotal;
        localStorage.setItem("puntaje-total", puntajeTotal);
        txtPuntaje.classList.add("efecto");
    }else{
        e.currentTarget.classList.add("incorrecta");
        const correcta = document.querySelector("#"+preguntasCategoria[numPreguntaActual].correcta);
        correcta.classList.add("correcta");
    }
    //Agrego un eventlistener a cada boton de respuesta
    const botonesRespuesta = document.querySelectorAll(".opcion");
    //Quito los eventListen para que no pueda seguir haciendo clic
    console.log(botonesRespuesta)
    botonesRespuesta.forEach(opcion=>{
        opcion.classList.add("no-events");
    })
}

cargarSiguientePregunta(numPreguntaActual);

//tomo el boton siguiente
const btnSiguiente = document.querySelector("#siguiente")
btnSiguiente.addEventListener("click",()=>{
    numPreguntaActual++;
    if(numPreguntaActual<=4){
        cargarSiguientePregunta(numPreguntaActual);
    }
    else{
        const categoriasJugadasLS = JSON.parse(localStorage.getItem("categorias-jugadas"));
        
        console.log(categoriasJugadasLS.length);
        if(parseInt(categoriasJugadasLS.length) < 6){
            //alert(categoriasJugadasLS.length);
            location.href = "menu.html";
        }else{
            //lo mando a la pantalla final
            location.href = "final.html";
        }
        
    }
    
})