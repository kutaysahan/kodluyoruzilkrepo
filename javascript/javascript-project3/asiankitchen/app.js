const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img:
      "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img:
      "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img:
      "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img:
      "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img:
      "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img:
      "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img:
      "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img:
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];

// butonlari iceren alani secer.
let buttons = document.querySelector(".btn-container");

// butonlari iceren alanin icerigini duzenler.
buttons.innerHTML = `
  <button type="button" class="myBtn btn btn-light border border-dark m-1"
  onclick="showHomePage()">Home</button>
  <button type="button" class="myBtn btn btn-light border border-dark m-1"
    onclick="showAll()"
  >All</button>
  <button type="button" class="myBtn btn btn-light border border-dark m-1"  onclick="showKorea()">Korea</button>
  <button type="button" class="myBtn btn btn-light border border-dark m-1"  onclick="showJapan()">Japan</button>
  <button type="button" class="myBtn btn btn-light border border-dark m-1"  onclick="showChina()">China</button>
`;


// menunun gosterilecegi kismi secer.
let content = document.querySelector(".section-center");

content.innerHTML = `

  <div class="card text-center p-0">
    <img src="./images/cover.jpg" class="card-img-top img-fluid" alt="asian-food">
    <div class="card-body">
      <h5 class="card-title">Asian Kitchen</h5>
      <p class="card-text">Kategori kısmından menülerini inceleyebilirsiniz. Afiyet olsun! </p>
    </div>
  </div>
`;

// Ana sayfaya gider.
showHomePage = () => {
  
  content.innerHTML = `
    <div class="card text-center p-0">
      <img src="./images/cover.jpg" class="card-img-top img-fluid"  alt="asian-food">
      <div class="card-body">
        <h5 class="card-title">Asian Kitchen</h5>
        <p class="card-text">Kategori kısmından menülerini inceleyebilirsiniz.  Afiyet olsun! </p>
      </div>
    </div>
`;
}

// Butun menuleri gosterir.
showAll = () =>{

  content.innerHTML = ``;
  
  menu.forEach(item => {

    content.innerHTML += `

      <div class="col-md-12 col-lg-6 col-xl-6 d-flex mb-3">
        <div class="img">
          <img src="${item.img}" alt="food" 
          class="border border-dark rounded-2 mt-3"
          style="width: 200px; height:200px;">
        </div>

        <div class="rightContent m-3 w-100">

          <div class="title d-flex justify-content-between text-danger border-3 border-bottom">
            <h3>${item.title}</h3>
            <h3>${item.price}</h3>
          </div>

          <div class="desc">
            <p>${item.desc}</p>
          </div>
        </div>
      </div>

    `;

})};

// menu icerisinden kore yemegi olanlar secildi.
const koreaMenu = menu.filter(item => item.category === "Korea");


// kore menusunu gosterir.
showKorea = () => {

  content.innerHTML = ``;

  koreaMenu.forEach(item => {

    content.innerHTML += `
    
      <div class="col-md-12 col-lg-6 col-xl-6 d-flex mb-3">
      <div class="img">
        <img src="${item.img}" alt="food" 
        class="border border-dark rounded-2 mt-3"
        style="width: 200px; height:200px;">
      </div>

      <div class="rightContent m-3 w-100">

        <div class="title d-flex justify-content-between text-danger border-3   border-bottom">
          <h3>${item.title}</h3>
          <h3>${item.price}</h3>
        </div>

        <div class="desc">
          <p>${item.desc}</p>
        </div>
      </div>
    </div>
    
    `;

});
}

// menu icerisinden kore yemegi olanlar secildi.
const japanMenu = menu.filter( item => item.category === "Japan");

// kore menusunu gosterir.
showJapan = () => {    
  content.innerHTML = ``;

  japanMenu.forEach(item => {
    content.innerHTML += `
    
      <div class="col-md-12 col-lg-6 col-xl-6 d-flex mb-3">
      <div class="img">
        <img src="${item.img}" alt="food" 
        class="border border-dark rounded-2 mt-3"
        style="width: 200px; height:200px;">
      </div>

      <div class="rightContent m-3 w-100">

        <div class="title d-flex justify-content-between text-danger border-3   border-bottom">
          <h3>${item.title}</h3>
          <h3>${item.price}</h3>
        </div>

        <div class="desc">
          <p>${item.desc}</p>
        </div>
      </div>
    </div>
    
    `;
  });
}

// menu icerisinden kore yemegi olanlar secildi.
const chinaMenu = menu.filter( item => item.category === "China");

// kore menusunu gosterir.
showChina = () => {
  content.innerHTML = ``;

  chinaMenu.forEach(item=> {
    content.innerHTML += `
      <div class="col-md-12 col-lg-6 col-xl-6 d-flex mb-3">
      <div class="img">
        <img src="${item.img}" alt="food" 
        class="border border-dark rounded-2 mt-3"
        style="width: 200px; height:200px;">
      </div>

      <div class="rightContent m-3 w-100">

        <div class="title d-flex justify-content-between text-danger border-3     border-bottom">
          <h3>${item.title}</h3>
          <h3>${item.price}</h3>
        </div>

        <div class="desc">
          <p>${item.desc}</p>
        </div>
      </div>
    </div>
    
    `;
  });
  

}