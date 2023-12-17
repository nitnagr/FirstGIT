<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body style="margin: 0">
    <div id="header" style="padding: 1rem 0; background-color: lightblue">
      <h1 id="main-heading" style="margin: 0">Fruit Shop</h1>
    </div>
    <div>
      <h2 id="basket-heading">Fruits In Basket</h2>
      <ul class="fruits">
        <li class="fruit">Banana</li>
        <li class="fruit">Apple</li>
        <li class="fruit">Orange</li>
        <li class="fruit">Kiwi</li>
      </ul>
    </div>
    <div id="thanks"></div>
  </body>
  <script src="index.js"></script>
</html>


// Write your code below:
const subHeading = document.createElement('h3');
const subHeadText = document.createTextNode('Buy high quality organic fruits online');
subHeading.appendChild(subHeadText);
const divs = document.getElementsByTagName('div');
const firstDiv=divs[0];
firstDiv.appendChild(subHeading);
subHeading.style.fontStyle='italic';

const para = document.createElement('p');
const paraText = document.createTextNode('Total fruits: 4');
para.appendChild(paraText);
const divis = document.getElementsByTagName('div');
const secondDiv=divs[1];
secondDiv.appendChild(para);
para.id='fruits-total';