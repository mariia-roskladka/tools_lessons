import { renderTasks } from './renderer.js';
import { getTasksList, deleteTask } from './tasksGateWay.js';
import { setItem } from './storage.js';

export function onDeleteTask(event) {
    const isDeleteBtn = event.target.classList.contains('list__item-delete-btn');

    if (!isDeleteBtn) {
        return;
    }
    const nearestInputId = event.target.parentNode.firstElementChild.dataset.id;
    deleteTask(nearestInputId)
        .then(() => getTasksList())
        .then(newTasksList => {
            setItem(
                'tasksList',
                newTasksList,
            );
            renderTasks();
        });
}