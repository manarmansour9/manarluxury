const products = [
  { 
    id:1, 
    title:"rhode lipgloss", 
    price:110, 
    category:"makeup", 
    img:"https://i.pinimg.com/736x/5f/b2/1f/5fb21f02581ae2292d3dc112815eea85.jpg", 
    desc:"Brightens and smooths skin.",
    colors: [
      { name:"Red", code:"#d32f2f", img:"https://www.rhodeskin.com/cdn/shop/files/guava-spritz-hero_8_1024x.jpg?v=1718244713" },
      { name:"Nude", code:"#c49a6c", img:"https://www.rhodeskin.com/cdn/shop/files/Hero-4-Mobile_1a691f4c-1ff4-4a2f-ae7c-41dd0aca8ef8_1800x.jpg?v=1695313199" },
      { name:"Pink", code:"#ec407a", img:"https://tse3.mm.bing.net/th/id/OIP.51cgKvI6U3ga5NbMfzBfRQHaKy?rs=1&pid=ImgDetMain&o=7&rm=3" }
    ]
  },
  { 
    id:2, 
    title:"HUDA BEAUTY POWDER", 
    price:87, 
    category:"makeup", 
    img:"https://tse4.mm.bing.net/th/id/OIP.sSvysAzDREKmNMXYCpiltQHaHa", 
    desc:"Brightens and smooths skin.",
    colors: [
      { name:"Light", code:"#f5d7b5", img:"https://th.bing.com/th/id/R.be239acd65025d2dbb120149dd72cd0e?rik=XC1BAi8trFu71g&riu=http%3a%2f%2fwww.yourglamlb.com%2fcdn%2fshop%2ffiles%2f61Kc_dP_0dL._AC_UL600_SR600_600.jpg%3fv%3d1714397205&ehk=m3QKCZFISJ%2f%2f6U2rrB5upDcJSwhFojUbNLE2gQ8bJlM%3d&risl=&pid=ImgRaw&r=0" },
      { name:"Medium", code:"#d2a679", img:"https://tse4.mm.bing.net/th/id/OIP._fHkcFXrLkyq8iRRdBxBuAAAAA?rs=1&pid=ImgDetMain&o=7&rm=3" },
      { name:"Dark", code:"#8d5c32", img:"https://tse1.mm.bing.net/th/id/OIP.RSTb4Z4CiuUaqVMQ_wYfIQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3" }
    ]
  },
  { 
    id:3, 
    title:"CHARLOUT TILBURY HOLLWOOD FLAWLES ", 
    price:65, 
    category:"makeup", 
    img:"https://tse2.mm.bing.net/th/id/OIP.ix2ZH16H5CrUzOVkO7gWIAHaI4", 
    desc:"Brightens and smooths skin.",
    colors: [
      { name:"01", code:"#fce0c8", img:"https://tse2.mm.bing.net/th/id/OIP.WaaJ_7M4Ub12I1o462KtagHaJ4?rs=1&pid=ImgDetMain&o=7&rm=3" },
      { name:"02", code:"#d2a679", img:"https://images.glambot.com/f5992f6bb553641ead3f8e56a0ba952a?" },
      { name:"03", code:"#8d5c32", img:"https://m.media-amazon.com/images/I/61tcW24aNOL.jpg" }
    ]
  },
  { id:4, title:"RARE BEAUTY BLUSHER", price:100, category:"makeup", img:"https://th.bing.com/th/id/OIP.qEfia6seixHcxzARMTzliAHaNK?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3", desc:"Brightens and smooths skin." }, 
  { id:5, title:"THE ORDANIRY PRODUCTS", price:95, category:"skincare", img:"https://tse1.mm.bing.net/th/id/OIP._tftRjeOCieAtr2rUA69WwHaHm?rs=1&pid=ImgDetMain&o=7&rm=3", desc:"Brightens and smooths skin." }, 
  { id:6, title:"benifit 4 mini kit", price:45, category:"makeup", img:"https://th.bing.com/th/id/R.e65835a920b248ccb8d536eb655ff1de?rik=nmFjwJR2bHb9OQ&pid=ImgRaw&r=0", desc:"mini kit of best seller." }, 
  { id:7, title:"bang bang mascara", price:35, category:"makeup", img:"https://tse4.mm.bing.net/th/id/OIP.t4T_NCK_8OMWsZcUSapLVQHaHa?w=1200&h=1200&rs=1&pid=ImgDetMain&o=7&rm=3", desc:"best volume and length ." }, 
  { id:8, title:"ELIE SAAB", price:150, category:"perfume", img:"https://tse3.mm.bing.net/th/id/OIP.dRe-tQjXf4C8DEH_1YFQfgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3", desc:" for luxury and feminin smell." }, 
  { id:9, title:"gucci floral", price:85, category:"perfume", img:"https://tse3.mm.bing.net/th/id/OIP.LeSTpe8dT-FEkJUlzZU7LAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3", desc:"rose and floral smell." }, 
  { id:10, title:"BACARAT ROUGH", price:200, category:"perfume", img:"https://tse1.mm.bing.net/th/id/OIP.6KDoHBzpiCsaVMqKyk_eDAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3", desc:"feminin and good smell." }, 
  { id:11, title:"ysl libre", price:145, category:"perfume", img:"https://tse4.mm.bing.net/th/id/OIP.u3TfR_u1XRSB_N9goSTEbwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3", desc:"strong , feminin smell." }, 
  { id:12, title:"LANGIN ", price:25, category:"skincare", img:"https://th.bing.com/th/id/R.841237b582e6cc425b8ce9df1718a38d?rik=252oht%2f2V8VIQA&pid=ImgRaw&r=0", desc:"LIP GLOWY PALM." }, 
  { id:13, title:"CLINIQUE", price:65, category:"skincare", img:"https://th.bing.com/th/id/R.cb1c033a9d30fd5060cfcf8e3315c1e5?rik=rpTgfz8D4bCUEA&riu=http%3a%2f%2fbpc.h-cdn.co%2fassets%2f16%2f24%2f1600x800%2flandscape-1465933706-clinique-makeup-skincare.jpg&ehk=y%2fSLzGXu%2bOaEgy6fyo7A8c8k%2fXaVlK9g2zwNWL6x7Jg%3d&risl=&pid=ImgRaw&r=0", desc:"19 product from Clinique." }, 
  { id:14, title:"NARS foundation", price:79, category:"makeup", img:"https://www.refinery29.com/images/10015361.jpg", desc:"flawles skin and full coverage" }, 
  { id:15, title:"NARS BLUSHR", price:53, category:"makeup", img:"https://tse2.mm.bing.net/th/id/OIP.X4mw_XNiA2P3_Lb7-0SdDAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3", desc:"Brightens and smooths skin." }, 
  { id:16, title:"NARS LIPSTIK", price:53, category:"makeup", img:"https://i5.walmartimages.com/asr/cc46db69-cb1a-46b5-b91a-040816f19474_1.a1519ecfa9f73feded71ec94e038d01f.jpeg", desc:"Brightens and smooths lips and stay for 8 hours." } 
];

const grid = document.getElementById('productsGrid');
const template = document.getElementById('productCardTemplate');
const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');
const minPrice = document.getElementById('minPrice');
const sortSelect = document.getElementById('sortSelect');
const clearFiltersBtn = document.getElementById('clearFilters');
const cartCountSpan = document.getElementById('cartCount');
const cartBtn = document.getElementById('cartBtn');

function getCart(){ return JSON.parse(localStorage.getItem('cart')||'[]') }
function saveCart(c){ localStorage.setItem('cart', JSON.stringify(c)); updateCartCount(); }
function updateCartCount(){ const c=getCart().reduce((s,i)=>s+i.qty,0); cartCountSpan.textContent=c; }

function renderProducts(items){
  grid.innerHTML='';
  if(items.length===0){ grid.innerHTML = '<p>No products match your search.</p>'; return; }
  items.forEach(p=>{
    const node = template.content.cloneNode(true);
    const img = node.querySelector('.p-image');
    img.src = p.img;
    img.alt = p.title;
    img.dataset.selectedColor = p.colors ? p.colors[0].name : "";

    node.querySelector('.p-title').textContent = p.title;
    node.querySelector('.p-price').textContent = "$" + p.price;

    // لو المنتج عنده درجات (colors)
    if(p.colors){
      const colorContainer = document.createElement("div");
      colorContainer.classList.add("color-options");

      p.colors.forEach(color=>{
        const circle = document.createElement("span");
        circle.classList.add("color-circle");
        circle.style.backgroundColor = color.code;

        circle.addEventListener("click", ()=>{
          img.src = color.img;
          img.dataset.selectedColor = color.name;
        });

        colorContainer.appendChild(circle);
      });

      node.querySelector(".p-info").appendChild(colorContainer);
    }

    node.querySelector('.view-btn').addEventListener('click', ()=> openProduct(p.id));
    node.querySelector('.add-btn').addEventListener('click', ()=> addToCart(p.id, img.dataset.selectedColor));
    grid.appendChild(node);
  });
}

function addToCart(id, color){
  const cart = getCart();
  const item = cart.find(x=>x.id===id && x.color===color);
  if(item) item.qty++;
  else { cart.push({ id, qty:1, color:color||null }); }
  saveCart(cart);
  alert('Product added to cart ✔');
}

function openProduct(id){
  window.location.href = `product.html?id=${id}`;
}

function applyFilters(){
  let items = [...products];
  const q = searchInput.value.trim().toLowerCase();
  if(q) items = items.filter(p => p.title.toLowerCase().includes(q) || (p.desc && p.desc.toLowerCase().includes(q)));
  const cat = categoryFilter.value;
  if(cat !== 'all') items = items.filter(p => p.category===cat);
  const min = parseFloat(minPrice.value);
  if(!isNaN(min)) items = items.filter(p => p.price >= min);
  const sort = sortSelect.value;
  if(sort === 'price-asc') items.sort((a,b)=>a.price-b.price);
  if(sort === 'price-desc') items.sort((a,b)=>b.price-a.price);
  renderProducts(items);
}

searchInput.addEventListener('input', applyFilters);
categoryFilter.addEventListener('change', applyFilters);
minPrice.addEventListener('input', applyFilters);
sortSelect.addEventListener('change', applyFilters);
clearFiltersBtn.addEventListener('click', ()=>{
  searchInput.value=''; categoryFilter.value='all'; minPrice.value=''; sortSelect.value='default'; applyFilters();
});

cartBtn.addEventListener('click', ()=> window.location.href = 'cart.html');

updateCartCount();
renderProducts(products);




