export interface ISubmenuItem {
  label: string;
  path?: string;
  color?: string;
}

export interface IMenuItem {
  label: string;
  icon: string;
  subitems?: ISubmenuItem[] | undefined;
}
