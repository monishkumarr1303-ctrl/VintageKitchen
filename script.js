const menuData = [
  // Lunch
 {
  name: "Mutton Gravy",
  category: "dinner",
  price: "₹180",
  description: "A rich and aromatic mutton curry slow-cooked with traditional spices, onions, and tomatoes. Perfect with parotta, rice, or dosa.",
  special: true,
  image: "https://via.placeholder.com/400?text=Mutton+Gravy"
},
{
  name: "Chicken 65 Gravy",
  category: "dinner",
  price: "₹120",
  description: "Spicy Chicken 65 cooked in a flavorful gravy with aromatic spices, making it a perfect side dish for parotta or rice.",
  special: false,
  image: "https://via.placeholder.com/400?text=Chicken+65+Gravy"
},
{
  name: "Chicken Sauce Gravy",
  category: "dinner",
  price: "₹100",
  description: "Tender chicken cooked in a deliciously seasoned sauce with onions, tomatoes, and aromatic spices.",
  special: false,
  image: "https://via.placeholder.com/400?text=Chicken+Sauce+Gravy"
},
{
  name: "Chinthamani Chicken",
  category: "dinner",
  price: "₹150",
  description: "A famous spicy South Indian dry chicken dish prepared with roasted spices, curry leaves, and fresh herbs.",
  special: true,
  image: "https://via.placeholder.com/400?text=Chinthamani+Chicken"
},
{
  name: "Pallipalayam Chicken",
  category: "dinner",
  price: "₹150",
  description: "Traditional Kongu-style chicken cooked with shallots, red chilies, coconut slices, and aromatic spices.",
  special: true,
  image: "https://via.placeholder.com/400?text=Pallipalayam+Chicken"
},
{
  name: "Kothu Parotta",
  category: "dinner",
  price: "₹80",
  description: "Flaky parotta chopped and stir-fried with eggs, onions, spices, and flavorful salna.",
  special: true,
  image: "https://via.placeholder.com/400?text=Kothu+Parotta"
},
{
  name: "Veechu Parotta",
  category: "dinner",
  price: "₹40",
  description: "A soft and flaky hand-stretched South Indian parotta served hot with delicious salna.",
  special: false,
  image: "https://via.placeholder.com/400?text=Veechu+Parotta"
},
{
  name: "Porucha Parotta",
  category: "dinner",
  price: "₹25",
  description: "A crispy pan-fried parotta with golden layers, best enjoyed with spicy gravy.",
  special: false,
  image: "https://via.placeholder.com/400?text=Porucha+Parotta"
},
{
  name: "Chilli Parotta",
  category: "dinner",
  price: "₹80",
  description: "Crispy parotta tossed with onions, capsicum, sauces, and spicy Indo-Chinese flavors.",
  special: true,
  image: "https://via.placeholder.com/400?text=Chilli+Parotta"
},
{
  name: "Sevai",
  category: "breakfast",
  price: "₹40",
  description: "Soft and steamed rice noodles served with coconut chutney or kurma.",
  special: false,
  image: "https://via.placeholder.com/400?text=Sevai"
},
{
  name: "Onion Sevai",
  category: "breakfast",
  price: "₹50",
  description: "Steamed sevai stir-fried with onions, spices, and curry leaves for a flavorful breakfast.",
  special: false,
  image: "https://via.placeholder.com/400?text=Onion+Sevai"
},
{
  name: "Paneer Sevai",
  category: "breakfast",
  price: "₹80",
  description: "Delicious sevai cooked with soft paneer cubes, vegetables, and aromatic spices.",
  special: true,
  image: "https://via.placeholder.com/400?text=Paneer+Sevai"
},
{
  name: "Egg Sevai",
  category: "breakfast",
  price: "₹60",
  description: "Rice sevai stir-fried with scrambled eggs, onions, and spices.",
  special: false,
  image: "https://via.placeholder.com/400?text=Egg+Sevai"
},
{
  name: "Chapathi",
  category: "dinner",
  price: "₹20",
  description: "Soft whole wheat flatbread served fresh with vegetable or non-vegetarian gravy.",
  special: false,
  image: "https://via.placeholder.com/400?text=Chapathi"
},
{
  name: "Idly",
  category: "breakfast",
  price: "₹10",
  description: "Soft, fluffy steamed rice cakes served with coconut chutney and hot sambar.",
  special: false,
  image: "https://via.placeholder.com/400?text=Idly"
},
{
  name: "Podi Idly",
  category: "breakfast",
  price: "₹60",
  description: "Mini idlis tossed in aromatic podi masala and ghee for an authentic South Indian taste.",
  special: true,
  image: "https://via.placeholder.com/400?text=Podi+Idly"
},
{
  name: "Plain Dosa",
  category: "breakfast",
  price: "₹20",
  description: "A crispy golden dosa served with coconut chutney and hot sambar.",
  special: false,
  image: "https://via.placeholder.com/400?text=Plain+Dosa"
},
{
  name: "Mushroom Dosa",
  category: "dinner",
  price: "₹90",
  description: "Crispy dosa stuffed with spicy mushroom masala and served with chutney and sambar.",
  special: true,
  image: "https://via.placeholder.com/400?text=Mushroom+Dosa"
},
{
  name: "Paneer Dosa",
  category: "dinner",
  price: "₹90",
  description: "A crispy dosa filled with flavorful paneer masala, served with chutney and sambar.",
  special: true,
  image: "https://via.placeholder.com/400?text=Paneer+Dosa"
},
{
  name: "Mutton Kari Dosa",
  category: "dinner",
  price: "₹120",
  description: "Traditional dosa topped with spicy minced mutton and egg, cooked to perfection.",
  special: true,
  image: "https://via.placeholder.com/400?text=Mutton+Kari+Dosa"
},
{
  name: "Ghee Dosa",
  category: "dinner",
  price: "₹90",
  description: "Golden crispy dosa roasted with pure ghee for a rich aroma and delicious taste.",
  special: false,
  image: "https://via.placeholder.com/400?text=Ghee+Dosa"
},
{
  name: "Egg Dosa",
  category: "dinner",
  price: "₹40",
  description: "Crispy dosa topped with freshly beaten egg and flavorful spices.",
  special: false,
  image: "https://via.placeholder.com/400?text=Egg+Dosa"
},
{
  name: "Uthappam",
  category: "breakfast",
  price: "₹25",
  description: "Soft and thick South Indian pancake served with chutney and sambar.",
  special: false,
  image: "https://via.placeholder.com/400?text=Uthappam"
},
{
  name: "Onion Uthappam",
  category: "breakfast",
  price: "₹25",
  description: "Fluffy uthappam topped with chopped onions, herbs, and aromatic spices.",
  special: false,
  image: "https://via.placeholder.com/400?text=Onion+Uthappam"
},
{
  name: "Omelette",
  category: "breakfast",
  price: "₹20",
  description: "Classic fluffy omelette prepared with fresh eggs, onions, and spices.",
  special: false,
  image: "https://via.placeholder.com/400?text=Omelette"
},
{
  name: "Half Boil",
  category: "breakfast",
  price: "₹20",
  description: "Perfectly cooked half-boiled eggs with a soft, creamy yolk.",
  special: false,
  image: "https://via.placeholder.com/400?text=Half+Boil"
},
{
  name: "One Side Omelette",
  category: "breakfast",
  price: "₹20",
  description: "Egg cooked on one side for a soft and delicious texture.",
  special: false,
  image: "https://via.placeholder.com/400?text=One+Side+Omelette"
},
{
  name: "Double Omelette",
  category: "breakfast",
  price: "₹40",
  description: "Two eggs cooked into a fluffy omelette with onions and spices.",
  special: true,
  image: "https://via.placeholder.com/400?text=Double+Omelette"
},
{
  name: "Kalaki",
  category: "breakfast",
  price: "₹20",
  description: "Soft, creamy scrambled egg prepared in the authentic South Indian style.",
  special: false,
  image: "https://via.placeholder.com/400?text=Kalaki"
},
{
  name: "Onion Kalaki",
  category: "breakfast",
  price: "₹20",
  description: "Creamy kalaki cooked with fresh onions and aromatic spices.",
  special: false,
  image: "https://via.placeholder.com/400?text=Onion+Kalaki"
},
{
  name: "Kulambu Kalaki",
  category: "breakfast",
  price: "₹20",
  description: "Soft kalaki served with flavorful South Indian kulambu gravy.",
  special: true,
  image: "https://via.placeholder.com/400?text=Kulambu+Kalaki"
},
{
  name: "Veg Fried Rice",
  category: "lunch & dinner",
  price: "₹100",
  description: "Fragrant rice stir-fried with fresh vegetables and aromatic sauces.",
  special: false,
  image: "https://via.placeholder.com/400?text=Veg+Fried+Rice"
},
{
  name: "Veg Fried Noodles",
  category: "lunch & dinner",
  price: "₹100",
  description: "Stir-fried noodles with fresh vegetables and flavorful sauces.",
  special: false,
  image: "https://via.placeholder.com/400?text=Veg+Fried+Noodles"
},
{
  name: "Egg Fried Rice",
  category: "lunch & dinner",
  price: "₹100",
  description: "Fried rice tossed with eggs, vegetables, and aromatic seasonings.",
  special: false,
  image: "https://via.placeholder.com/400?text=Egg+Fried+Rice"
},
{
  name: "Egg Fried Noodles",
  category: "lunch & dinner",
  price: "₹100",
  description: "Stir-fried noodles with eggs, vegetables, and delicious sauces.",
  special: false,
  image: "https://via.placeholder.com/400?text=Egg+Fried+Noodles"
},
{
  name: "Chicken Fried Rice",
  category: "lunch & dinner",
  price: "₹120",
  description: "Flavorful fried rice cooked with juicy chicken, vegetables, and aromatic spices.",
  special: true,
  image: "https://via.placeholder.com/400?text=Chicken+Fried+Rice"
},
{
  name: "Chicken Fried Noodles",
  category: "lunch & dinner",
  price: "₹120",
  description: "Stir-fried noodles with tender chicken, vegetables, and delicious sauces.",
  special: true,
  image: "https://via.placeholder.com/400?text=Chicken+Fried+Noodles"
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
        <span class="price">${item.price}</span>
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
