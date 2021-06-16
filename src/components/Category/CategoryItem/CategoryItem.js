import "./categoryItem.css";

const CategoryItem = ({ categoryItems }) => {
  return (
    <>
      {categoryItems?.map((item) => (
        <div key={item.id} className="categoryItem">
          <div className="categoryItemIcon">{item.emoji}</div>
          <div className="categoryItemTitle">{item.title}</div>
        </div>
      ))}
    </>
  );
};

export default CategoryItem;
