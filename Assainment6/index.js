

// way --1 
// const loadAllPost = async (query) => {
//     const url = `https://openapi.programming-hero.com/api/retro-forum/posts${query}`
//     console.log(url) ;
//     const res = await fetch(url);
//     const data =  await res.json() ;
//     console.log(data)
// }

// const handelSeachr = () => {
//     const values = document.getElementById('SearchBox').value;
//     console.log(values) ;
//     loadAllPost(`?category=${values}`)
// }



// loadAllPost('');




const loadAllProducts = async (query = '') => {
    document.querySelector('.loders').style.display = 'block';
    const res = await fetch(`https://fakestoreapi.com/products${query}`);
    const products = await res.json();
    console.log(products);
   if(!products.length){
    // alert('DATA NOT FOUND');
    document.querySelector('.error').style.display = 'block';
    //lodeing spiner bondohor jonno jani tokhon loding  spiner na dakhay
    document.querySelector('.loders').style.display = 'none';
   }


    if(products.length > 0){
        document.querySelector('.loders').style.display = 'none';
        //data cola asla 
        document.querySelector('.error').style.display = 'none';
    }
    const ii = document.querySelector('.card-container');
    console.log(ii) ;
    ii.innerHTML='';
    products.forEach((product) => {
        console.log(product) ;
        const div = document.createElement('div');
        div.innerHTML=`
        <div class="card ">
  <div class="image_container">
    <img src=${product.image} alt="">
    </svg>
  </div>
  <div class="title">
    <span>${product.title}</span>
  </div>
  <div class="size">
    <span>${product.category}</span><br>
    <span>Ratting :</span>
    <ul class="list-size">
      <li class="item-list"><button class="item-list-button">${product.rating.rate}</button></li>
    </ul>
  </div>
  <div class="action">
    <div class="price">
      <span>${product.price}</span>
    </div>
    <button class="cart-button">
      <svg
        class="cart-icon"
        stroke="currentColor"
        stroke-width="1.5"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
          stroke-linejoin="round"
          stroke-linecap="round"
        ></path>
      </svg>
      <span onclick="addTocart('${product.title}')">Add to cart</span>
    </button>
  </div>
</div>
        `;
        ii.appendChild(div)
    })
};

const handelSearch =() => {
    const inputValue = document.getElementById('SearchBox').value ;
    loadAllProducts(`/category/${inputValue}`);

}

const addTocart = (title) => {
    console.log(title);
    const cartContainer  = document.querySelector('.cart') ;
    const div = document.createElement('div')
    div.classList.add('flex space-x-28') ;
    div.innerHTML=`
     <h2>${title}</h2>
    `;
    cartContainer.appendChild(div);
}

loadAllProducts();

















































// errror style
anime({
    targets: '.row svg',
    translateY: 10,
    autoplay: true,
    loop: true,
    easing: 'easeInOutSine',
    direction: 'alternate'
  });
  
  anime({
    targets: '#zero',
    translateX: 10,
    autoplay: true,
    loop: true,
    easing: 'easeInOutSine',
    direction: 'alternate',
    scale: [{value: 1}, {value: 1.4}, {value: 1, delay: 250}],
      rotateY: {value: '+=180', delay: 200},
  });
  
  
  