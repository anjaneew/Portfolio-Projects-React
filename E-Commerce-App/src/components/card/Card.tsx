import { type ButtonPropType, Button} from "../Button";
import styles from "./Card.module.css";

type CardType = ButtonPropType & {
    img: string;
    title: string;
    description: string;
    weight: string;
    price: number;
    category: string;
}

const Card = ({img, title, description,  weight, price, category, onClickHandler, value, btntitle}: CardType) => {
  return (
    <div>
        <section className={styles.card}>
            <img src={img} alt={title} className={styles.img}/>
            <div className={styles.cardDetails}>
                <h3 className={styles.cardTitle}>{title}</h3>
                <section className={styles.cardWeight}>
                    <div className={styles.weight}>
                        Weight: {weight}
                    </div>
                </section>
                <section className={styles.cardPrice}>
                    <div className={styles.price}>Price: €{price}</div>
                </section>
                <details className={styles.cardDescription}>
                    <p>{description}</p>
                </details>
                <section className={styles.cardCategory}>
                    <p>{category}</p>
                </section>
                
            </div>
        <Button 
            onClickHandler={onClickHandler}
            value={value}
            btntitle={btntitle}
        />
        </section>
    </div>
  );
};

export default Card;