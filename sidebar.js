import { tablaInsertar, lista, imagen, parrafo } from "./contenido.js";

// Espera a que todo el contenido del documento se haya cargado completamente
document.addEventListener('DOMContentLoaded', () => {
    // Obtiene el elemento del sidebar por su ID
    const sidebar = document.getElementById('sidebar');
    // Obtiene el botón de toggle (mostrar/ocultar sidebar) por su ID
    const toggleButton = document.getElementById('toggleSidebar');
    // Obtiene todos los enlaces dentro del sidebar
    const sidebarLinks = document.querySelectorAll('.sidebar a');
    // Obtiene el div donde se mostrará el contenido dinámico por su ID
    const contentDiv = document.getElementById('content');

    // Agrega un evento click al botón de toggle
    toggleButton.addEventListener('click', () => {
        // Alterna la clase 'hidden' en el sidebar para mostrarlo/ocultarlo
        sidebar.classList.toggle('hidden');
    });

    function updateContent(content) {
        switch (content) {
            case 'tabla':
                contentDiv.innerHTML = '<h1>Tabla</h1><p>Crea tu propia tabla.</p>';

                break;
            case 'lista':
                contentDiv.innerHTML = '<h1>Lista</h1><p>Contenido relacionado con la lista.</p>';
                break;
            case 'imagen':
                contentDiv.innerHTML = '<h1>Imagen</h1><p>Contenido relacionado con la imagen.</p>';
                break;
            case 'otros':
                contentDiv.innerHTML = '<h1>Parrafo</h1><p>Contenido relacionado con parrafo.</p>';
                break;
            default:
                contentDiv.innerHTML = '<h1>Welcome to the Sidebar Menu</h1><p>Select an option from the sidebar.</p>';
        }
    }
});

window.tablaInsertar = tablaInsertar;