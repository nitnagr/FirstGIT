// Write the code as shown in the video below:
const mainHeading=document.querySelector('#main-heading');
mainHeading.style.textAlign='right';

const fruits=document.querySelector('.fruits');
fruits.style.backgroundColor='grey';
fruits.style.padding='30px';
fruits.style.margin='30px';
fruits.style.width='50%';
fruits.style.borderRadius='5px';
fruits.style.listStyleType='none';

const basketHeading=document.querySelector('h2');
basketHeading.style.marginLeft='30px';
basketHeading.style.color='brown';

const items =document.querySelectorAll('.fruit');
for(let i=0;i<items.length; i++)
  {
    items[i].style.backgroundColor='white';
    items[i].style.padding='10px';
    items[i].style.margin='10px';
    items[i].style.borderRadius='5px';
  }

const oddItems =document.querySelectorAll('.fruit:nth-child(odd');
for(let i=0;i<oddItems.length; i++)
  {
    oddItems[i].style.backgroundColor='lightgray';
  }


// Write answer to the questions asked below:
const evenItems =document.querySelectorAll('.fruit:nth-child(even');
for(let i=0;i<evenItems.length; i++)
  {
    evenItems[i].style.backgroundColor='brown';
    evenItems[i].style.color='white';
  }

