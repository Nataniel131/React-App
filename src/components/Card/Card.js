import styles from './Card.module.scss';
import { clsx } from 'clsx';
import { useDispatch } from 'react-redux';
import { toggleCardFavourite } from '../../redux/cardsRedux';
import { removeCard } from '../../redux/cardsRedux';

const Card = props => {
  const dispatch = useDispatch();

  const handleClickFavorite = e => {
    e.preventDefault();
    dispatch(toggleCardFavourite(props.id));
  }

  const handleClickRemove = e => {
    e.preventDefault();
    dispatch(removeCard(props.id));
  }

  return (
    <li className={styles.card}>{props.title}
      <div>
        <button className={clsx(styles.button, props.isFavourite && styles.isFavourite)} onClick={handleClickFavorite}>
          <i className={'fa fa-star'}></i>
        </button>
        <button className={styles.button} onClick={handleClickRemove}>
          <i className={'fa fa-trash'}></i>
        </button>
      </div>
    </li>
  );
};

export default Card;