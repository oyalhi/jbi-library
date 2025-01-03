import { JBILibrary } from "../types/jbi-library";

export const Library: JBILibrary = {
  Components: [
    {
      Name: "Free Form Container",
      Categories: ["Layout"],
    },
    {
      Name: "Flex Container",
      Categories: ["Layout"],
    },
    {
      Name: "Bar Chart",
      Categories: ["Charts"],
    },
    {
      Name: "Line Chart",
      Categories: ["Charts"],
    },
    {
      Name: "Button",
      Categories: ["Controls"],
    },
    {
      Name: "Input Field",
      Categories: ["Controls", "Inputs"],
    },
    {
      Name: "Checkbox",
      Categories: ["Controls", "Inputs"],
    },
    {
      Name: "Radio Button",
      Categories: ["Controls", "Inputs"],
    },
  ],
  Categories: ["Controls", "Inputs", "Layout", "Custom", "Charts"],
};
