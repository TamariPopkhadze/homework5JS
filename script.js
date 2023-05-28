//--------------First Task---------------//

let divWraper = document.createElement('div');
divWraper.classList.add('wraper');
document.getElementById('div1').appendChild(divWraper);
let image = document.createElement('img');
image.setAttribute('src','https://services.meteored.com/img/article/the-night-sky-are-the-stars-we-see-really-dead-already-185092-1_768.jpg');
image.setAttribute('alt', 'image');
document.querySelector('.wraper').appendChild(image);
let text = document.createElement('h2');
document.querySelector('.wraper').appendChild(text)
text.classList.add('title');
text.innerText = 'image title';
text.style.color='red';
text.style.fontSize = '30px';



//--------------Second Task---------------//

let array = document.querySelectorAll('.box');
for(element of array){
    let someText = document.createElement('p');
    someText.classList.add('text');
    someText.innerText = 'hello';
    element.appendChild(someText);
}


//--------------Third Task---------------//

let menu = document.querySelector('.menu');
let navigation = document.getElementById('navigation')
menu.addEventListener('click', function(){
   
    if(navigation.style.display == 'none'){
        
        navigation.style.display = 'flex';
    }
    else{
       
        navigation.style.display = 'none'
        
    }
})


