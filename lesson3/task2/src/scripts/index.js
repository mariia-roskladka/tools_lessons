import { renderTasks } from './renderer.js';
import { onCreateTask, listElem } from './createTask.js';
import { updatedTasks } from './updateTasks.js';
import { getItem, setItem } from './storage.js';
import { tasks } from './tasks.js';
import { getTasksList } from './tasksGateWay.js';
import { onDeleteTask } from './deleteTasks.js';

document.addEventListener('DOMContentLoaded', () => {
    getTasksList().then(tasksList => {
        setItem('tasksList', tasksList);
        renderTasks();
    });
});

const crtBtnElem = document.querySelector('.create-task-btn');

crtBtnElem.addEventListener('click', onCreateTask);
listElem.addEventListener('click', updatedTasks);
listElem.addEventListener('click', onDeleteTask);

const onStorageChange = e => {
    if (e.key === 'tasksList') {
        renderTasks();
    }
    setItem('tasksList', getItem('tasksList'));
};

window.addEventListener('storage', onStorageChange);