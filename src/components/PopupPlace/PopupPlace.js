import React from 'react';
import PopupWithForm from "../PopupWithForm/PopupWithForm";


const PopupPlace =({isOpen, onClose}) => {
    return (
        <PopupWithForm isOpen={isOpen} onClose={onClose} name="Place" title="Новое место">
            <label className="popup__label" htmlFor="nameCard">
              <input id="popup__input-place" className="popup__input popup__input_link_name" name="popupNameCard" type="text"   placeholder="Название" minLength="2" maxLength="30" required />
              <span className="popup__input-place-error popup__input-message"></span>
            </label>
            <label className="popup__label" htmlFor="linkCard">
              <input id="popup__input-link" className="popup__input popup__input_link_src" name="popupLinkCard" type="url"  placeholder="Ссылка на картинку" required />
              <span className="popup__input-link-error popup__input-message"></span>
            </label>
        </PopupWithForm>
    );
}

export default PopupPlace;
