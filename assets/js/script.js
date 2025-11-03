// ===== PROBLEMA 1: Arreglo con secuencia doble =====
function crearArregloDoble(n) {
    if (n <= 0) return [];
    const arreglo = [1];
    for (let i = 1; i < n; i++) {
        arreglo[i] = arreglo[i - 1] * 2;
    }
    return arreglo;
}

document.getElementById('runProblem1').addEventListener('click', () => {
    const input = document.getElementById('sizeInput').value;
    const resultDiv = document.getElementById('result1');

    if (input === '') {
        resultDiv.textContent = 'Por favor, ingresa un número.';
        resultDiv.className = 'result error';
        return;
    }

    const n = Number(input);
    if (isNaN(n) || n < 0 || !Number.isInteger(n)) {
        resultDiv.textContent = 'Por favor ingresa un número entero válido mayor o igual a 0.';
        resultDiv.className = 'result error';
        return;
    }

    const resultado = crearArregloDoble(n);
    resultDiv.innerHTML = `<strong>Arreglo de tamaño ${n}:</strong><br>[${resultado.join(', ')}]`;
    resultDiv.className = 'result info';
});

// ===== PROBLEMA 2: Mayor número en arreglo de 10 elementos =====
function obtenerMayorNumero(arreglo) {
    if (arreglo.length !== 10) {
        throw new Error("El arreglo debe tener exactamente 10 elementos");
    }
    let mayor = arreglo[0];
    for (let i = 1; i < arreglo.length; i++) {
        if (arreglo[i] > mayor) {
            mayor = arreglo[i];
        }
    }
    return mayor;
}

document.getElementById('runProblem2').addEventListener('click', () => {
    const input = document.getElementById('array10Input').value.trim();
    const resultDiv = document.getElementById('result2');

    if (input === '') {
        resultDiv.textContent = 'Por favor, ingresa 10 números separados por espacios.';
        resultDiv.className = 'result error';
        return;
    }

    const numeros = input.split(/\s+/).map(num => parseFloat(num));
    if (numeros.length !== 10 || numeros.some(isNaN)) {
        resultDiv.textContent = 'Error: Debes ingresar exactamente 10 números válidos separados por espacios.';
        resultDiv.className = 'result error';
        return;
    }

    try {
        const mayor = obtenerMayorNumero(numeros);
        resultDiv.innerHTML = `
            <strong>Arreglo ingresado:</strong> [${numeros.join(', ')}]<br>
            <strong>Mayor número:</strong> ${mayor}
        `;
        resultDiv.className = 'result success';
    } catch (error) {
        resultDiv.textContent = `Error: ${error.message}`;
        resultDiv.className = 'result error';
    }
});

// ===== PROBLEMA 3: Día de la semana =====
function obtenerDiaSemana(numeroDia) {
    const diasSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
    if (numeroDia < 1 || numeroDia > 7) {
        throw new Error("El número debe estar entre 1 y 7");
    }
    return diasSemana[numeroDia - 1];
}

document.getElementById('runProblem3').addEventListener('click', () => {
    const input = document.getElementById('dayNumber').value;
    const resultDiv = document.getElementById('result3');

    if (input === '') {
        resultDiv.textContent = 'Por favor, ingresa un número del 1 al 7.';
        resultDiv.className = 'result error';
        return;
    }

    const num = Number(input);
    if (isNaN(num) || num < 1 || num > 7 || !Number.isInteger(num)) {
        resultDiv.textContent = 'Error: Ingresa un número entero entre 1 y 7.';
        resultDiv.className = 'result error';
        return;
    }

    try {
        const dia = obtenerDiaSemana(num);
        resultDiv.innerHTML = `<strong>Día ${num}:</strong> ${dia}`;
        resultDiv.className = 'result success';
    } catch (error) {
        resultDiv.textContent = `Error: ${error.message}`;
        resultDiv.className = 'result error';
    }
});

// ===== PROBLEMA 4: Buscar elemento en arreglo =====
function buscarElemento(arreglo, elemento) {
    if (arreglo.length > 100) {
        throw new Error("El arreglo no puede tener más de 100 elementos");
    }
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] === elemento) {
            return i;
        }
    }
    return -1;
}

function buscarTodasLasOcurrencias(arreglo, elemento) {
    if (arreglo.length > 100) {
        throw new Error("El arreglo no puede tener más de 100 elementos");
    }
    const indices = [];
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] === elemento) {
            indices.push(i);
        }
    }
    return indices;
}

document.getElementById('runProblem4').addEventListener('click', () => {
    const arrayInput = document.getElementById('arraySearch').value.trim();
    const elementInput = document.getElementById('elementToSearch').value;
    const resultDiv = document.getElementById('result4');

    if (arrayInput === '' || elementInput === '') {
        resultDiv.textContent = 'Por favor, completa ambos campos.';
        resultDiv.className = 'result error';
        return;
    }

    const arreglo = arrayInput.split(/\s+/).map(num => parseFloat(num)).filter(num => !isNaN(num));
    const elemento = parseFloat(elementInput);

    if (isNaN(elemento)) {
        resultDiv.textContent = 'El elemento a buscar debe ser un número válido.';
        resultDiv.className = 'result error';
        return;
    }

    if (arreglo.length === 0) {
        resultDiv.textContent = 'El arreglo debe contener al menos un número válido.';
        resultDiv.className = 'result error';
        return;
    }

    if (arreglo.length > 100) {
        resultDiv.textContent = 'El arreglo no puede tener más de 100 elementos.';
        resultDiv.className = 'result error';
        return;
    }

    try {
        const indice = buscarElemento(arreglo, elemento);
        if (indice !== -1) {
            let message = `Elemento ${elemento} encontrado en el índice: ${indice}`;
            const todasOcurrencias = buscarTodasLasOcurrencias(arreglo, elemento);
            if (todasOcurrencias.length > 1) {
                message += `<br>Todas las ocurrencias en índices: [${todasOcurrencias.join(', ')}]`;
            }
            resultDiv.innerHTML = message;
            resultDiv.className = 'result success';
        } else {
            resultDiv.innerHTML = `Elemento ${elemento} no encontrado en el arreglo.`;
            resultDiv.className = 'result info';
        }
    } catch (error) {
        resultDiv.textContent = `Error: ${error.message}`;
        resultDiv.className = 'result error';
    }
});

// ===== PROBLEMA 5: Ordenar arreglo =====
function ordenarArregloAscendente(arreglo) {
    const arregloOrdenado = [...arreglo];
    const n = arregloOrdenado.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arregloOrdenado[j] > arregloOrdenado[j + 1]) {
                const temp = arregloOrdenado[j];
                arregloOrdenado[j] = arregloOrdenado[j + 1];
                arregloOrdenado[j + 1] = temp;
            }
        }
    }
    return arregloOrdenado;
}

document.getElementById('runProblem5').addEventListener('click', () => {
    const input = document.getElementById('arrayToSort').value.trim();
    const resultDiv = document.getElementById('result5');

    if (input === '') {
        resultDiv.textContent = 'Por favor, ingresa al menos un número.';
        resultDiv.className = 'result error';
        return;
    }

    const arreglo = input.split(/\s+/).map(num => parseFloat(num)).filter(num => !isNaN(num));
    if (arreglo.length === 0) {
        resultDiv.textContent = 'Por favor ingresa al menos un número válido.';
        resultDiv.className = 'result error';
        return;
    }

    const arregloOrdenado = ordenarArregloAscendente(arreglo);
    resultDiv.innerHTML = `
        <strong>Arreglo original:</strong> [${arreglo.join(', ')}]<br>
        <strong>Arreglo ordenado:</strong> [${arregloOrdenado.join(', ')}]
    `;
    resultDiv.className = 'result info';
});