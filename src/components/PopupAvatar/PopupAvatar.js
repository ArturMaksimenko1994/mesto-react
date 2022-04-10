import React from 'react';
import PopupWithForm from "../PopupWithForm/PopupWithForm";

const PopupAvatar = ({isOpen, onClose}) => {

    return (
        <PopupWithForm isOpen={isOpen} onClose={onClose} name="Place" title="Новое место">
            <label className="popup__label" htmlFor="linkAvatar">
                <input id="popupInputAvatar" className="popup__input popup__input_avatar_src" name="popupLinkAvatar" type="url" placeholder="Ссылка на аватарку" required />
                <span className="popup__input-error popup__input-message popupInputAvatar-error"></span>
            </label>
        </PopupWithForm>
    );
}

export default PopupAvatar;