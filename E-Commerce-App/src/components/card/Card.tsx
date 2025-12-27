import { type ButtonPropType, Button} from "../Button";
import "./ Card.module.css";

type CardType = ButtonPropType & {
    img: string;
    title: string;
    weight: string;
    price: number;
}

const Card = ({img, title, weight, price, onClickHandler, value, btntitle}: CardType) => {
  return (
    <div>
        <section className="card">
            <img src={img} alt={title} className="card-img"/>
            <div className="card-details">
                <h3 className="card-title">{title}</h3>
                <section className="card-weight">
                    <div className="weight">
                        {weight}
                    </div>
                </section>
                <section className="card-price">
                    <div className="price">€{price}</div>
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