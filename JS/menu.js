function submitOrder() {
    const items = document.querySelectorAll('.menu-item');
    const order = [];
    let isValid = true;
    
    items.forEach(item => {
        const itemName = item.querySelector('.menu-item-name').textContent;
        const quantity = parseInt(item.querySelector('.quantity').value);

        if (isNaN(quantity) || quantity <= 0){
            alert('Please enter a valid quantity for ${itemName}');
            isValid = false;
            return;
        }
        order.push({ name: itemName, quantity: quantity});
    });
    if (isValid){
        console.log(order);
        alert('Order has been successfully submitted!')
    } else{
        alert('Order has not yet been submitted.')
    }
}