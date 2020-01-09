const cart = {
    'apple' : 3,
    'grape' : 2
}
console.log(cart);

let table = document.createElement('table');
let out = document.querySelector('.out');
parentElement = out.parentElement;

out.append(table);

let btnPlus = document.createElement('button');
btnPlus.className = 'plus';

for(let i in cart){
    table.innerHTML += `
        <tr>
            <td>
                <button class = "plus">+</button>
            </td>
            <td class = "goods">
                ${i}
            </td>
            <td>
                <button class = "minus">-</button>
            </td>
            <td class = "quantity">
                ${cart[i]}
            </td>
           
            
        </tr>
    `;

    
    plus();
    minus();

    
    let btnMinus = document.querySelector('.minus');
    console.log(btnPlus);
    console.log(btnMinus);
}




function plus(){
    let btnPlus = document.querySelectorAll('.plus'); 
    for(let j = 0; j < btnPlus.length; j++){

        btnPlus[j].onclick = function(e){
            console.log(cart);
            let textContent = e.target.parentNode.parentNode.querySelector('.goods').innerText;
            +textContent;
            console.log(textContent);
            console.log(cart[textContent]);
            let textContent2 = e.target.parentNode.parentNode.querySelector('.quantity');
            console.log(textContent2);
            textContent2.innerHTML = cart[textContent] += 1;
            localStorage.setItem('cart', JSON.stringify(cart));
        }
    }
}

function minus(){
    let btnMinus = document.querySelectorAll('.minus'); 
    for(let j = 0; j < btnMinus.length; j++){

        btnMinus[j].onclick = function(e){
            let content = e.target.parentNode.parentNode.querySelector('.goods').innerText;
            let content2 = e.target.parentNode.parentNode.querySelector('.quantity');
            let  numberQuantity = parseInt(content2.innerHTML);
            content2.innerHTML = cart[content] -= 1;

           
            
            
            localStorage.setItem('cart', JSON.stringify(cart));
        }
    }
}