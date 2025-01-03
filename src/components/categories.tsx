import { useMemo } from "react";
import styles from "./categories.module.scss";

interface CategoriesProps {
  onClick?: (category: string) => void;
  componentsByCategories: Record<string, string[]>;
  selectedCategory: string | undefined;
}

export function Categories({ onClick, selectedCategory, componentsByCategories }: CategoriesProps) {
  // variables
  const categories = useMemo(() => Object.keys(componentsByCategories), [componentsByCategories]);

  // render
  return (
    <div className={styles.root}>
      <h2 className={styles.title}>Categories</h2>
      <ul className={styles.list}>
        {categories.map((category) => {
          const isSelected = category === selectedCategory;

          return (
            <li
              aria-selected={isSelected}
              className={`${styles.category} ${isSelected ? styles.selected : ""}`}
              key={category}>
              <button className={styles.button} onClick={() => onClick?.(category)}>
                {category} ({componentsByCategories[category]?.length || 0})
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
