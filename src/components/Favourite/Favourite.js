import styles from './Favourite.module.scss';
import PageTitle from '../PageTitle/PageTitle';
import Card from '../Card/Card';
import { useSelector } from 'react-redux';
import { getFavouriteCards } from '../../redux/cardsRedux';

const Favourite = () => {
  const cards = useSelector(state => getFavouriteCards(state));

  return (
    <section>
      <PageTitle>Favourite</PageTitle>
      <div className={styles.favourites}>
        <div className={styles.column}>
          <ul className={styles.cards}>
            {cards.map(card => <Card id={card.id} title={card.title} isFavourite={card.isFavourite}/>)}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Favourite;