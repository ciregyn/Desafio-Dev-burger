const list = document.querySelector(".burger-menu");
const buttonShowAll = document.querySelector(".show-all");
const buttonMapAll = document.querySelector(".map-all");
const buttonSumAll = document.querySelector(".sum-all");
const buttonShowVegan = document.querySelector(".show-vegan");
const buttonReset = document.querySelector(".reset");
const logo = document.getElementById("dev-logo");

function showAll(productsArray) {
 let myLi = "";
 
  productsArray.forEach((product) => {
    
    myLi += `
      <li>
        <img src="${product.src}"  />
        <p>${product.name}</p>
        <p class="price">R$ ${product.price.toFixed(2)}</p>
      </li>
    `;
  });

  list.innerHTML = myLi;
   logo.style.display = "none";
   
}

function mapAllItems() {
  const newPrices = menuOptions.map((product) => ({
    ...product,
    price: product.price * 0.9,
  }));
  showAll(newPrices);
}

function sumAllItems() {
  const totalValue = menuOptions.reduce((accumulator, product) => accumulator + product.price, 0);
  list.innerHTML = `<li> <p>Total: R$ ${totalValue.toFixed(2)}</p></li>`;
}

function showVegan(){
  const veganBurgers = menuOptions.filter((item ) => item.vegan === true);
  myLi = "";

  veganBurgers.forEach((product) => {
    myLi += `
      <li>
        <img src="${product.src}"  />
        <p>${product.name}</p>
        <p class="price">R$ ${product.price.toFixed(2)}</p>
      </li>
    `;
  });
  list.innerHTML = myLi;
}

document.addEventListener("click", (event) => {
  const isClickInside = list.contains(event.target) || event.target.closest(".conteiner-buttons");
  
  if (!isClickInside) {
    list.innerHTML = "";
    logo.style.display = "block";
  }
});

document.querySelectorAll('button').forEach((btn) => {
  btn.addEventListener('click', () => {
    logo.style.display = 'none'
  })
})

buttonReset.addEventListener("click", () => {
  list.innerHTML = "";
  logo.style.display = "block";
});


buttonShowAll.addEventListener("click", () => showAll(menuOptions));
buttonMapAll.addEventListener("click", mapAllItems);
buttonSumAll.addEventListener("click", sumAllItems);
buttonShowVegan.addEventListener("click", showVegan);