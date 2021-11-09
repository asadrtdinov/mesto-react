import React, { useContext } from "react";
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

export default function Card({ url, alt, title, likes, owner, onCardClick, onRemoveButtonClick }) {
  const currentUser = useContext(CurrentUserContext);

  const handleClick = () => {
    onCardClick(url, title);
  };

  const isOwn = owner._id === currentUser._id;
  const elementRemoveButtonClassName = `element__remove-button ${
    isOwn ? "element__remove-button_visible" : "element__remove-button_hidden"
  }`;

  const isLiked = likes.some((i) => i._id === currentUser._id);
  const elementLikeButtonClassName = `element__like-button ${
    isLiked && "element__like-button_active"
  }`;
  return (
    <article className="element">
      <button
        type="button"
        className={elementRemoveButtonClassName}
        onClick={onRemoveButtonClick}
      ></button>
      <img
        src={url}
        alt={alt}
        className="element__image"
        onClick={handleClick}
      />
      <div className="element__description">
        <h2 className="element__title">{title}</h2>
        <div className="element__like-container">
          <button type="button" className={elementLikeButtonClassName}></button>
          <p className="element__like-counter">{likes.length}</p>
        </div>
      </div>
    </article>
  );
}
