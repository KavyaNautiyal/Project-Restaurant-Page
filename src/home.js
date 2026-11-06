 export function allhome(){
   const homeel = document.createElement('div')
   homeel.classList.add('main')
   homeel.innerHTML = `
   <h2>welcome to flavor haven</h2>
   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto laborum voluptatum, recusandae nihil iure consequuntur repellat odit nulla quidem beatae dolores nobis, doloribus alias atque omnis voluptates accusantium a quis?</p>
   <button class = "home-btn">the button</button>
   `
   return homeel
}