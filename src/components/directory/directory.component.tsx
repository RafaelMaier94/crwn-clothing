import { Category } from "@/model";
import CategoryItem from "../category-item/category-item.component";
import "./directory.styles.scss";

interface Props {
  categories: Category[];
}

const Directory: React.FC<Props> = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
