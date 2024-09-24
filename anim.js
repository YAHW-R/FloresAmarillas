// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Floricienta", time: 1},
  { text: "Él la estaba esperando Con una flor amarilla", time: 16 },
  { text: "Ella lo estaba soñando Con la luz en su pupila", time: 23 },
  { text: "Y el amarillo del Sol Iluminaba la esquina", time: 31 },
  { text: "Lo sentía tan cercano", time: 38 },
  { text: "Lo sentía desde niña", time: 39 },
  { text: "Ella sabía que él sabía Que algún día pasaría", time: 45 },
  { text: "Que vendría a buscarla Con sus flores amarillas", time: 50 },
  { text: "No te apures, no detengas", time: 58 },
  { text: "El instante del encuentro", time: 59 },
  { text: "Está dicho que es un hecho", time: 60 },
  { text: "No la pierdas, no hay derecho", time: 61 },
  { text: "No te olvides que la vida Casi nunca está dormida", time: 62},
  { text: "En ese bar tan desierto Nos esperaba el encuentro", time: 92 },
  { text: "Ella llegó en limusina", time: 101 },
  { text: "Amarilla por supuesto", time: 103 },
  { text: "Él se acercó de repente La miro tan de frente", time: 109 },
  { text: "Toda una vida soñada Y no pudo decir nada", time: 117 },
  { text: "Ella sabía que él sabía Que algún día pasaría", time: 123 },
  { text: "Que vendría a buscarla Con sus flores amarillas", time: 128 },
  { text: "No te apures, no detengas", time: 136 },
  { text: "El instante del encuentro", time: 138 },
  { text: "Está dicho que es un hecho", time: 140 },
  { text: "No la pierdas, no hay derecho", time: 142 },
  { text: "No te olvides que la vida Casi nunca está dormida", time: 144 },
  { text: "Flores amarillas", time: 161 },
  { text: "Ella sabía que él sabía Que algún día pasaría", time: 169 },
  { text: "Que vendría a buscarla Con sus flores amarillas", time: 174 },
  { text: "No te apures, no detengas", time: 181 },
  { text: "El instante del encuentro", time: 183 },
  { text: "Está dicho que es un hecho", time: 185 },
  { text: "Está dicho que es un hecho", time: 187 },
  { text: "No te olvides que la vida Casi nunca está dormida", time: 189 },
  { text: "Ella sabía que él sabía", time: 197 },
  { text: "Él sabía, ella sabía", time: 199 },
  { text: "Que él sabía, ella sabía", time: 201 },
  { text: "Y se olvidaron de sus flores amarillas", time: 203 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);