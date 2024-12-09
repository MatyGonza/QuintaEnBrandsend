const calendar = document.getElementById('calendar');
const bookButton = document.getElementById('bookButton');

const daysOfWeek = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
const monthNames = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

// Simulamos días disponibles (puedes modificar esto según tus necesidades)
const availableDays = [3, 4, 5, 10, 11, 12, 17, 18, 19, 24, 25, 26];

function generateCalendar() {
    const today = new Date();
    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();

    const firstDay = new Date(currentYear, currentMonth, 1);
    const lastDay = new Date(currentYear, currentMonth + 1, 0);

    // Limpiar el calendario antes de generar uno nuevo
    calendar.innerHTML = '';

    // Agregar encabezados de días de la semana
    daysOfWeek.forEach(day => {
        const dayHeader = document.createElement('div');
        dayHeader.className = 'calendar-header';
        dayHeader.textContent = day;
        calendar.appendChild(dayHeader);
    });

    // Agregar días vacíos antes del primer día del mes
    for (let i = 0; i < firstDay.getDay(); i++) {
        const emptyDay = document.createElement('div');
        emptyDay.className = 'calendar-day';
        calendar.appendChild(emptyDay);
    }

    // Agregar días del mes
    for (let day = 1; day <= lastDay.getDate(); day++) {
        const dayElement = document.createElement('div');
        dayElement.className = 'calendar-day';
        dayElement.textContent = day;

        if (availableDays.includes(day)) {
            dayElement.classList.add('available');
            dayElement.addEventListener('click', () => selectDay(day, currentMonth, currentYear));
        } else {
            dayElement.classList.add('unavailable');
        }

        calendar.appendChild(dayElement);
    }
}

function selectDay(day, month, year) {
    const selectedDate = new Date(year, month, day);
    document.querySelectorAll('.calendar-day').forEach(el => el.classList.remove('selected'));
    event.target.classList.add('selected');
    bookButton.disabled = false;
    bookButton.textContent = `Reservar para ${day} de ${monthNames[month]} de ${year}`;
    
    // Llamar a la función showWeatherInfo del archivo weather.js
    if (typeof showWeatherInfo === 'function') {
        showWeatherInfo(selectedDate);
    }
}

// Generar el calendario al cargar la página
generateCalendar();

// Exportar funciones para uso en otros archivos si es necesario
window.generateCalendar = generateCalendar;
window.selectDay = selectDay;