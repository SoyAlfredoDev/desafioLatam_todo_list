const btnAdd = document.querySelector('.btn-add');
const table = document.querySelector('.tbody');
const alertSmall = document.querySelector('.alert');
const total = document.querySelector('.total');
const realizadas = document.querySelector('.realizadas');
let id = 0;

function numberTask() {
    const rows = table.querySelectorAll('tr');
    const number = rows.length;
    total.innerHTML = number;
}

function completedTasks() {
    let completed = 0;
    const rows = table.querySelectorAll('tr');
    rows.forEach((row) => {
        const checkbox = row.querySelector('input[type="checkbox"]');
        if (checkbox && checkbox.checked) {
            completed++
        }
    })
    realizadas.innerHTML = completed
}

function deleteTask(idTask) {
    const task = document.querySelector(`.${idTask}`)
    task.remove()
}

btnAdd.addEventListener('click', () => {
    const taskInput = document.querySelector('.task');
    const task = taskInput.value.trim();

    if (task) {
        alertSmall.innerHTML = '';
        id++;
        const row = document.createElement('tr');
        row.innerHTML = `
            <tr id=${id}>
                <td class="text-center">${id}</td>
                <td>${task}</td>
                <td class="text-center"><input type="checkbox" class="form-check-input"></td>
                <td class="text-center">
                    <button class="btn btn-delete h1 text-danger m-0 p-0">
                        <i class="fa-solid fa-trash"></i>
                    </button>
                </td>
            </tr>`;

        const btnDelete = row.querySelector('.btn-delete');
        btnDelete.addEventListener('click', () => {
            row.remove();
            numberTask();
            completedTasks();
        });

        taskInput.value = '';
        table.appendChild(row);
        numberTask();
        completedTasks();
    } else {
        alertSmall.innerHTML = 'Este campo es requerido';
    }
});

table.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn-delete')) {
        const row = e.target.closest('tr'); // Encuentra la fila asociada
        row.remove(); // Elimina la fila
    }
});

