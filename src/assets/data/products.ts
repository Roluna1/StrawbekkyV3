export interface FormatProduct {
  id: string
  img: string
  name: string
  price: number
  productImg?: any;
}

class Product {
  id;
  img;
  name;
  price;

  constructor(productDetails: FormatProduct) {
    this.id = productDetails.id;
    this.img = productDetails.img
    this.name = productDetails.name
    this.price = productDetails.price
  }

  productImg(): string {
    return `./src/assets/img/${this.img}`;
  }
  
}
export const products: FormatProduct[] = [{
  id: '4112512522461616224',
  img: '1.jpg',
  name: 'Coffee',
  price: 39
},{
  id: '41125125532266152424',
  img: '2.png',
  name: 'Crossoni',
  price: 29
},{
  id: '41125125532266152424',
  img: '3.png',
  name: 'Pancake',
  price: 29
},{
  id: '411251215125522424',
  img: '4.png',
  name: 'Taco',
  price: 59
},{
  id: '41125125221523219752424',
  img: '5.png',
  name: 'Sushi',
  price: 99
},{
  id: '41125152154217959742522424',
  img: '6.png',
  name: 'Ramen',
  price: 129
},{
  id: '411251256346246432643643522424',
  img: '7.png',
  name: 'Cheesilog',
  price: 99
},{
  id: '41125125613945675461314222424',
  img: '8.png',
  name: 'Jumbo Burger',
  price: 119
},{
  id: '41125126342145435231522424',
  img: '9.png',
  name: 'Shrimp',
  price: 59
},{
  id: '135152155284647471521512521525',
  img: '10.png',
  name: 'Strawberry Meal',
  price: 179
},{
  id: '131314442416484864512432342',
  img: '11.png',
  name: 'Strawberry Halo-Halo',
  price: 69
},{
  id: '13131444248467541512432342',
  img: '12.png',
  name: 'Strawberry Macarons',
  price: 119
},{
  id: '13131444241754734512432342',
  img: '13.png',
  name: 'Strawberry Pie',
  price: 89
},{
  id: '131314442417868567512432342',
  img: '14.png',
  name: 'Strawberry Donut',
  price: 89
},{
  id: '131314442414863453512432342',
  img: '15.png',
  name: 'Strawberry Mallow',
  price: 89
},{
  id: '131314442415176375675672432342',
  img: '16.png',
  name: 'Strawberry Matcha Ice Cream ',
  price: 99
},{
  id: '13131444246364363451512432342',
  img: '17.png',
  name: 'Strawberry Gelatin',
  price: 129
},{
  id: '1313144424156261612432342',
  img: '18.png',
  name: 'Strawberry Milkshake',
  price: 69
},{
  id: '131314442415124341552342',
  img: '19.png',
  name: 'Strawberry Boba',
  price: 69
}].map((productDetails) => {
  return new Product(productDetails)
});

console.log(products)