import React, { useState } from 'react';

import styles from './Card.module.scss';

const Card = ({ ingredient, portionsNum, giftNum, descriptionAfterBuy, isAvailable }) => {
  const [isSelected, setIsSelected] = useState(false);

  const onClickCardOrBuy = () => {
    setIsSelected(!isSelected);
  };

  const weight = portionsNum / 20;
  return (
    <div
      className={
        !isAvailable
          ? styles.Card + ' ' + styles.disabled
          : isSelected
          ? styles.Card + ' ' + styles.selected
          : styles.Card
      }
      onClick={onClickCardOrBuy}>
      <div className={styles.CardContent}>
        {!isAvailable && <div className={styles.overlay}></div>}
        <span>Сказочное заморское яство</span>
        <h2>
          <b>Нямушка</b> {ingredient}
        </h2>
        <p>
          <b>{portionsNum} порций</b>
          <br />
          {giftNum === 1
            ? 'мышь в подарок'
            : giftNum <= 4
            ? giftNum + ' ' + 'мыши в подарок'
            : giftNum > 4
            ? giftNum + ' ' + 'мышей в подарок' + ' ' + 'заказчик доволен'
            : null}
        </p>
        <div className={styles.weight}>
          <b>
            {weight % 1 !== 0 ? weight.toFixed(1) : weight}
            <br />
          </b>{' '}
          кг
        </div>
      </div>
      {!isAvailable ? (
        <p className={styles.link + ' ' + styles.notAvailable}>
          Печалька, {ingredient} отсутствует
        </p>
      ) : isSelected ? (
        <p className={styles.link}>{descriptionAfterBuy}</p>
      ) : (
        <p className={styles.link}>
          Чего сидишь? Порадуй котэ,
          <a href="#" onClick={onClickCardOrBuy}>
            {' '}
            купи.
          </a>
        </p>
      )}
    </div>
  );
};

export default Card;
