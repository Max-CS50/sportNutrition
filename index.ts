// Import stylesheets
import './style.css';

const addNote = document.querySelector(".parent-div");
const cartNode = document.querySelector(".placeitems");
const createCard: Product[] = [];

class Card {
   private src: HTMLImageElement | null;
   private name: HTMLDivElement | null;
   private price: HTMLDivElement | null;
   private button: HTMLButtonElement | null;

   constructor(product: Product | null) {
      const template: DocumentFragment = (
         document.getElementById('card-template') as HTMLTemplateElement).content;
      const content: DocumentFragment = document.importNode(template, true);

      this.src = content.querySelector(".item-card-img");
      this.name = content.querySelector(".card-title");
      this.price = content.querySelector(".card-price");
      this.button = content.querySelector(".buy");

      this.src.setAttribute('src', product.src);
      this.name.innerHTML = product.name;
      this.price.innerHTML = product.price;

      this.button.onclick = (): void => this.addToCard(product);
      addNote.appendChild(content);
   }
   addToCard(product: Product) {
      createCard.push(product);
   }
}

class Product {
   src: string | null;
   name: string | null;
   price: string | null;

   constructor(src: string | null, name: string | null, price: string | null) {
      this.src = src;
      this.name = name;
      this.price = price;
   }
}

const Protein = new Product(
   "https://goo.su/8AaB",
   "Protein",
   "15.49$"
);
new Card(Protein);

const Aminoacids = new Product(
   "https://goo.su/8FzX",
   "Amino acids",
   "12.99$"
);
new Card(Aminoacids);

const Weightgain = new Product(
   "https://goo.su/8AAm",
   "Weight gain",
   "17.19$"
);
new Card(Weightgain);

const BCAA = new Product(
   "https://goo.su/8aAn",
   "BCAA",
   "9.99$"
);
new Card(BCAA);

const Fatburners = new Product(
   "https://goo.su/8AaN",
   "Fat burners",
   "11.39$"
);
new Card(Fatburners);

const Forhealth = new Product(
   "https://goo.su/8aAw",
   "For health",
   "18.89$"
);
new Card(Forhealth);

const Creatine = new Product(
   "https://goo.su/8Aba",
   "Creatine",
   "5.29$"
);
new Card(Creatine);

const Nutpastes = new Product(
   "https://goo.su/8Abc",
   "Nut pastes",
   "7.99$"
);
new Card(Nutpastes);

const Drinks = new Product(
   "https://goo.su/8abd",
   "Drinks",
   "4.99$"
);
new Card(Drinks);

const cardProducts = [];
const clickOnBasket: HTMLSpanElement = document.getElementById('basketButton');
clickOnBasket.onclick = function openPopup() {
   const basket = document.getElementById('popupModal');
   const popup = document.createElement('section');
   popup.className = 'popup';
   basket.appendChild(popup);
   (popup as HTMLDivElement).innerHTML = `
         <section class="Cartpopup" id="Cartpopup">
         <div class="Cartpopup-inner">
            <div class="Cartpopup-basket">Your order</div>

            <div class="Cartpopup-items">
               <div class="Cartpopup-item">Name</div>
               <div class="Cartpopup-item">Price</div>
            </div>

            <div class="Cartpopup-box">
               <div class="Cartpopup-box-item" id="Cartpopup-item">
                     <div class="placeitems"></div>
               </div>
            </div>

            <div class="list-item-button">
               <button type="button" class="button-b">BUY</button>
            </div>

            <div class="Cartpopup-btn" id="closeModal">
               <div class="Cartpopup-btn-close">
                  <span class="popup-close">X</span>
               </div>
            </div>

         </div>
         </section>
         `;

   createCard.forEach((product) => {
      const basketName: HTMLDivElement = document.createElement('div');
      const basketPrice: HTMLDivElement = document.createElement('div');

      basketName.className = 'Cartpopup-box-name';
      basketPrice.className = 'Cartpopup-box-price';

      basketName.innerHTML = product.name;
      basketPrice.innerHTML = product.price;

      document.querySelector('.placeitems').appendChild(basketName);
      document.querySelector('.placeitems').appendChild(basketPrice);
   });
   const clickOnClose: HTMLSpanElement = document.getElementById('closeModal');
   clickOnClose.onclick = (): void => {
      document.querySelector('.popup').remove();
   };
};
