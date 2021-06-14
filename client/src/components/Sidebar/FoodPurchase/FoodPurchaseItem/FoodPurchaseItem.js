import "./foodpurchaseItem.css";

const FoodPurchaseItem = ({ foodList }) => {
  return (
    <>
      {foodList.length !== 0 ? (
        foodList.map((food) => (
          <div key={food.id} className="foodPurchaseList">
            <div className="foodImageTitle">
              <img className="foodItemImage" src={food.image} alt="" />
              <div className="quantityTitle">
                <span className="numberOfPurchase">1 X</span>
                <span className="foodTitle">{food.title}</span>
              </div>
            </div>
            <span className="foodPrice">${food.price}</span>
          </div>
        ))
      ) : (
        <h3>No Order Yet!</h3>
      )}
    </>
  );
};

export default FoodPurchaseItem;
