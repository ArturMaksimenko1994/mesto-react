import React from 'react';


const Card = ({ card, onCardClick, onCardDelete }) => {

    const handleClick = () => {
        onCardClick(card);
    }

    const handleDeleteClick = () => {
        onCardDelete(card)
    }

    return (
        <li className="element__item">
            <button onClick={handleClick} className="element__img-container" type="button" aria-label="Открыть изображение">
                <img className="element__img" src={card.link} alt={card.name} />
            </button>
            <button onClick={handleDeleteClick} className="element__delete" src={card.link} alt={card.name}></button>
            <div className="element__description">
                <h2 className="element__title" >{card.name}</h2>
                <div className="element__action">
                    <button type="button"  className="element__like" aria-label="Нравится"></button>
                    <span className="element__number">0</span>
                </div>
            </div>
        </li>
    );
}

export default Card;

