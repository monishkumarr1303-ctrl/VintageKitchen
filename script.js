const menuData = [
  // Lunch
      {
    name: "Chicken Biryani Buy 1 Get 1 Free",
    category: "lunch",
    price: "₹120",
    description: "Fragrant basmati rice cooked with tender chicken and aromatic spices.",
    special: true,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZExkLqeOoaMj61H-LtisTk-sc42eXDLVpJjfqoTH7V5BGAT4e3nIAz10&s=10"
  },
    {
    name: "Mutton Biryani Buy 2 Get 1 Free",
    category: "lunch",
    price: "₹240",
    description: "Flavorful biryani prepared with tender mutton and aromatic spices.",
    special: true,
    image: "https://www.kannammacooks.com/wp-content/uploads/Tamil-style-mutton-biryani-pic.jpg"
  },
    {
    name: "Non Veg Meals",
    category: "meals",
    price: "₹99",
    description: "A delicious non-vegetarian meal served with rice, chicken gravy, vegetables, and traditional side dishes.",
    special: true,
   
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHRfSfLvsbfGFARNf6-U0q8pV34CVl84RZXPgmcRgYxq3VwoP_6837q1qJ&s=10"
  },
  {
    name: "Veg Meals",
    category: "meals",
    price: "₹100",
    description: "A wholesome South Indian vegetarian meal served with rice, sambar, rasam, vegetables, curd, and accompaniments.",
    special: true,
    available: false,
    status: "Currently Unavailable",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhD0HRbgyt--wdjqMolJbGb0oBY7wMjqJ62JSqdJT0_TnepZEPS1LCn50&s=10"
  },



  {
    name: "Chicken Gravy",
    category: "dinner",
    price: "₹120",
    description: "Tender chicken cooked in a rich and flavorful South Indian gravy.",
    special: true,
    available: false,
    status: "Currently Unavailable",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR7u-61MxsfoKFBeMI34k7bB9VFSt7JV25auyeqpBlH3RXtjRQFPSlSwa8&s=10"
  },
  {
    name: "Mutton Gravy",
    category: "dinner",
    price: "₹180",
    description: "Slow-cooked mutton in a rich and aromatic spicy gravy.",
    special: true,
    available: false,
    status: "Currently Unavailable",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYPBzwyC-GX9zX-6_ULKHX1o2OKIsVJTu6I3ptwQzWxw&s=10"
  },
  {
    name: "Chicken 65 Gravy",
    category: "dinner",
    price: "₹120",
    description: "Chicken 65 tossed in a spicy and flavorful gravy.",
    special: true,
    available: false,
    status: "Currently Unavailable",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN_Uwiqb1sSWvHHDbvlsqjuRkbL2qJ9FQdMk8Fxw8-DZ7R6HRbyjHcM84&s=10"
  },
  {
    name: "Chicken Sauce Gravy",
    category: "dinner",
    price: "₹100",
    description: "Juicy chicken cooked in a delicious spicy sauce-based gravy.",
    special: true,
    available: false,
    status: "Currently Unavailable",
    image: "https://urbancowgirllife.com/wp-content/uploads/2024/08/chicen-and-gravy-recipe-9.jpg"
  },
  {
    name: "Pepper Chicken Gravy",
    category: "dinner",
    price: "₹120",
    description: "Pepper Chicken is a spicy South Indian dish made with tender chicken, freshly ground black pepper, aromatic spices, curry leaves, and onions.",
    special: true,
    available: false,
    status: "Currently Unavailable",
    image: "https://i.ytimg.com/vi/i3I9L9IzaSk/maxresdefault.jpg"
  },
  {
    name: "Chinthamani Chicken",
    category: "dinner",
    price: "₹150",
    description: "A spicy Chettinad-style dry chicken dish packed with bold flavors.",
    special: true,
    available: false,
    status: "Currently Unavailable",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeA8C-jTn7TqwztQto6ik0uAexRRIiFfHNyMpXVVZ09Pi1GBQw55VwNEE&s=10"
  },
  {
    name: "Pallipalayam Chicken",
    category: "dinner",
    price: "₹150",
    description: "Traditional Kongu-style chicken prepared with coconut and red chilies.",
    special: true,
    available: false,
    status: "Currently Unavailable",
    image: "https://i.pinimg.com/736x/76/a8/80/76a880cf5556586693def0eccfddc7f7.jpg"
  },
  {
    name: "Parotta",
    category: "bread",
    price: "₹20",
    description: "Soft and flaky South Indian layered flatbread.",
    special: false,
    available: false,
    status: "Currently Unavailable",
    image: "https://i0.wp.com/www.chitrasfoodbook.com/wp-content/uploads/2015/02/kerala-parotta.jpg?w=1200&ssl=1"
  },
  {
    name: "Kothu Parotta",
    category: "bread",
    price: "₹80",
    description: "Shredded parotta stir-fried with spices and vegetables.",
    special: true,
    available: false,
    status: "Currently Unavailable",
    image: "https://www.yummytummyaarthi.com/wp-content/uploads/2011/03/1.jpg"
  },
  {
    name: "Ilai Parotta",
    category: "bread",
    price: "₹150",
    description: "Special banana leaf wrapped layered parotta.",
    special: true,
    available: false,
    status: "Currently Unavailable",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVhR3ejjviRqWEL3MPz69drBAQEkNVhfir0b_y-SnS7k2v9doAeCfmi9yV&s=10"
  },
  {
    name: "Veechu Parotta",
    category: "bread",
    price: "₹40",
    description: "Thin and soft hand-stretched parotta.",
    special: false,
    available: false,
    status: "Currently Unavailable",
    image: "https://i0.wp.com/cookingfromheart.com/wp-content/uploads/2017/09/Ceylon-Parotta-5.jpg?resize=683%2C1024&ssl=1"
  },
  {
    name: "Bun Parotta",
    category: "bread",
    price: "₹25",
    description: "Soft, fluffy and thick South Indian bun parotta.",
    special: false,
    available: false,
    status: "Currently Unavailable",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtGFla_nSNWCoAy4InSphAPzgR9pgodwCsQzQ0l41IGhchxHak41-L6EFf&s=10"
  },
  {
    name: "Nool Parotta",
    category: "bread",
    price: "₹25",
    description: "Fine string parotta served soft and delicious.",
    special: false,
    available: false,
    status: "Currently Unavailable",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3mVasqPJhJgEnmIhL2InMA8RizVqNZvpxaLIPxtbC3aR9A9_I7lE4tig&s=10"
  },
  {
    name: "Porucha Parotta",
    category: "bread",
    price: "₹25",
    description: "Crispy pan-fried parotta with rich flavor.",
    special: false,
    available: false,
    status: "Currently Unavailable",
    image: "https://images.unsplash.com/photo-1613292443284-8d10ef938cd8?w=400"
  },
  {
    name: "Chilli Parotta",
    category: "bread",
    price: "₹80",
    description: "Spicy stir-fried parotta with onions and sauces.",
    special: true,
    available: false,
    status: "Currently Unavailable",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTruE8AeBH5q9B8YAZZkeC49Ibg_cUTifSSgzkDxUkd0maYC4RwyrCATEs&s=10"
  },
  {
    name: "Sevai",
    category: "sevai",
    price: "₹40",
    description: "Traditional steamed rice noodles served with coconut and spices.",
    special: false,
    available: false,
    status: "Currently Unavailable",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_UozppiPM_V2IoHJDqrkL-MeZNdSw2RgklQcAaZ0Ws9MPxZf373Jkl5V_&s=10"
  },
  {
    name: "Onion Sevai",
    category: "sevai",
    price: "₹50",
    description: "Rice sevai tossed with onions and mild spices.",
    special: false,
    available: false,
    status: "Currently Unavailable",
    image: "https://www.kannammacooks.com/wp-content/uploads/butter-sevai-recipe-1-2.jpg"
  },
  {
    name: "Paneer Sevai",
    category: "sevai",
    price: "₹80",
    description: "Soft rice sevai mixed with paneer and aromatic spices.",
    special: true,
    available: false,
    status: "Currently Unavailable",
    image: "https://b2958125.smushcdn.com/2958125/wp-content/uploads/butter-sevai-recipe-1-2.jpg?lossy=1&strip=1&webp=1"
  },
  {
    name: "Egg Sevai",
    category: "sevai",
    price: "₹60",
    description: "Rice sevai stir-fried with scrambled eggs and spices.",
    special: false,
    available: false,
    status: "Currently Unavailable",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ99Q2HhXhP998OHKiQUGc8gSx4zOpTSW49Hf75XH2LslcLrKOYlW5yTjQ&s=10"
  },
  {
    name: "Chapathi",
    category: "bread",
    price: "₹20",
    description: "Soft whole wheat flatbread served fresh.",
    special: false,
    available: false,
    status: "Currently Unavailable",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc8xNyozZyYO51Ptebe8UinXK-rCp_bF2fj1T5Bs_fzpMIF4OTGdpQaL1D&s=10"
  },
  {
    name: "Idly",
    category: "breakfast",
    price: "₹10",
    description: "Soft and fluffy steamed rice cakes served with chutney and sambar.",
    special: false,
    available: false,
    status: "Currently Unavailable",
    image: "https://t3.ftcdn.net/jpg/03/62/02/26/360_F_362022640_fZ6UM0JycJlFDdBiR1pYlNddKfdGvYwR.jpg"
  },
  {
    name: "Podi Idly",
    category: "breakfast",
    price: "₹60",
    description: "Mini idlis tossed with flavorful podi and ghee.",
    special: true,
    available: false,
    status: "Currently Unavailable",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiflWl2NHqNXLParVMKeqmrBhFv0bcaWxmh1wybbVwEoqbSCgiVK29yuE&s=10"
  },
  {
    name: "Dosa",
    category: "breakfast",
    price: "₹20",
    description: "Classic crispy South Indian dosa.",
    special: false,
    available: false,
    status: "Currently Unavailable",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrT3LxsUbbQM67wXl-YKKnKW7I1DLulYKy86hWB1PGxGbMf83ydfTRHjOG&s=10"
  },
  {
    name: "Onion Dosa",
    category: "breakfast",
    price: "₹70",
    description: "Crispy dosa topped with fresh onions and spices.",
    special: true,
    available: false,
    status: "Currently Unavailable",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_BSYEvNS6TB6vxzB9Yi4CTisKlhOSL55yDvvSnq5dIZR-EwrmPZlPGXiH&s=10"
  },
  {
    name: "Masala Dosa",
    category: "breakfast",
    price: "₹80",
    description: "Crispy dosa stuffed with spiced potato masala.",
    special: true,
    available: false,
    status: "Currently Unavailable",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvbskq5cxJNS2ypWRoZSN-gt4kHzB4Vqp9_XA0XuLCFDz_IiMymGZkOWs&s=10"
  },
  {
  name: "Mushroom Dosa",
  category: "breakfast",
  price: "₹90",
  description: "A crispy dosa filled with flavorful mushrooms, onions, and aromatic South Indian spices.",
  special: true,
  available: false,
  status: "Currently Unavailable",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbAQsyz_LzqDXGZxH5IEMk9f9Qhlh1nOPRPZgPzTBXcjrGXsJ7eZx3xT4-&s=10"
},
{
  name: "Paneer Dosa",
  category: "breakfast",
  price: "₹90",
  description: "A crispy dosa stuffed with soft paneer, fresh vegetables, and flavorful spices.",
  special: true,
  available: false,
  status: "Currently Unavailable",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwanN5bNOqLSoG1SLysS2qF2YOtbaux4shZhqqCEfV-CxidyxZS08juvkZ&s=10"
},
{
  name: "Chicken Kari Dosa",
  category: "breakfast",
  price: "₹120",
  description: "A crispy dosa topped with spicy minced chicken, onions, and traditional South Indian spices.",
  special: true,
  available: false,
  status: "Currently Unavailable",
  image: "https://images.unsplash.com/photo-1630383249896-424e482df921?w=400"
},
{
  name: "Mutton Kari Dosa",
  category: "breakfast",
  price: "₹120",
  description: "A delicious dosa layered with spicy minced mutton and aromatic spices for a rich flavor.",
  special: true,
  available: false,
  status: "Currently Unavailable",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbPnGhxhLfRma_ecdKDz6nikKKyat8hH_BO-o-xLGfi0UpjN6TtCzCS0gV&s=10"
},
{
  name: "Ghee Dosa",
  category: "breakfast",
  price: "₹90",
  description: "Golden crispy dosa roasted with pure ghee for a rich aroma and authentic taste.",
  special: true,
  available: false,
  status: "Currently Unavailable",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlp-Stpb8EidFEuEeb_u08a7G2ZYmvyPjdM609zFw1y4f9cKSFwQwYC-I&s=10"
},
{
  name: "Egg Dosa",
  category: "breakfast",
  price: "₹40",
  description: "A crispy dosa topped with a freshly beaten egg and seasoned with aromatic spices.",
  special: false,
  available: false,
  status: "Currently Unavailable",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaZcvyywz6c_jkwcPzCUnOVAAtvAmoiBciJ4gCJp72ZUOHYKzB7U-lJ1s&s=10"
},
{
  name: "Uthappam",
  category: "breakfast",
  price: "₹25",
  description: "A soft and thick South Indian pancake made from fermented rice and lentil batter.",
  special: false,
  available: false,
  status: "Currently Unavailable",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQckQ8bYYThqe4Jqc68Lh10fplXoXCHOETPW9KADgDQNNgc6ZrUF0kXPEE&s=10"
},
{
  name: "Onion Uthappam",
  category: "breakfast",
  price: "₹25",
  description: "Soft uthappam topped with freshly chopped onions, herbs, and flavorful spices.",
  special: false,
  available: false,
  status: "Currently Unavailable",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2EUUP5dPKRf928fj1O9ui0H3hc3Do5MUDDgoCUncd8o0YQtzYjWvw1YZR&s=10"
},
{
  name: "Omelette",
  category: "egg",
  price: "₹20",
  description: "A fluffy omelette prepared with fresh eggs, onions, green chilies, and herbs.",
  special: false,
  available: false,
  status: "Currently Unavailable",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThgdPSpn2chz5eo0zlpjh0H0-_kb4wtbzq4UkoZaEYKnzyZ7p84tWM4HM&s=10"
},
{
  name: "Half Boil Omelette",
  category: "egg",
  price: "₹20",
  description: "A perfectly cooked half-boiled egg with a soft and creamy yolk.",
  special: false,
  available: false,
  status: "Currently Unavailable",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUac6lIzmUWZ4dfB87_kwEfI4oaSCfika2g6o9TNB1xBgkyVDTH06rGoM&s=10"
},
{
  name: "One Side Omelette",
  category: "egg",
  price: "₹20",
  description: "A one-side cooked omelette with a soft texture and rich egg flavor.",
  special: false,
  available: false,
  status: "Currently Unavailable",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwjca2rAnYrQnbzJDwlj46fv90NTkWZxnhNo5dv77OeQ&s=10"
},
{
  name: "Double Omelette",
  category: "egg",
  price: "₹40",
  description: "A hearty double-egg omelette seasoned with onions, herbs, and spices.",
  special: true,
  available: false,
  status: "Currently Unavailable",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4h4ipf9CIU9JPWMg6b5KGOayw8xjj3cITP1CYKw6KiyWzXY8O-SRxx3I&s=10"
},
{
  name: "Kalakki",
  category: "egg",
  price: "₹20",
  description: "A soft and creamy scrambled egg prepared in traditional South Indian style.",
  special: false,
  available: false,
  status: "Currently Unavailable",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzfJecwHFSUmDCMal-S-K4j_8PX1vymiWKqYMbWfQqEFzQ8ETVyH2iOhWQ&s=10"
},
{
  name: "Onion Kalakki",
  category: "egg",
  price: "₹20",
  description: "Soft scrambled eggs mixed with onions, green chilies, and aromatic spices.",
  special: false,
  available: false,
  status: "Currently Unavailable",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7FiGjbHS4FhP6Hquftreer4o2-gZYp13SPqztKWs1BR23D4Ag3hz65D0&s=10"
},
{
  name: "Kulambu Kalakki",
  category: "egg",
  price: "₹20",
  description: "Traditional Kalakki served with flavorful South Indian kulambu for a delicious combination.",
  special: true,
  available: false,
  status: "Currently Unavailable",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGrcMxjGeXBDtB4WT9yORmVWTGfTpWoJa9KSaEIdfGvA&s=10"
},
{
  name: "Veg Fried Rice",
  category: "dinner",
  price: "₹100",
  description: "Aromatic fried rice tossed with fresh vegetables and flavorful seasonings.",
  special: false,
  available: false,
  status: "Currently Unavailable",
  image: "https://www.whiskaffair.com/wp-content/uploads/2018/11/Vegetable-Fried-Rice-2-3.jpg"
},
{
  name: "Veg Fried Noodles",
  category: "dinner",
  price: "₹100",
  description: "Stir-fried noodles with fresh vegetables and delicious Indo-Chinese flavors.",
  special: false,
  available: false,
  status: "Currently Unavailable",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWAikxdT3pOkR2Llm-Mvr1F9u6k7jOft05UwKc38ECQw&s"
},
{
  name: "Egg Fried Rice",
  category: "dinner",
  price: "₹100",
  description: "Flavorful fried rice tossed with scrambled eggs, vegetables, and aromatic seasonings.",
  special: false,
  available: false,
  status: "Currently Unavailable",
  image: ""
},
{
  name: "Egg Fried Noodles",
  category: "dinner",
  price: "₹100",
  description: "Stir-fried noodles mixed with eggs, vegetables, and savory sauces.",
  special: false,
  available: false,
  status: "Currently Unavailable",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQn7NW_pAbApwHS6hescj3i1gnAIUsgBEf6gLESkRmvg&s=10"
},
{
  name: "Chicken Fried Rice",
  category: "dinner",
  price: "₹120",
  description: "A delicious combination of fried rice, tender chicken pieces, and flavorful seasonings.",
  special: true,
  available: false,
  status: "Currently Unavailable",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3X3D3jceTqaoEQxfYVhXEo9mNI3dhynL-vWnHWoIakg&s=10"
},
{
  name: "Chicken Fried Noodles",
  category: "dinner",
  price: "₹120",
  description: "Stir-fried noodles tossed with juicy chicken, vegetables, and authentic Indo-Chinese sauces.",
  special: true,
  available: false,
  status: "Currently Unavailable",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWqzJLqQIq7zL0v6POh1BBa5zt5StUiVWkxA1DPpLbsQ&s=10"
}



  
];



function renderMenu(items) {
  const grid = document.getElementById('menuGrid');

  grid.innerHTML = items.map(item => `
    <div class="menu-item">
      <img src="${item.image}" alt="${item.name}" class="menu-item-image">

      ${item.special ? '<span class="special">Chef\'s Special</span>' : ''}

      <span class="category">${item.category.toUpperCase()}</span>

      <div class="menu-item-header">
        <h3>${item.name}</h3>

        ${
          item.available === false
            ? `<span class="unavailable">${item.status}</span>`
            : `<span class="price">${item.price}</span>`
        }

      </div>

      <p class="description">${item.description}</p>
    </div>
  `).join('');
}

function filterMenu(category) {
  const buttons = document.querySelectorAll('.filter-btn');
  buttons.forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');
  
  if (category === 'all') {
    renderMenu(menuData);
  } else {
    const filtered = menuData.filter(item => item.category === category);
    renderMenu(filtered);
  }
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Initial render
renderMenu(menuData);
