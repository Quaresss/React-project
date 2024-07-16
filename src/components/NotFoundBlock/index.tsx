import styles from './NotFoundBlock.module.scss';

const NotFoundBlock = () => {
  return (
    <div className={styles.root}>
      <h1>
        <span>:(</span>
        <br />
        Ничего нет
      </h1>
      <p className={styles.description}>Страницы не существует</p>
    </div>
  );
};

export default NotFoundBlock;
