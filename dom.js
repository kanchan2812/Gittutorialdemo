// Wait for the DOM content to be fully loaded before manipulating it
document.addEventListener('DOMContentLoaded', function() {
    // Get the list of items (ul element) by its ID
    const itemsList = document.getElementById('items');
  
    // Get all the list items (li elements) within the list
    const items = itemsList.getElementsByTagName('li');
  
    // Make the 3rd element (index 2) have a green background color
    if (items.length >= 3) {
      items[2].style.backgroundColor = 'green';
    }
  
    // Make all elements in the list have bold font
    for (let i = 0; i < items.length; i++) {
      items[i].style.fontWeight = 'bold';
    }
  });
  
