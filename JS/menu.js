document.addEventListener("DOMContentLoaded", function() {
    function renderOrderForm() {
        const menuItems = document.querySelectorAll('.menu-item');
        
        menuItems.forEach(item => {
            const itemName = item.querySelector('.menu-item-name').textContent;
            
            const quantityInput = document.createElement('input');
            quantityInput.setAttribute('type', 'number');
            quantityInput.setAttribute('class', 'quantity-input');
            quantityInput.setAttribute('min', '1');
            quantityInput.setAttribute('max', '10');
            quantityInput.setAttribute('value', '1');
            quantityInput.setAttribute('placeholder', 'Quantity');

            item.appendChild(quantityInput);
        });
    }

    function submitOrder() {
        const menuItems = document.querySelectorAll('.menu-item');
        const order = [];

        menuItems.forEach(item => {
            const itemName = item.querySelector('.menu-item-name').textContent;
            const quantity = parseInt(item.querySelector('.quantity-input').value);

            if (!isNaN(quantity) && quantity > 0) {
                order.push({ name: itemName, quantity: quantity });
            }
        });

        console.log("Order:", order);

        if (order.length > 0) {
            alert('Order has been successfully submitted!');
        } else {
            alert('Please select at least one item to order.');
        }
    }

    renderOrderForm();

    const submitButton = document.createElement('button');
    submitButton.textContent = 'Submit Order';
    submitButton.addEventListener('click', submitOrder);
    document.body.appendChild(submitButton);
});


