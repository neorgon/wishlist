export interface List{
  name: string,
  owner: string,
  description: string,
  pathImage: string,
  item:[{
    name: string,
    price: number,
    quantity: number,
    responsible: string
  }]
}