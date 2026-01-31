// perfil-data.js

// Configuración
const SCRIPT_URL = 'TU_URL_DE_GOOGLE_APPS_SCRIPT_AQUI'; // Reemplazar con tu URL
const SHEET_NAME = 'Miembros'; // Nombre de tu hoja de cálculo

// Función para obtener datos desde Google Sheets
async function obtenerDatosDesdeSheets() {
    try {
        const response = await fetch(`${SCRIPT_URL}?action=getData&sheet=${SHEET_NAME}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error al obtener datos:', error);
        return null;
    }
}

// Función para obtener un miembro específico
async function obtenerMiembroPorId(id) {
    try {
        const response = await fetch(`${SCRIPT_URL}?action=getMember&id=${id}&sheet=${SHEET_NAME}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error al obtener miembro:', error);
        return null;
    }
}

// Función para actualizar datos de un miembro
async function actualizarMiembro(id, datos) {
    try {
        const response = await fetch(SCRIPT_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                action: 'updateMember',
                id: id,
                datos: datos,
                sheet: SHEET_NAME
            })
        });
        const result = await response.json();
        return result.success;
    } catch (error) {
        console.error('Error al actualizar miembro:', error);
        return false;
    }
}