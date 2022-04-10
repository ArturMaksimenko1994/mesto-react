import React, { useState, useEffect } from 'react';
import Header from './Header/Header.js';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import PopupWithForm from './PopupWithForm/PopupWithForm.js';
import ImagePopup from './ImagePopup/ImagePopup.js';
import PopupAvatar from './PopupAvatar/PopupAvatar.js';
import PopupEdit from './PopupEdit/PopupEdit.js';
import PopupPlace from "./PopupPlace/PopupPlace.js";
import CurrentUserContext from './../contexts/CurrentUserContext.js'
import api from './../utils/api.js'

function App() {

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true)
  }

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true)
  }

  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true)
  }

  const [cards, setCards] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [isOpenPopotDelete, setIsOpenPopotDelete] = useState(false);


  const [selectedCard, setSelectedCard] = useState(null);
  const handleCardClick = (card) => {
    setSelectedCard(card);
  }

  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsOpenPopotDelete(false);
    setSelectedCard(null);
  }


  const [cardDelete,setCardDelete] = useState("")
  const handleCardDelete = (card) => {
    setIsOpenPopotDelete(true)
    setCardDelete(card)
  }

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        closeAllPopups();
      }
    }
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [])


  useEffect(() => {
    api.getUserInfo()
      .then((res) => {
        setCurrentUser({ ...res })
      })
      .catch((err) => {
        console.log(`Ошибка при получении данных профиля ${err}`)
      })
  }, []);


  useEffect(() => {
    api.getCards()
      .then(res => setCards(res))
      .catch((err) => {
        console.log(`Ошибка при получении карточек с сервера ${err}`)
      })
  }, []);

  return (

    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onEditAvatar={handleEditAvatarClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
          onCardDelete={handleCardDelete} 
          cards={cards} />
        <Footer />
        <PopupEdit isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} />
        <PopupAvatar isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} />
        <PopupPlace isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} />
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
        <PopupWithForm isOpen={isOpenPopotDelete} onClose={closeAllPopups} name="delete" title="Вы уверены?" buttonText="Да"> {/*подтверждение удаления*/}</PopupWithForm>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
