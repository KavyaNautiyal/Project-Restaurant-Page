export function contact(){
    const container = document.createElement('div')
    container.classList.add('content-info')
    container.innerHTML = `
    <h1>for more info use our contant</h1>
    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ducimus quibusdam illum repellendus minima. Quis minus porro sapiente. Tempora provident inventore aspernatur vero ea pariatur illum velit, quo sequi saepe!</p>
    <div class ='button'>
    <button class = 'contact'>contact</button>
    <button class = 'login'>login</button>
    </div>
    `
    return container
}