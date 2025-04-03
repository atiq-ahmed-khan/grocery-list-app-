// JavaScript for app functionality
document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.item');
    items.forEach(item => {
        item.addEventListener('click', function() {
            alert('Item added to shopping list: ' + this.querySelector('h2').innerText);
        });
    });
});
