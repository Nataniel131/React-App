import styles from './Container.module.scss'

const Column = props => {
  return (
   <div className={styles.container}>
    {props.children}
   </div>
  );
};

export default Column;