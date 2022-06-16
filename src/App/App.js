import Card from '../Card/Card';

import styles from './App.module.scss';

function App() {
  const products = [
    {
      id: 1,
      ingredient: 'с фуа-гра',
      portionsNum: 10,
      giftNum: 1,
      descriptionAfterBuy: 'Печень утки разварная с артишоками.',
      isAvailable: true,
    },
    {
      id: 2,
      ingredient: 'с рыбой',
      portionsNum: 40,
      giftNum: 2,
      descriptionAfterBuy: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
      isAvailable: true,
    },
    {
      id: 3,
      ingredient: 'с курой',
      portionsNum: 100,
      giftNum: 5,
      descriptionAfterBuy: 'Филе из цыплят с трюфелями в бульоне.',
      isAvailable: false,
    },
  ];

  return (
    <div className={styles.App}>
      <div className={styles.content}>
        <h1>Ты сегодня покормил кота?</h1>
        <div className={styles.wrapper}>
          {products.map((product) => (
            <Card {...product} key={product.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
