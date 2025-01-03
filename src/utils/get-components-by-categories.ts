import { JBILibrary } from "../types/jbi-library";

export function getComponentsByCategories(library: JBILibrary): Record<string, string[]> {
  const componentsByCategories: Record<string, string[]> = {};

  library.Categories.forEach((category) => {
    componentsByCategories[category] = [];
  });

  library.Components.forEach((component) => {
    component.Categories.forEach((category) => {
      if (componentsByCategories[category]) {
        componentsByCategories[category].push(component.Name);
      }
    });
  });

  return componentsByCategories;
}
