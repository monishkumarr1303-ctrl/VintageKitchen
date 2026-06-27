const menuData = [
  // Lunch
    {
    name: "Chicken Biryani",
    category: "lunch",
    price: "₹120",
    description: "A flavorful feast of juicy chicken, fragrant rice, and rich spices.",
    special: true,
      available: false,
status: "Currently Unavailable",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400"
  },
  {
    name: "Mutton Briyani",
    category: "lunch & Dinner",
    price: "₹240",
    description: "A rich and flavorful biryani made with succulent mutton and premium spices",
    special: true,
    available: false,
status: "Currently Unavailable",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFV233WEI757qC8mqOGajVXdrQpDYobFYij2n6-wXgKw&s=10"
  },
  {
    name: "Non-Veg Meals",
    category: "lunch",
    price: "₹99",
    description: "A complete South Indian feast featuring flavorful non-veg dishes and accompaniments",
    special: false,
    available: false,
status: "Currently Unavailable",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEUd-CLxH9789qFB9GdfFVUYWmZelu9biYOHG3ylZvhg&s=10"
  },
  {
    name: "parotta",
    category: "lunch & Dinner",
    price: "₹20",
    description: "Parotta is a popular South Indian layered flatbread made from refined wheat flour. It is soft, flaky, and crispy on the outside, typically served with salna, chicken curry, mutton curry, or vegetarian gravies",
    special: true,
    available: false,
    status: "Currently Unavailable",
    image: "https://i.pinimg.com/474x/a4/84/22/a4842242d724a6814d167df1bdbed934.jpg"
  },
  {
     name: "Chicken Fried Rice",
  category: "lunch & dinner",
  price: "₹120",
  description: "Flavorful fried rice cooked with juicy chicken, vegetables, and aromatic spices.",
  special: true,
  available: false,
  status: "Currently Unavailable",
    image: "https://i.ytimg.com/vi/rcbCY26CLX4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLC7qkR4bga9j2VQyiIpCKTyWJWj_A"
  },
  {
    name: "Bun parotta",
    category: "lunch & Dinner",
    price: "₹25",
    description: "Bun Parotta is a soft, thick, and fluffy South Indian layered flatbread with a golden, crispy exterior and a light, buttery texture. It pairs perfectly with salna, chicken curry, mutton curry, or vegetarian gravies.",
    special: false,
    available: false,
status: "Currently Unavailable",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFrm88HPxaUgsrSiJ5fNcAlDAZ9ZlhHqYpenEIXqM4-Gpo8KgMN_z4Apov&s=10"
  },
  {
    name: "Grill Chicken",
    category: "lunch & Dinner",
    price: "₹400",
    description: "Grill Chicken is tender, juicy chicken marinated with aromatic herbs, spices, and seasonings, then grilled to perfection for a smoky, flavorful taste.",
    special: false,
    available: false,
status: "Currently Unavailable",
    image: "https://www.seriouseats.com/thmb/Xg3PF38VgjCJ84927mLRBorlMoU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/SEA-the-best-barbecue-chicken-recipe-hero-updated-9cb214fe8fe8438992e049f8be51a708.jpg"
  },
  {
    name: "Masala Dosa",
    category: "Dinner",
    price: "₹40",
    description: "Masala Dosa is a classic South Indian dish featuring a crispy, golden dosa filled with a flavorful potato masala, served with fresh coconut chutney and hot sambar.",
    special: false,
    available: false,
status: "Currently Unavailable",
    image: "https://static.toiimg.com/thumb/54289752.cms?imgsize=495844&width=800&height=800"
  },
  {
    name: "Oninon Dosa",
    category: "Dinner",
    price: "₹40",
    description: "Onion Dosa is a crispy South Indian dosa topped with freshly chopped onions, aromatic spices, and herbs, offering a flavorful and satisfying bite.",
    special: true,
    available: false,
status: "Currently Unavailable",
    image: "https://i0.wp.com/www.chitrasfoodbook.com/wp-content/uploads/2018/02/onion-uthappam.jpg?fit=500%2C553&ssl=1"
  },


  // Dinner
  {
    name: "Veg Meals",
    category: "Lunch",
    price: "₹80",
    description: "Veg Meals is a wholesome South Indian meal featuring steamed rice, sambar, rasam, vegetable curries, poriyal, curd, pickle, papad, and other traditional accompaniments.",
    special: false,
    available: false,
status: "Currently Unavailable",
    image: "https://img.clevup.in/268918/1666623878932_SKU-0001_2.jpeg?width=600&format=webp"
  },
  {
    name: "Vazha Ellai Parotta",
    category: "dinner",
    price: "₹140",
    description: "Vazha Ellai Parotta is a soft, flaky South Indian parotta served fresh on a traditional banana leaf, enhancing its authentic aroma and flavor. Best enjoyed with salna or your favorite curry.",
    special: false,
    available: false,
status: "Currently Unavailable",
    image: "https://i.pinimg.com/736x/80/14/a8/8014a85074524ed4b9ab2f3e3f5dcd04.jpg"
  },
  {
    name: "Pepper Chicken",
    category: "dinner",
    price: "₹120",
    description: "Pepper Chicken is a spicy South Indian dish made with tender chicken, freshly ground black pepper, aromatic spices, curry leaves, and onions, delivering a bold and flavorful taste.",
    special: true,
    available: false,
status: "Currently Unavailable",
    image: "https://www.licious.in/blog/wp-content/uploads/2020/12/Pepper-Chicken.jpg"
  },
  {
    name: "Chicken gravy",
    category: "dinner",
    price: "₹120",
    description: "Chicken Gravy is a rich and flavorful curry made with tender chicken simmered in a blend of aromatic spices, onions, tomatoes, and herbs. Perfect with parotta, rice, naan, or chapati.",
    special: true,
    available: false,
status: "Currently Unavailable",
    image: "https://spiceeats.com/wp-content/uploads/2020/07/Chicken-Hyderabadi.jpg"
  },
  {
    name: "Chicken Chilli 100g",
    category: "dinner",
    price: "₹80",
    description: "Chilli Chicken is a popular Indo-Chinese dish made with crispy chicken pieces tossed in a spicy, tangy sauce with onions, capsicum, garlic, and green chilies.",
    special: false,
    available: false,
status: "Currently Unavailable",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAFuZHNsnNBdMC7owRlLHziUSkCa4ebQJE36PavLTRuPhl9QTL7HBwETk&s=10"
  },
  {
    name: "Chicken Noodles",
    category: "lunch & dinner",
    price: "₹",
    description: "Chicken Noodles is a flavorful dish made with stir-fried noodles, tender chicken, fresh vegetables, and aromatic sauces for a delicious and satisfying meal.",
    special: true,
    available: false,
status: "Currently Unavailable",
    image: "https://i.ytimg.com/vi/AthGc8rDtHc/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBKCIUxnMEG2RckocssDomFLdjmLA"
  },
  {
    name: "Kari Dosa",
    category: "dinner",
    price: "₹120",
    description: "Kari Dosa is a traditional South Indian dosa topped with flavorful minced mutton (kari), onions, spices, and egg, cooked to crispy perfection for a rich and satisfying taste.",
    special: true,
    available: false,
status: "Currently Unavailable",
    image: "https://media-assets.swiggy.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/b60206a5acde6ce653079d2fdfe537c4"
  },
  {
    name: "Nool Parotta",
    category: "dinner",
    price: "₹30",
    description: "Nool Parotta is a soft and delicate South Indian flatbread made with thin, thread-like layers, offering a light texture that pairs perfectly with salna, chicken gravy, or mutton curry.",
    special: false,
    available: false,
status: "Currently Unavailable",
    image: "https://5.imimg.com/data5/SELLER/Default/2026/2/586720916/LY/RH/WL/70041647/80g-nool-paratha.jpg"
  },

  
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
