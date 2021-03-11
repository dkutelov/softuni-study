import styles from "./PostItem.module.css";

const PostItem = ({ image, description, author }) => {
  return (
    <div className={styles.post}>
      <img className={styles.img} src={image} alt="some javascript" />
      <p className={styles.description}>{description}</p>
      <div className={styles.div}>
        <span className={styles.span}>
          <small>Author: </small>
          {author}
        </span>
      </div>
    </div>
  );
};

export default PostItem;
