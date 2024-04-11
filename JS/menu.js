const menuItems = [
    { name: 'Pancakes', image: '/IMAGES/pancakes.webp', description: 'Fluffy Buttermilk Pancakes' },
    { name: 'Breakfast Tacos', image: '/IMAGES/breakfast tacos.jpg', description: 'Savory Breakfast Tacos' },
    { name: 'Oatmeal', image: '/IMAGES/oatmeal.jpg', description: 'Sweet Oats' },
    { name: 'Omelette', image: '/IMAGES/omelette.jpg', description: 'Healthy Omelette' },
    { name: 'Sandwich', image: '/IMAGES/sandwich.jpg', description: 'Grilled Chicken Sandwich' },
    { name: 'Garden Salad', image: '/IMAGES/salad.jpg', description: 'Fresh Garden Salad' },
    { name: 'Pizza', image: '/IMAGES/pizza.jpg', description: 'Pepperoni Pizza' },
    { name: 'Pasta', image: '/IMAGES/pasta.jpg', description: 'Tomato Cream Pasta' },
    { name: 'Fried Rice', image: '/IMAGES/fried_rice.jpg', description: 'Tasty Fried Rice' },
    { name: 'Steak', image: '/IMAGES/steak.jpg', description: 'Tender Steak and Fresh Brocolli' }
]

const menuContainer = document.getElementById('menuContainer');
menuItems.forEach(item => {
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');

    const itemName = document.createElement('span');
    itemName.textContent = item.name;
    menuItem.appendChild(itemName);

    const itemDescription = document.createElement('span');
    itemDescription.textContent = item.description;
    itemDescription.classList.add('menu-item-description');
    menuItem.appendChild(itemDescription);

    const itemImage = document.createElement('img');
    itemImage.src = item.image;
    menuItem.appendChild(itemImage);

    menuContainer.appendChild(menuItem);
});
