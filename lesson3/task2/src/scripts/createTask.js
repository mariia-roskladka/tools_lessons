import { renderTasks } from './renderer.js';
import { getItem, setItem } from './storage.js';
import { createTask, getTasksList } from './tasksGateWay.js';

const inputElem = document.querySelector('.task-input');
export const listElem = document.querySelector('.list');

export const onCreateTask = () => {
    const text = inputElem.value;

    if (text === '') return;

    inputElem.value = '';

    listElem.innerHTML = '';

    const newTask = {
        text,
        done: false,
    };
    createTask(newTask)
        .then(() => getTasksList())
        .then(newTasksList => {
            setItem(
                'tasksList',
                newTasksList,
            );
            renderTasks();
        });
};