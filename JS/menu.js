function submitOrder() {
    console.log("Submit button clicked");

    const items = document.querySelectorAll('.menu-item');
    const order = [];
    let isValid = true;

    items.forEach(item => {
        const itemName = item.querySelector('.menu-item-name').textContent;
        const quantity = parseInt(item.querySelector('.quantity').value);

        if (isNaN(quantity) || quantity <= 0) {
            alert(`Please enter a valid quantity for ${itemName}`);
            isValid = false;
            return;
        }

        order.push({ name: itemName, quantity: quantity });
    });

    if (isValid) {
        console.log("Order:", order);
        alert('Order has been successfully submitted!');
    } else {
        console.log("Order submission failed");
        alert('Order has not yet been submitted.');
    }
}
