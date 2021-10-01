import { renderTasks } from './list/renderer.js';
import { onCreateTask, listElem } from './list/createTask.js';
import { updatedTasks } from './list/updateTasks.js';
import { getItem, setItem } from './list/storage.js';
import { tasks } from './list/tasks.js';
import { getTasksList } from './list/tasksGateWay.js';
import { onDeleteTask } from './list/deleteTasks.js';
import './index.scss';

document.addEventListener('DOMContentLoaded', () => {
    getTasksList().then((tasksList) => {
        setItem('tasksList', tasksList);
        renderTasks();
    });
});

const crtBtnElem = document.querySelector('.create-task-btn');

crtBtnElem.addEventListener('click', onCreateTask);
listElem.addEventListener('click', updatedTasks);
listElem.addEventListener('click', onDeleteTask);

const onStorageChange = (e) => {
    if (e.key === 'tasksList') {
        renderTasks();
    }
    setItem('tasksList', getItem('tasksList'));
};

window.addEventListener('storage', onStorageChange);