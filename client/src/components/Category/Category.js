import "./category.css";
import { Fastfood, LocalPizza, Kitchen } from "@material-ui/icons";
import CategoryItem from "./CategoryItem/CategoryItem";

const categoryItems = [
  {
    id: 1,
    title: "All",
    emoji: <Fastfood />,
  },
  {
    id: 2,
    title: "Pizza",
    emoji: <LocalPizza />,
  },
  {
    id: 3,
    title: "Asian",
    emoji: <Fastfood />,
  },
  {
    id: 4,
    title: "Burgers",
    emoji: <Kitchen />,
  },
  {
    id: 5,
    title: "Berbecue",
    emoji: <Fastfood />,
  },
  {
    id: 6,
    title: "Dessers",
    emoji: <Fastfood />,
  },
  {
    id: 7,
    title: "Thai",
    emoji: <Fastfood />,
  },
  {
    id: 8,
    title: "Sushi",
    emoji: <Fastfood />,
  },
];

const Category = () => {
  return (
    <div className="category">
      <div className="categoryContainer">
        <CategoryItem categoryItems={categoryItems} />
      </div>
    </div>
  );
};

export default Category;
