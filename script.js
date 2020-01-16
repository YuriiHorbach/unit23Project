const cart = {
    'apple' : 3,
    'grape' : 2
}
console.log(cart);

function t10() {
    
    localStorage.setItem('cart', JSON.stringify(cart));

    t14();

    document.querySelector('.b-10').disabled = true;
   
}
document.querySelector('.b-10').onclick = t10;


function t11(){
    // let card = localStorage.getItem('card');

    // val = JSON.parse(card);

    let table = document.createElement('table');
    let out = document.querySelector('.out');
    parentElement = out.parentElement;

    out.append(table);

    let btnPlus = document.createElement('button');
    btnPlus.className = 'plus';
    let sum = 0;
   
    if(cart){
        table.innerHTML += `
            <thead>
                <tr>
                    <th colspan = "3">Name</th>
                    <th colspan = "3">Quantity</th>
                </tr>
            </thead>`;
        let sum = 0;
        for(let i in cart){
        
            table.innerHTML += `
                <tr>
                    <td>
                        <button class = "plus">+</button>
                    </td>
                    <td class = "goods" data = "${i}">
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
            sum += cart[i];
            t12();
        }
    }
    table.innerHTML += `
    <tr>
        <td colspan = "3">Total</td>
        <td class = "totalSum">
            ${sum}
         </td>
    </tr>
`;
}


function t12(){
   
        let btnPlus = document.querySelectorAll('.plus'); 
        for(let j = 0; j < btnPlus.length; j++){

            btnPlus[j].onclick = function(e){
                console.log(cart);
                let content = e.target.parentNode.parentNode.querySelector('.goods').innerText;
                console.log(content);
                console.log(cart[content]);
                let content2 = e.target.parentNode.parentNode.querySelector('.quantity');
                console.log(content2);
                content2.innerHTML = ++cart[content];
                localStorage.setItem('cart', JSON.stringify(cart));
                t13();
            }
        }
        
   
        let btnMinus = document.querySelectorAll('.minus'); 
        for(let j = 0; j < btnMinus.length; j++){

            btnMinus[j].onclick = function(e){
                console.log(cart);
                let content = e.target.parentNode.parentNode.querySelector('.goods').innerText;
                console.log(content);
                console.log(cart[content]);
                let content2 = e.target.parentNode.parentNode.querySelector('.quantity');
                console.log(content2);
                let  numberQuantity = parseInt(content2.innerHTML);
                content2.innerHTML = cart[content] -=1;
                if(cart[content] < 1){
                    content2.innerHTML = 1;
                    cart[content] = 1;
                }
                localStorage.setItem('cart', JSON.stringify(cart));
                t13();
            }
        }
   
}


// Task 13 ============================================
/*  Добавьте в таблицу footer который считает общее количество товара. */

function t13() {
    let totalCells = document.querySelectorAll('.quantity');
    let totalSum = document.querySelector('.totalSum');

    let sum = 0;

    for(let i = 0; i < totalCells.length; i++){
        sum += parseInt(totalCells[i].innerText);
        console.log(sum);
        totalSum.innerText = sum;
    };
}
// ваше событие здесь!!!

function t14(){
    let cart = localStorage.getItem('cart');
    if(cart !== null){
        t11();
        t12();
    }
    else{
        document.querySelector('.out').innerHTML = 'Cart is empty';
    }
}