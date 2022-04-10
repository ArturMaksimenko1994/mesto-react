import React from 'react';
import PopupWithForm from "./../PopupWithForm/PopupWithForm.js";


const PopupEdit = ({isOpen, onClose}) => {

    const handleSubmit = (e) => {
        e.preventDefault();

    }

    return (
        <PopupWithForm isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit} name="edit" title="Редактировать профиль" >
            <label className="popup__label" htmlFor="name">
                <input id="popupInputName"  className="popup__input popup__input_text_name"  name="popupTextName" type="text" placeholder="введите имя ..." minLength="2" maxLength="40" required />
                <span className="popup__input-error popup__input-message popupInputName-error"></span>
            </label>
            <label className="popup__label" htmlFor="post">
                <input id="popupInputPost"  className="popup__input popup__input_text_post" name="popupTextPost" type="text" placeholder="введите должность ..." minLength="2" maxLength="200" required />
                <span className="popup__input-error popup__input-message popupInputPost-error"></span>
            </label>
        </PopupWithForm>
    );
}

export default PopupEdit;
