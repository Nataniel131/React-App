import styles from './Favourite.module.scss';
import PageTitle from '../PageTitle/PageTitle';
import Card from '../Card/Card';
import { useSelector } from 'react-redux';
import { getFavotiteCards } from '../../redux/store';

const Favourite = () => {
  const cards = useSelector(state => getFavotiteCards(state));

  return (
    <section>
      <PageTitle>Favourite</PageTitle>
      <div className={styles.favorites}>
        <div className={styles.column}>
          <ul className={styles.cards}>
            {cards.map(card => <Card id={card.id} title={card.title} isFavorite={card.isFavorite}/>)}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Favourite;