const contentDiv = document.getElementById('content');
export function tablaInsertar() {

    const contenidoTabla = `
                <h1>CREA TU PROPIA TABLA</h1>
                <div id="formularioTabla">
                <form id="tablaForm">
                    <div class="mb-3">
                        <label for="filas" class="form-label">Número de Filas</label>
                        <input type="number" class="form-control" id="filas" required>
                    </div>
                    <div class="mb-3">
                        <label for="columnas" class="form-label">Número de Columnas</label>
                        <input type="number" class="form-control" id="columnas" required>
                    </div>
                    <button type="submit" class="btn btn-primary mt-1">Crear Tabla</button>
                </form>
            </div>
            <table class="table" id="tabla"></table>
    `;

    contentDiv.innerHTML = contenidoTabla;

    // Agrega un evento de envío al formulario para crear la tabla
    const tablaForm = document.getElementById('tablaForm');
    tablaForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const filas = document.getElementById('filas').value;
        const columnas = document.getElementById('columnas').value;
        crearTabla(filas, columnas);
    });
}

export function lista() {
    const listaHtml = `
        <h1>Lista</h1>
        <div class="mb-3">
            <label for="elemento" class="form-label">Agrega un elemento a la lista:</label>
            <div class="input-group">
                <input type="text" id="elemento" class="form-control" placeholder="Escribe aquí el elemento">
                <button class="btn btn-primary" id="agregarElemento">Crear elemento</button>
            </div>
        </div>
        
        <h2>Elementos de la lista:</h2>
        <ul class="list-group" id="lista"></ul>
    `;

    contentDiv.innerHTML = listaHtml; // Actualiza el contentDiv con el HTML

    const agregarElemento = document.getElementById('agregarElemento');
    agregarElemento.addEventListener('click', () => {
        const inputElemento = document.getElementById('elemento');
        const elemento = inputElemento.value.trim(); // Obtiene el valor del input
        if (elemento) {
            const lista = document.getElementById('lista');
            const elementoLi = document.createElement('li');
            elementoLi.className = 'list-group-item';
            elementoLi.textContent = elemento;
            lista.appendChild(elementoLi);
            inputElemento.value = ''; // Limpia el campo después de agregar
        } else {
            alert('Por favor, ingrese un elemento antes de crear.');
        }
    });

}

export function imagen() {
    const imagenHtml = `
        <h1>Imagen</h1>
        <div class="mb-3">
            <label for="imagenUrl" class="form-label">Ingrese la URL de la imagen:</label>
            <div class="input-group">
                <input type="text" id="imagenUrl" class="form-control" placeholder="https://ejemplo.com/imagen.jpg">
                <button class="btn btn-primary" id="mostrarImagen">Mostrar imagen</button>
            </div>
        </div>
        <div id="imagenContainer" class="mt-3">
            <img id="imagenMostrada" src="https://img.freepik.com/vector-gratis/coleccion-flores-primavera_23-2148856484.jpg?t=st=1727888376~exp=1727891976~hmac=1774d75ad3f1efde9199e6ba69d71d209c44ac9dcbde77b0b566b8d072248ae5&w=1060" alt="Descripción de la imagen" class="img-fluid imagen-limitada">
        </div>
    `;
    contentDiv.innerHTML = imagenHtml;

    // Agregar evento al botón para mostrar la imagen
    const mostrarImagenBtn = document.getElementById('mostrarImagen');
    mostrarImagenBtn.addEventListener('click', () => {
        const imagenUrl = document.getElementById('imagenUrl').value;
        const imagenMostrada = document.getElementById('imagenMostrada');
        if (imagenUrl) {
            imagenMostrada.src = imagenUrl;
        }
    });
}

export function parrafo() {
    const parrafoHtml = `
    <h1 class="text-center">Escribe algo ...</h1>
    <div class="d-flex flex-column align-items-center">
        <div class="form-floating mb-3">
            <textarea class="form-control" placeholder="Comienza aquí" id="parrafoEscrito" ></textarea>
            <label for="parrafoEscrito">Escribe aquí tu texto:</label>
        </div>
        <button class="btn btn-primary" id="enviarParrafo">Enviar</button>       
    </div>

    <p id="parrafoMostrado" class="mt-3 font-weight-bold"></p>
`;

    contentDiv.innerHTML = parrafoHtml;

    const enviarTextoBtn = document.getElementById('enviarParrafo');
    enviarTextoBtn.addEventListener('click', () => {
        const textContenido = document.getElementById('parrafoEscrito').value;
        const textMostrar = document.getElementById('parrafoMostrado');

        // Muestra el texto en el párrafo
        textMostrar.textContent = textContenido;

        // Limpia el textarea
        document.getElementById('parrafoEscrito').value = "";

    });

}
