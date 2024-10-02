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
        sidebar.classList.toggle('hidden');
    });

    // Agrega un evento click a cada enlace del sidebar
    sidebarLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const content = link.getAttribute('data-content');
            updateContent(content);
        });
    });

    // Función para actualizar el contenido
    function updateContent(content) {
        switch (content) {
            case 'tabla':
                tablaInsertar(); // Llama a la función tablaInsertar
                break;
            case 'lista':
                lista(); // Llama a la función lista pasando contentDiv
                break;
            case 'imagen':
                imagen();
                break;
            case 'parrafo':
                parrafo()
                break;
            default:
                contentDiv.innerHTML = '<h1>Hola mundo</h1>';
        }
    }
});

window.tablaInsertar = tablaInsertar;
window.lista = lista;
window.imagen = imagen;
window.parrafo = parrafo;
