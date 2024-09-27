const loadCategory = async() => {
    const responce = await fetch("https://openapi.programming-hero.com/api/news/categories") ;

    const HeaderContainer = document.querySelector('header') ;
    const data =  await responce.json() ;
    data.data.news_category.forEach((items)=>{
        // console.log(items);
        const div = document.createElement('div');
        div.innerHTML = `
        <a href="#" class="btn" onclick = "allCategory('${items.category_id}') ">
        ${items.category_name}</a>
        `;
        HeaderContainer.appendChild(div) ;
       
       
    })
    
};





const allCategory = async(catID) => {

    console.log(catID);
    // easy way to add loders  stp: 1
    // 1.
    document.getElementById('lds-roller').style.display = 'block';
    const responce2 = await fetch(`https://openapi.programming-hero.com/api/news/category/${catID}`) ;
    const data2 = await responce2.json() ;
    const allData = data2.data ;
    const it2 = document.querySelector('.it2') ;
    it2.innerHTML= '' ;
    //static baba loders use 
//    if(allData.length > 0){
//     console.log('data acea') ;
//     // document.getElementById('lds-roller').style.display = 'none';
//    }

   allData.forEach((items2) => {
    // 2.
    document.getElementById('lds-roller').style.display = 'none';
       const div = document.createElement('div') ;
       div.innerHTML=`
          <div class="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
  <div class="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 ">
   <img src=${items2.image_url} alt="">
   
  </div>
  <div class="p-6">
    <h5 class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
     ${items2.title}
    </h5>
    <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
    ${items2.details.slice(0,100)}
    </p>
  </div>
  <div class="p-6 pt-0">
    <button data-ripple-light="true" type="button" class="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
    onclick ="detailsMore('${items2.title}')"
    >
      Details More
    </button>
  </div>
        </div>
       `;
       it2.appendChild(div);
   })
};

const detailsMore = (text) => {
    console.log(text);
}

const handelSearch = () => {
    const value = document.querySelector('.search-box').value ;
   if(value){
    allCategory(value);
   }
   else{
    alert('please enter a valide id') ;
   }
}


allCategory();


loadCategory();