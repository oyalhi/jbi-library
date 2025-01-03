import { useMemo, useRef, useState } from "react";
import { useNavigate, useSearchParams } from "react-router";
import { Categories } from "../components/categories";
import { JBIComponents } from "../components/jbi-components";
import { PARAMS_SEARCH_TEXT } from "../constants/constants";
import { Library } from "../data/data-library";
import { useRouteParams } from "../hooks/use-route-params";
import { getComponentsByCategories } from "../utils/get-components-by-categories";
import { getFilteredComponentsByCategories } from "../utils/get-filtered-components-by-categories";

import styles from "./library.module.scss";

export function LibraryComponent() {
  // routing
  const { category = "" } = useRouteParams();
  const navigate = useNavigate();

  // state
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchText, setSearchText] = useState("");

  // variables
  const componentsByCategories = useMemo(() => getComponentsByCategories(Library), []);
  const filteredComponentsByCategories = useMemo(
    () => getFilteredComponentsByCategories({ componentsByCategories, searchText }),
    [componentsByCategories, searchText]
  );

  const componentsBySelectedCategory = filteredComponentsByCategories[category] ?? [];

  // refs
  const inputUpdatedRef = useRef(false);

  // don't use effect to prevent flashing of input value when page is refreshed
  if (!inputUpdatedRef.current) {
    inputUpdatedRef.current = true;
    const searchText = searchParams.get(PARAMS_SEARCH_TEXT) ?? "";
    setSearchText(searchText);
  }

  // events handlers
  function handleSearchTextChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setSearchText(value);

    if (value) {
      setSearchParams({ [PARAMS_SEARCH_TEXT]: value });
    } else {
      searchParams.delete(PARAMS_SEARCH_TEXT);
      setSearchParams(searchParams);
    }
  }

  function handleClickCategory(category: string) {
    const currentSearch = searchParams.toString();
    navigate(`/${category}?${currentSearch}`);
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
