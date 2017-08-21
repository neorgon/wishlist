export interface List {
  _id?: string;
  owner: string;
  name: string;
  description: string;
  pathImage: string;
  items: [
    {
      name: string;
      price: Number;
      quantity: Number;
      responsible: string;
    }
  ];
}
