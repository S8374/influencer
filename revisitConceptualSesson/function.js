//getValue and convert

function getConvertedValue(id){
    const price = document.getElementById(id).innerText ;
    const convertInt = parseInt(price);
    return convertInt ;
   
} 

//update total cost 
function updateTotalCost(id){
             const totalCost = getConvertedValue('total-cost');
             const convertInt = parseInt(id);
             const sum = totalCost + convertInt ;
             document.getElementById('total-cost').innerText = sum ;
        
             
}

function updateGrandTotal(status){
   if( status == undefined ){
     const totalCost = getConvertedValue('total-cost');
     document.getElementById('grand-total').innerText = totalCost;
   }
   else{
       const inputValue = document.getElementById('coupen-code').value ;
       if(inputValue == 'sabbir'){
        const totalCost = getConvertedValue('total-cost'); //bula gala -->Revisit DOM: Special Conceptual Session dakho
               const discount =  totalCost * .2 ;
               document.getElementById('grand-total').innerText = totalCost - parseInt(discount);
               console.log(discount);
       }
       else{
          alert('please enter coupen code (sabbir)for discount')
       }
   }
   
}
