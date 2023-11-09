export default interface Drink {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
  ingredients?: {
    name: string,
    quantity: string,
  }[],
  instructions : {
    lang: string,
    text: string
  }[]
  tags: string[]
}
