import { renderTasks } from './renderer.js';
import { listElem } from './createTask.js';
import { setItem, getItem } from './storage.js';
import { updateTask, getTasksList } from './tasksGateWay.js';

export const updatedTasks = event => {
    const isCheckbox = event.target.classList.contains('list__item-checkbox');

    if (!isCheckbox) {
        return;
    }
    const checkedElem = event.target;

    const tasksList = getItem('tasksList');
    const taskId = checkedElem.dataset.id;
    const { text } = tasksList.find(task => task.id === taskId);

    const updatedTask = {
        text,
        done: checkedElem.checked,
    };

    updateTask(taskId, updatedTask)
        .then(() => getTasksList())
        .then(newTasksList => {
            setItem(
                'tasksList',
                newTasksList,
            ); /**полученные данные с сервера записываем в LocalStorage */
            renderTasks();
        });
};