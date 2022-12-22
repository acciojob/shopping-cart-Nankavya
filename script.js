//your code here
let item=document.getElementById('item-name-input');
let price=document.getElementById('item-price-input');
let btn=document.getElementById('add');

let table=document.getElementById('table');
let total=document.getElementById('total')

let totalvalue=0;
function cart()
{
    let product=item.value;
    let cost=price.value;
    // 
    if(product!='' && cost!='')
    {
        let row=document.createElement('tr')
      row.innerHTML=`<td>${product}</td><td>${cost}</td>`;
      console.log(row)
      table.append(row)
      totalvalue=(totalvalue+(Number(cost)))
    //   console.log("total",totalvalue)
      total.innerText=totalvalue

      item.value=''
      price.value=''
    }
    
}

btn.addEventListener('click',cart)
