import { Library } from "../data/data-library";

export function addBigData(categories: number, components: number) {
  for (let i = 0; i < categories; i += 1) {
    Library.Categories.push("Category" + i);
  }

  for (let i = 0; i < components; i += 1) {
    Library.Components.push({
      Name: "Comp" + i,
      Categories: ["Category" + (i % categories), "Category" + ((i + 1) % categories)],
    });
  }
}
