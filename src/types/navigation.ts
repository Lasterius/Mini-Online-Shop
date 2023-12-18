type Item = {
  id: number;
  value: string;
  href: string;
};

export interface INavProps {
  header: string;
  items: Item[];
}
