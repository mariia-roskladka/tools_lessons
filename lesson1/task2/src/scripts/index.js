import { renderUserData, renderRepos, clearList } from "./render.js";
import { showSpinner, hideSpinner } from "./spinner.js";
import { fetchUserData, fetchRepositories } from "./apiRequests.js";

const defaultUserAvatar = "https://avatars3.githubusercontent.com/u10001";
const defaultUser = {
    avatar_url: defaultUserAvatar,
    name: "",
    location: "",
};
const userNameInput = document.querySelector(".name-form__input");
const showUserBtnElem = document.querySelector(".name-form__btn");

renderUserData(defaultUser);

const onSearchUser = () => {
    showSpinner();
    const userName = userNameInput.value;
    fetchUserData(userName)
        .then((userData) => {
            renderUserData(userData);
            return userData.repos_url;
        })
        .then((url) => fetchRepositories(url))
        .then((reposList) => {
            renderRepos(reposList);
            hideSpinner();
        })
        .catch((err) => {
            alert(err.message);
        })
        .finally(() => {
            hideSpinner();
        });
};

showUserBtnElem.addEventListener("click", onSearchUser);