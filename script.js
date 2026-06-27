const menuData = [
  // Lunch
    
  {
    name: "Veg Meals",
    category: "meals",
    price: "₹100",
    description: "A wholesome South Indian vegetarian meal served with rice, sambar, rasam, vegetables, curd, and accompaniments.",
    special: true,
    available: false,
    status: "Currently Unavailable",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400"
  },
  {
    name: "Non Veg Meals",
    category: "meals",
    price: "₹120",
    description: "A delicious non-vegetarian meal served with rice, chicken gravy, vegetables, and traditional side dishes.",
    special: true,
    available: false,
    status: "Currently Unavailable",
    image: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?w=400"
  },
  {
    name: "Chicken Biryani",
    category: "lunch",
    price: "₹120",
    description: "Fragrant basmati rice cooked with tender chicken and aromatic spices.",
    special: true,
    available: false,
    status: "Currently Unavailable",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400"
  },
  {
    name: "Mutton Biryani",
    category: "lunch",
    price: "₹240",
    description: "Flavorful biryani prepared with tender mutton and aromatic spices.",
    special: true,
    available: false,
    status: "Currently Unavailable",
    image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=400"
  },
  {
    name: "Chicken Gravy",
    category: "dinner",
    price: "₹120",
    description: "Tender chicken cooked in a rich and flavorful South Indian gravy.",
    special: true,
    available: false,
    status: "Currently Unavailable",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400"
  },
  {
    name: "Mutton Gravy",
    category: "dinner",
    price: "₹180",
    description: "Slow-cooked mutton in a rich and aromatic spicy gravy.",
    special: true,
    available: false,
    status: "Currently Unavailable",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400"
  },
  {
    name: "Chicken 65 Gravy",
    category: "dinner",
    price: "₹120",
    description: "Chicken 65 tossed in a spicy and flavorful gravy.",
    special: true,
    available: false,
    status: "Currently Unavailable",
    image: "https://images.unsplash.com/photo-1604908176997-4312d1b8cc09?w=400"
  },
  {
    name: "Chicken Sauce Gravy",
    category: "dinner",
    price: "₹100",
    description: "Juicy chicken cooked in a delicious spicy sauce-based gravy.",
    special: true,
    available: false,
    status: "Currently Unavailable",
    image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=400"
  },
  {
    name: "Pepper Chicken Gravy",
    category: "dinner",
    price: "₹120",
    description: "Pepper Chicken is a spicy South Indian dish made with tender chicken, freshly ground black pepper, aromatic spices, curry leaves, and onions.",
    special: true,
    available: false,
    status: "Currently Unavailable",
    image: "https://www.licious.in/blog/wp-content/uploads/2020/12/Pepper-Chicken.jpg"
  },
  {
    name: "Chinthamani Chicken",
    category: "dinner",
    price: "₹150",
    description: "A spicy Chettinad-style dry chicken dish packed with bold flavors.",
    special: true,
    available: false,
    status: "Currently Unavailable",
    image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=400"
  },
  {
    name: "Pallipalayam Chicken",
    category: "dinner",
    price: "₹150",
    description: "Traditional Kongu-style chicken prepared with coconut and red chilies.",
    special: true,
    available: false,
    status: "Currently Unavailable",
    image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=400"
  },
  {
    name: "Parotta",
    category: "bread",
    price: "₹20",
    description: "Soft and flaky South Indian layered flatbread.",
    special: false,
    available: false,
    status: "Currently Unavailable",
    image: "https://images.unsplash.com/photo-1613292443284-8d10ef938cd8?w=400"
  },
  {
    name: "Kothu Parotta",
    category: "bread",
    price: "₹80",
    description: "Shredded parotta stir-fried with spices and vegetables.",
    special: true,
    available: false,
    status: "Currently Unavailable",
    image: "https://images.unsplash.com/photo-1613292443284-8d10ef938cd8?w=400"
  },
  {
    name: "Ilai Parotta",
    category: "bread",
    price: "₹150",
    description: "Special banana leaf wrapped layered parotta.",
    special: true,
    available: false,
    status: "Currently Unavailable",
    image: "https://images.unsplash.com/photo-1613292443284-8d10ef938cd8?w=400"
  },
  {
    name: "Veechu Parotta",
    category: "bread",
    price: "₹40",
    description: "Thin and soft hand-stretched parotta.",
    special: false,
    available: false,
    status: "Currently Unavailable",
    image: "https://images.unsplash.com/photo-1613292443284-8d10ef938cd8?w=400"
  },
  {
    name: "Bun Parotta",
    category: "bread",
    price: "₹25",
    description: "Soft, fluffy and thick South Indian bun parotta.",
    special: false,
    available: false,
    status: "Currently Unavailable",
    image: "https://images.unsplash.com/photo-1613292443284-8d10ef938cd8?w=400"
  },
  {
    name: "Nool Parotta",
    category: "bread",
    price: "₹25",
    description: "Fine string parotta served soft and delicious.",
    special: false,
    available: false,
    status: "Currently Unavailable",
    image: "https://images.unsplash.com/photo-1613292443284-8d10ef938cd8?w=400"
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
    image: "https://images.unsplash.com/photo-1613292443284-8d10ef938cd8?w=400"
  },
  {
    name: "Sevai",
    category: "sevai",
    price: "₹40",
    description: "Traditional steamed rice noodles served with coconut and spices.",
    special: false,
    available: false,
    status: "Currently Unavailable",
    image: "https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=400"
  },
  {
    name: "Onion Sevai",
    category: "sevai",
    price: "₹50",
    description: "Rice sevai tossed with onions and mild spices.",
    special: false,
    available: false,
    status: "Currently Unavailable",
    image: "https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=400"
  },
  {
    name: "Paneer Sevai",
    category: "sevai",
    price: "₹80",
    description: "Soft rice sevai mixed with paneer and aromatic spices.",
    special: true,
    available: false,
    status: "Currently Unavailable",
    image: "https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=400"
  },
  {
    name: "Egg Sevai",
    category: "sevai",
    price: "₹60",
    description: "Rice sevai stir-fried with scrambled eggs and spices.",
    special: false,
    available: false,
    status: "Currently Unavailable",
    image: "https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=400"
  },
  {
    name: "Chapathi",
    category: "bread",
    price: "₹20",
    description: "Soft whole wheat flatbread served fresh.",
    special: false,
    available: false,
    status: "Currently Unavailable",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400"
  },
  {
    name: "Idly",
    category: "breakfast",
    price: "₹10",
    description: "Soft and fluffy steamed rice cakes served with chutney and sambar.",
    special: false,
    available: false,
    status: "Currently Unavailable",
    image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=400"
  },
  {
    name: "Podi Idly",
    category: "breakfast",
    price: "₹60",
    description: "Mini idlis tossed with flavorful podi and ghee.",
    special: true,
    available: false,
    status: "Currently Unavailable",
    image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=400"
  },
  {
    name: "Dosa",
    category: "breakfast",
    price: "₹20",
    description: "Classic crispy South Indian dosa.",
    special: false,
    available: false,
    status: "Currently Unavailable",
    image: "https://images.unsplash.com/photo-1630383249896-424e482df921?w=400"
  },
  {
    name: "Onion Dosa",
    category: "breakfast",
    price: "₹70",
    description: "Crispy dosa topped with fresh onions and spices.",
    special: true,
    available: false,
    status: "Currently Unavailable",
    image: "https://images.unsplash.com/photo-1630383249896-424e482df921?w=400"
  },
  {
    name: "Masala Dosa",
    category: "breakfast",
    price: "₹80",
    description: "Crispy dosa stuffed with spiced potato masala.",
    special: true,
    available: false,
    status: "Currently Unavailable",
    image: "https://images.unsplash.com/photo-1630383249896-424e482df921?w=400"
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
