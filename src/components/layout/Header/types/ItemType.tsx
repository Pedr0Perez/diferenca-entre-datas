type ItemType = {
  label: string;
  icon: string;
  items: Array<ItemType>,
  shortcut?: string;
  badge?: number;
  template?: React.JSX.Element;
};

export default ItemType;
