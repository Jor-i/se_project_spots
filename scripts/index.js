const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");

const editProfileBtn = document.querySelector(".profile__edit-btn");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileCloseBtn = editProfileModal.querySelector(".modal__close-btn");
const editProfileForm = editProfileModal.querySelector(".modal__form");
const editProfileNameInput = editProfileModal.querySelector("#profile-name-input");
const editProfileDescriptionInput = editProfileModal.querySelector("#profile-description-input");


const newPostBtn = document.querySelector(".profile__add-btn");
const newPostModal = document.querySelector("#new-post-modal");
const newPostCloseBtn = newPostModal.querySelector(".modal__close-btn");
const newPostForm = newPostModal.querySelector(".modal__form");
const newPostImageInput = newPostModal.querySelector("#image-link-input");
const newPostCaptionInput = newPostModal.querySelector("#image-caption-input");

function openModal(modal) {
  modal.classList.add("modal_is-opened");
}

function closeModal(modal) {
  modal.classList.remove("modal_is-opened");
}

editProfileBtn.addEventListener("click", function () {
  openModal(editProfileModal);
  editProfileNameInput.value = profileName.textContent;
  editProfileDescriptionInput.value = profileDescription.textContent;
});

editProfileCloseBtn.addEventListener("click", closeModal.bind(null, editProfileModal));

function handleProfileSubmit(evt) {
  evt.preventDefault();
  console.log("Form submitted");
  profileName.textContent = editProfileNameInput.value;
  profileDescription.textContent = editProfileDescriptionInput.value;
  editProfileModal.classList.remove("modal_is-opened");
};

editProfileForm.addEventListener("submit", handleProfileSubmit);

newPostBtn.addEventListener("click", openModal.bind(null, newPostModal));

newPostCloseBtn.addEventListener("click", closeModal.bind(null, newPostModal));

function handleNewPostSubmit(evt) {
  evt.preventDefault();
  console.log(newPostImageInput.value, newPostCaptionInput.value);
  newPostModal.classList.remove("modal_is-opened");
  evt.target.reset();
};

newPostForm.addEventListener("submit", handleNewPostSubmit);
