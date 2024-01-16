import styles from './Card.module.scss';
import { clsx } from 'clsx';
import { useDispatch } from 'react-redux';
import { toggleCardFavorite } from '../../redux/store';

const Card = props => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(toggleCardFavorite(props.id));
    console.log(props.id)
  }

  return <li className={styles.card}>{props.title}<button className={clsx(styles.button, props.isFavorite && styles.isFavorite)} onClick={handleSubmit}><i className={'fa fa-star'}></i></button></li>
};

export default Card;