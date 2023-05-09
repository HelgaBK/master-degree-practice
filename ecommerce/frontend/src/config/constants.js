import { colors, fileIcon, ai, logoOnlyCloth, allAreaCloth } from "../assets";

export const EditorTabs = [
  {
    name: "colorchooser",
    icon: colors,
  },
  {
    name: "filechooser",
    icon: fileIcon,
  },
  {
    name: "aichooser",
    icon: ai,
  },
];

export const FilterTabs = [
  {
    name: "logoOnlyCloth",
    icon: logoOnlyCloth,
  },
  {
    name: "allAreaCloth",
    icon: allAreaCloth,
  },
];

export const DecalTypes = {
  logo: {
    stateProperty: "logoOnlyDecal",
    filterTab: "logoOnlyCloth",
  },
  full: {
    stateProperty: "fullAreaDecal",
    filterTab: "allAreaCloth",
  },
};
