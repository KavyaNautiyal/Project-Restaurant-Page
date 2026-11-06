import "./styles.css"
import { allhome } from "./home";
import { menu } from "./menu";
import {contact} from './contect.js'
const homecontain = document.getElementById('content')
const Home = document.querySelector('.home')
const Menu = document.querySelector('.menu')
const contani = document.querySelector('.contant')
Home.addEventListener('click',()=>{
    homecontain.innerHTML=''
    homecontain.appendChild(allhome())
})

Menu.addEventListener('click',()=>{
    homecontain.innerHTML = ''
    homecontain.appendChild(menu())
    })

contani.addEventListener('click',()=>{
      homecontain.innerHTML =''
      homecontain.appendChild(contact())
})    