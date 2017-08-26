export interface List {
  _id?: string;
  owner: string;
  name: string;
  description: string;
  image?: string;
  item?: [
    {
      _id: string;
      name: string;
      price: Number;
      quantity: Number;
      responsible: string;
    }];
}

export interface ListWrapper {
  data: List[];
}

export interface ListPostWrapper {
  data: {
    id: string;
    attributes: List;
  };
}
