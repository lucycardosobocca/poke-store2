
document.getElementById("obtenerClima").addEventListener("click", () => {
  const API_KEY = "tu_api_8aa187c1ee5ce830dcf318b4a3a2a68a";  
  const lat = -34.6037;  
  const lon = -58.3816;

  const url = https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric;

  fetch(url)
      .then(response => {
          if (!response.ok) {
              throw new Error("Error en la respuesta de la API");
          }
          return response.json();
      })
      .then(data => {
          mostrarClima(data);
      })
      .catch(error => {
          console.error("Error al obtener los datos del clima:", error);
          document.getElementById("resultadoClima").innerHTML = `
              <p>Error al obtener los datos del clima. Por favor, inténtalo de nuevo.</p>
          `;
      });
});

const mostrarClima = (data) => {
  const { name, main, weather } = data;
  const temperatura = main.temp;
  const descripcion = weather[0].description;
  const humedad = main.humidity;

  document.getElementById("resultadoClima").innerHTML = `
      <h2>Clima en ${name}</h2>
      <p>Temperatura: ${temperatura}°C</p>
      <p>Descripción: ${descripcion}</p>
      <p>Humedad: ${humedad}%</p>
  `;
};