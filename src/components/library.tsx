import { useMemo, useState } from "react";
import { Library } from "../data/data-library";
import { getComponentsByCategories } from "../utils/get-components-by-categories";
import { getFilteredComponentsByCategories } from "../utils/get-filtered-components-by-categories";
import { Categories } from "./categories";
import { JBIComponents } from "./jbi-components";

import styles from "./library.module.scss";

export function LibraryComponent() {
  // state
  const [category, setCategory] = useState("");
  const [searchText, setSearchText] = useState("");

  // variables
  const componentsByCategories = useMemo(() => getComponentsByCategories(Library), []);
  const filteredComponentsByCategories = useMemo(
    () => getFilteredComponentsByCategories({ componentsByCategories, searchText }),
    [componentsByCategories, searchText]
  );

  const componentsBySelectedCategory = filteredComponentsByCategories[category] ?? [];

  // events handlers
  function handleSearchTextChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setSearchText(value);
  }

  function handleClickCategory(category: string) {
    setCategory(category);
  }

  // render
  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <h1 className={styles.title}>Library</h1>
        <input type="text" placeholder="Search..." value={searchText} onChange={handleSearchTextChange} />
      </div>

      <div className={styles.wrapper}>
        <Categories
          componentsByCategories={filteredComponentsByCategories}
          onClick={handleClickCategory}
          selectedCategory={category}
        />
        <JBIComponents components={componentsBySelectedCategory} />
      </div>
    </div>
  );
}
