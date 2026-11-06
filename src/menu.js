import pizzaImg from './img/pizza.png';
import pastaImg from './img/pasta.png';
import burgerImg from './img/burgur.png'; 

export function menu(){
   const container = document.createElement('div')
   container.classList.add('all-wrap')

   const menuItems = [
    {
      name: 'Margherita Pizza',
      desc: 'Fresh tomatoes, mozzarella cheese, and fresh basil leaves.',
      price: '$14.99',
      image: pizzaImg
    },
    {
      name: 'Creamy Pasta',
      desc: 'Rich white sauce pasta with mushrooms and parmesan cheese.',
      price: '$12.50',
      image: pastaImg
    },
    {
      name: 'Classic Burger',
      desc: 'Juicy beef patty with lettuce, tomato, and special sauce.',
      price: '$10.99',
      image: burgerImg
    }]

    let menuHTML = ''
    menuItems.forEach((items)=>{
      menuHTML+=`
       <div class = 'menu-card'>
       <img src = ${items.image} class = card-img>
       <div class = "card-contain">
      <h3>${items.name}</h3>
      <p>${items.desc}</p>
      <span class="price">${items.price}</span>
       </div>
       </div>
      `
    })

    container.innerHTML = `
    <h2 class="menu-title">Our Special Menu</h2>
    <div class="menu-grid-wrapper">
      ${menuHTML}
    </div>`
    
    return container

}