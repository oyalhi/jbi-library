export function getFilteredComponentsByCategories({
  componentsByCategories,
  searchText,
}: {
  searchText: string;
  componentsByCategories: Record<string, string[]>;
}) {
  const searchTextLowerCased = searchText.toLowerCase();

  return Object.entries(componentsByCategories).reduce((acc, [category, components]) => {
    const filteredComponents = components.filter((component) => component.toLowerCase().includes(searchTextLowerCased));

    if (searchText.length === 0 || filteredComponents.length > 0) {
      acc[category] = filteredComponents;
    }

    return acc;
  }, {} as Record<string, string[]>);
}
