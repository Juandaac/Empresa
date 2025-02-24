// Listas para almacenar datos de jugadores y equipos
const employees = []; // Lista de jugadores
const companies = []; // Lista de equipos

// Lista de posiciones en el fútbol
const charge = [
    "Gerente Gerencial", 
    "Product Owner", 
    "Scrum Master", 
    "Technical Lead", 
    "Desarrollador Senior", 
    "Desarrollador Junior", 
    "DevOp", 
    "Requerimientos", 
    "Documentación"
];

// Carga las posiciones en el formulario
function loadCharge() {
    const positionSelect = document.getElementById("playerPosition"); // Obtiene el elemento select para las posiciones
    positionSelect.innerHTML = `<option value="">Seleccione su cargo</option>`; // Agrega la opción predeterminada
    charge.forEach(position => {
        const option = document.createElement("option"); // Crea un elemento de opción
        option.value = position; // Establece el valor de la opción
        option.textContent = position; // Establece el texto visible de la opción
        positionSelect.appendChild(option); // Agrega la opción al selector
    });
}

// Carga los equipos en el selector del formulario de jugadores
function updateCompaniesSelect() {
    const teamSelect = document.getElementById("playerTeam"); // Obtiene el elemento select para los equipos
    teamSelect.innerHTML = `<option value="">Seleccione la empresa</option>`; // Agrega la opción predeterminada
    companies.forEach(team => {
        const option = document.createElement("option"); // Crea un elemento de opción
        option.value = team.name; // Establece el valor de la opción como el nombre del equipo
        option.textContent = team.name; // Establece el texto visible como el nombre del equipo
        teamSelect.appendChild(option); // Agrega la opción al selector
    });
}

// Maneja el formulario para agregar equipos
const teamForm = document.getElementById("addTeamForm"); // Obtiene el formulario para agregar equipos
teamForm.addEventListener("submit", e => {
    e.preventDefault(); // Evita el envío predeterminado del formulario
    const name = document.getElementById("teamName").value; // Obtiene el nombre del equipo
    const logoFile = document.getElementById("teamLogo").files[0]; // Obtiene el archivo del logo
    const logo = logoFile ? URL.createObjectURL(logoFile) : "assets/images/default-team.jpg"; // Genera la URL del logo o usa una imagen predeterminada

    if (!name) {
        alert("Por favor, ingrese el nombre del equipo."); // Muestra un mensaje si el nombre está vacío
        return; // Finaliza la ejecución
    }

    const team = { name, logo }; // Crea un objeto equipo
    companies.push(team); // Agrega el equipo a la lista de equipos
    updateCompaniesCard(); // Actualiza las tarjetas de equipos
    updateCompaniesSelect(); // Actualiza el selector de equipos
    teamForm.reset(); // Resetea el formulario
});

// Actualiza la visualización de los equipos
function updateCompaniesCard() {
    const teamContainer = document.getElementById("teamCardsContainer"); // Obtiene el contenedor de tarjetas de equipos
    teamContainer.innerHTML = ""; // Limpia el contenido existente
    companies.forEach(team => {
        const card = `<div class="team-card">
            <img src="${team.logo}" alt="${team.name}" style="width: 100px; height: 100px; border-radius: 12px;"> <!-- Imagen del logo del equipo -->
            <h3>${team.name}</h3> <!-- Nombre del equipo -->
        </div>`;
        teamContainer.innerHTML += card; // Agrega la tarjeta al contenedor
    });
}

// Maneja el formulario para agregar jugadores
const playerForm = document.getElementById("addPlayerForm"); // Obtiene el formulario para agregar jugadores
playerForm.addEventListener("submit", e => {
    e.preventDefault(); // Evita el envío predeterminado del formulario
    const name = document.getElementById("playerName").value; // Obtiene el nombre del jugador
    const age = document.getElementById("playerAge").value; // Obtiene la edad del jugador
    const position = document.getElementById("playerPosition").value; // Obtiene la posición seleccionada
    const team = document.getElementById("playerTeam").value; // Obtiene el equipo seleccionado
    const photoFile = document.getElementById("playerPhoto").files[0]; // Obtiene el archivo de la foto
    const photo = photoFile ? URL.createObjectURL(photoFile) : "assets/images/default-player.jpg"; // Genera la URL de la foto o usa una imagen predeterminada

    if (!name || !age || !position || !team) {
        alert("Por favor, complete todos los campos obligatorios."); // Muestra un mensaje si falta algún campo obligatorio
        return; // Finaliza la ejecución
    }

    const player = { name, age, position, team, photo }; // Crea un objeto jugador
    employees.push(player); // Agrega el jugador a la lista de jugadores
    updateEmployeesTable(); // Actualiza la tabla de jugadores
    playerForm.reset(); // Resetea el formulario
});

// Actualiza la tabla de jugadores
function updateEmployeesTable() {
    const playerTable = document.getElementById("playerTableBody"); // Obtiene el cuerpo de la tabla de jugadores
    playerTable.innerHTML = ""; // Limpia el contenido existente
    employees.forEach(player => {
        const row = `<tr>
            <td><img src="${player.photo}" alt="${player.name}" style="width: 50px; height: 50px; border-radius: 12px;"></td> <!-- Foto del jugador -->
            <td>${player.name}</td> <!-- Nombre del jugador -->
            <td>${player.age}</td> <!-- Edad del jugador -->
            <td>${player.position}</td> <!-- Posición del jugador -->
            <td>${player.team}</td> <!-- Equipo del jugador -->
        </tr>`;
        playerTable.innerHTML += row; // Agrega la fila a la tabla
    });
}

// Inicializa el sistema al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    loadCharge(); // Carga las posiciones en el selector
    updateCompaniesSelect(); // Carga los equipos en el selector
});
