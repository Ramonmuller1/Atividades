document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');

    loadTasks();

    addTaskButton.addEventListener('click', function() {
        const taskText = taskInput.value.trim();
        if (taskText === '') {
            return;
        }

        addTask(taskText);
        taskInput.value = '';
    });

    function addTask(taskText) {
        const li = document.createElement('li');

        li.innerHTML = `
            <span class="task-text">${taskText}</span>
            <button class="complete-btn">Concluir</button>
            <button class="delete-btn">Excluir</button>
        `;

        li.querySelector('.complete-btn').addEventListener('click', function() {
            const taskTextSpan = li.querySelector('.task-text');
            taskTextSpan.classList.toggle('completed');
            saveTasks();
        });

        li.querySelector('.delete-btn').addEventListener('click', function() {
            li.remove();
            saveTasks();
        });

        taskList.appendChild(li);
        saveTasks();
    }

    function saveTasks() {
        const tasks = [];
        taskList.querySelectorAll('li').forEach(li => {
            const taskText = li.querySelector('.task-text').textContent;
            const isCompleted = li.querySelector('.task-text').classList.contains('completed');
            tasks.push({ text: taskText, completed: isCompleted });
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    function loadTasks() {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.forEach(task => addTask(task.text, task.completed));
    }

    function addTask(taskText, completed = false) {
        const li = document.createElement('li');
        const taskClass = completed ? 'completed' : '';

        li.innerHTML = `
            <span class="task-text ${taskClass}">${taskText}</span>
            <button class="complete-btn">Concluir</button>
            <button class="delete-btn">Excluir</button>
        `;

        li.querySelector('.complete-btn').addEventListener('click', function() {
            const taskTextSpan = li.querySelector('.task-text');
            taskTextSpan.classList.toggle('completed');
            saveTasks();
        });

        li.querySelector('.delete-btn').addEventListener('click', function() {
            li.remove();
            saveTasks();
        });

        taskList.appendChild(li);
    }
});
