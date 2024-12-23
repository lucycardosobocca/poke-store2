
document.getElementById("obtenerClima").addEventListener("click", () => {

    const API_KEY = "tu_api_8aa187c1ee5ce830dcf318b4a3a2a68a";  
const lat = -34.6037;  
const lon = -58.3816;  


const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data); 
    const temp = data.current.temp;
    const description = data.current.weather[0].description;
    console.log(`La temperatura actual en Buenos Aires es ${temp}°C y el clima es ${description}`);
  })
  .catch(error => {
    console.error('Error al obtener los datos del clima:', error);
  });

});


const mostrarClima = (data) => {

    const { name, main, weather } = data; 
    const temperatura = main.temp;
    const descripcion = weather[0].description;
    const humedad = main.humidity;
    
    document.getElementById("resultadoClima").innerHTML = `
        <h2>Clima en ${name}</h2> <!-- Muestra el nombre de la ciudad -->
        <p>Temperatura: ${temperatura}°C</p> <!-- Muestra la temperatura -->
        <p>Descripción: ${descripcion}</p> <!-- Muestra la descripción del clima -->
        <p>Humedad: ${humedad}%</p> <!-- Muestra la humedad -->
    `;
};