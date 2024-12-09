const weatherInfo = document.getElementById('weatherInfo');

function showWeatherInfo(date) {
    // Simulamos información del tiempo (en una aplicación real, esto vendría de una API)
    const temperature = Math.floor(Math.random() * 15) + 15; // Temperatura entre 15 y 30 grados
    const conditions = ['soleado', 'nublado', 'lluvioso'][Math.floor(Math.random() * 3)];
    
    weatherInfo.innerHTML = `
        <h3>Tiempo para ${date.getDate()} de ${monthNames[date.getMonth()]} de ${date.getFullYear()}</h3>
        <p>Temperatura: ${temperature}°C</p>
        <p>Condiciones: ${conditions}</p>
    `;
}