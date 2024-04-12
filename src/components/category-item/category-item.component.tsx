import { Category } from "@/model";
import "./category-item.styles.scss";

interface Props {
  category: Category;
}

const CategoryItem: React.FC<Props> = ({ category }) => {
  const { imageUrl, title } = category;
  return (
    <div className="category-container">
      <img src={imageUrl} className="background-image" />
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default CategoryItem;
