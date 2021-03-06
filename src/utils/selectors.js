const selectors = {
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__submit",
  inactiveButtonClass: "popup__submit-button_inactive",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__input-error_active",
};

const editProfileFormSelector = "form[name=edit-profile]";
const addPlaceFormSelector = "form[name=add-place]";
const editAvatarFormSelector = "form[name=edit-avatar]";

export {
  selectors,
  editProfileFormSelector,
  editAvatarFormSelector,
  addPlaceFormSelector,
};
