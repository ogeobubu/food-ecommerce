import "./promo.css";
import promoImage from "../../assets/undraw_mobile_testing_reah.svg";

const Promo = () => {
  return (
    <div className="promo">
      <img src={promoImage} alt="" className="promoSVGImage" />
      <div className="promoDescription">
        <h2 className="promoTitle">$0 delivery for 30 days! 🎉</h2>
        <p>$0 delivery fee for orders over $10 for 30 days</p>
      </div>
    </div>
  );
};

export default Promo;
