
const addBtn = document.getElementsByClassName('add-btn') ;
for(const btn of addBtn) {
    btn.addEventListener('click',  function(event) {
        const price = event.target.parentNode.childNodes[3].childNodes[1].innerText;
        const name = event.target.parentNode.childNodes[1].innerText;
         const catagorey = event.target.parentNode.childNodes[5].childNodes[1].innerText;
        //  console.log(price,name,catagorey)

        const selectedplayerContainer = document.getElementsByClassName('selected-players-container')[0];
        // console.log(selectedplayerContainer);

            event.target.setAttribute('disabled',false);
          

        const firstCartCount = getConvertedValue('cart');
        if( firstCartCount+1 > 6 || getConvertedValue('left')-1 < 0){
            alert('limit ses')
            return ;
        }
             event.target.parentNode.style.backgroundColor = 'gray';

        //update buget 
            const budget = getConvertedValue('budget') ;
            document.getElementById('budget').innerText = budget - parseInt(price);

            const cart = getConvertedValue('cart') ;
            document.getElementById('cart').innerText = cart + 1;

            const left = getConvertedValue('left') ;
            document.getElementById('left').innerText = left - 1;




        const div = document.createElement('div')
        div.classList.add('pp')

        const p1 =document.createElement('p');
        const p2 =document.createElement('p');
        const p3 =document.createElement('p');

        p1.innerText = name;
        p2.innerText = price;
        p3.innerText = catagorey;

        div.appendChild(p1);
        div.appendChild(p2);
        div.appendChild(p3);

        selectedplayerContainer.appendChild(div);
        updateTotalCost(price);
        updateGrandTotal();
        
    });
}
