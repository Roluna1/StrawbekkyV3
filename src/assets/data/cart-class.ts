interface Cart {
  id: string
  quantity: number
}
class CartClass {
  cartItems = [] as Cart[];
  #localDataKey: string | undefined; /* '#' to make it private */
  
  constructor(localDataKey: string) {
    this.#localDataKey = localDataKey;
    this.#loadData();
    //bussinessCart.localDataKey = "cart-bussiness";
    //bussinessCart.loadData();
  }

  /* export function */
  savingData() {
    if (!this.#localDataKey) {
      console.error("localDataKey is not defined");
      return;
    }
    localStorage.setItem(this.#localDataKey, JSON.stringify(this.cartItems));
  }

  #loadData() {
    if (!this.#localDataKey) {
      console.error("localDataKey is not defined");
      return;
    }
    const data = localStorage.getItem(this.#localDataKey);
    if (data == null) {
      this.cartItems = [];
    } else {
      this.cartItems = JSON.parse(data) as Cart[];
    }
  }

  addToCarts(addingToCart: string) {
    let matchingItem: Cart | undefined;
    this.cartItems.forEach((carts) => {
      if(addingToCart == carts.id){
        matchingItem = carts
      }
    });
    if(matchingItem) {
      matchingItem.quantity += 1
    } else {
      this.cartItems.push({
        id: addingToCart,
        quantity: 1
      });
    };
    this.savingData();
    //console.log(cart)
  }
  
  deletingCheckout(id: string) {
    const checkoutContent = document.querySelector(`.checkout-content-${id}`)
    checkoutContent?.remove()
    const newCart: Cart[] = []
    this.cartItems.forEach((cartItem) => {
      if (cartItem.id !== id) {
        newCart.push(cartItem)
      }
    });
    this.cartItems = newCart
    this.savingData();
    //console.log("deleted")
    //console.log(cart);
  }
}

const cart = new CartClass('cart-oop')
const bussinessCart = new CartClass('cart-bussiness');
console.log(cart);
console.log(bussinessCart);

//console.log(bussinessCart);
//console.log(bussinessCart instanceof CartClass);









