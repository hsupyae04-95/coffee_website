let listOfMenu = document.querySelector("#menuList");
let cartIcon = document.querySelector(".cart-icon");
let body = document.querySelector("body");
let closeCart = document.querySelector(".close");

cartIcon.addEventListener('click', () => {
    body.classList.toggle('showCart');
})
closeCart.addEventListener('click', () => {
    body.classList.remove('showCart');
})

let menuList = [];

const addMenuList = () => {
    listOfMenu.innerHTML = '';
    if(menuList.length > 0) {
        menuList.forEach(menu => {
            let newMenu = document.createElement("div");
            newMenu.classList.add("col-md-3", "py-3", "py-md-0", "card", "mb-4");
            newMenu.dataset.id = menu.id;
            newMenu.innerHTML = `
                <img src="${menu.image}" alt="">

                            <div class="card-body">
                                <div class="star text-center">
                                    <i class="fa-regular fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                </div>
                                <h3>${menu.name}</h3>
                                <p>$${menu.price}<span class="fa-solid fa-cart-shopping"></span></p>
                            </div>`;
                            listOfMenu.appendChild(newMenu)
        })
    }
}

const initApp = () => {
    fetch('menu.json')
    .then(response => response.json())
    .then(data => {
        menuList = data;
        addMenuList();
    })
}

initApp();