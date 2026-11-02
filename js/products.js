/* Menu data. The shop page and the wholesale enquiry form both read from this list.
   To add an item, add a new object here and put its image in the images/ folder. */
window.PRODUCTS = [
  { id: 'sourdough', name: 'Sourdough Loaf', category: 'bread', description: 'Slow-fermented for 24 hours.', price: 55, image: 'sourdough.jpg', alt: 'Sliced sourdough bread with an open crumb', wholesale: true },
  { id: 'rye', name: 'Rye Loaf', category: 'bread', description: 'Dense, dark rye with caraway seeds.', price: 60, image: 'rye.jpg', alt: 'Rye grains', wholesale: true },
  { id: 'baguette', name: 'Baguette', category: 'bread', description: 'Crisp crust, soft airy centre.', price: 35, image: 'baguette.jpg', alt: 'French baguette', wholesale: true },
  { id: 'almond-croissant', name: 'Almond Croissant', category: 'pastries', description: 'Buttery pastry filled with almond cream.', price: 38, image: 'almond-croissant.jpg', alt: 'Almond croissants dusted with sugar', wholesale: true },
  { id: 'cinnamon-roll', name: 'Cinnamon Roll', category: 'pastries', description: 'Soft roll with cinnamon sugar and icing.', price: 32, image: 'cinnamon-roll.jpg', alt: 'Cinnamon rolls with white icing', wholesale: true },
  { id: 'blueberry-muffin', name: 'Blueberry Muffin', category: 'pastries', description: 'Made with fresh blueberries.', price: 28, image: 'blueberry-muffin.jpg', alt: 'Two blueberry crumble muffins on a wooden stand', wholesale: true },
  { id: 'house-blend', name: 'House Blend Coffee', category: 'coffee', description: 'Locally roasted, ground fresh per order.', price: 32, image: 'coffee.jpg', alt: 'Latte with a leaf pattern in a white cup', wholesale: false },
  { id: 'coffee-beans', name: 'Coffee Beans (250g)', category: 'coffee', description: 'Take our house blend home with you.', price: 95, image: 'coffee-beans.jpg', alt: 'Coffee beans, ground coffee and a cup of black coffee', wholesale: true }
];
window.CATEGORY_LABELS = { bread: 'Bread', pastries: 'Pastries', coffee: 'Coffee' };
