window.addEventListener("DOMContentLoaded", function () {
  const menuItemsData = [
    { name: "Spaghetti Carbonara", price: "$12.99" },
    { name: "Grilled Salmon", price: "$15.99" },
    { name: "Chicken Caesar Salad", price: "$10.99" },
    { name: "Margherita Pizza", price: "$11.99" },
    { name: "Beef Burger", price: "$9.99" },
    { name: "Vegetable Stir Fry", price: "$8.99" },
  ];

  const menuItemsContainer = document.querySelector("#menuItems");
  const fragment = new DocumentFragment();

  // Template element for menu item
  const menuItemTemplate = document.createElement("template");
  menuItemTemplate.innerHTML = `
          <div class="menu-item">
              <h3></h3>
              <p></p>
          </div>
      `;

  // Create menu items from data and append to fragment
  menuItemsData.forEach((itemData) => {
    const menuItem = menuItemTemplate.content.cloneNode(true);
    menuItem.querySelector("h3").textContent = itemData.name;
    menuItem.querySelector("p").textContent = itemData.price;
    fragment.appendChild(menuItem);
  });

  // Append fragment to menu items container
  menuItemsContainer.appendChild(fragment);

  // Event listener for form submission
  document
    .getElementById("reservationForm")
    .addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent default form submission behavior
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const reservationStatus = document.getElementById("reservationStatus");
      reservationStatus.innerHTML = `<p>Thank you, ${name}! Your reservation has been made. We'll send a confirmation email to ${email} shortly.</p>`;
    });

  // Event listener for menu item click
  menuItemsContainer.addEventListener("click", function (event) {
    const clickedMenuItem = event.target.closest(".menu-item");
    if (clickedMenuItem) {
      // Add border to parent container
      menuItemsContainer.style.border = "2px dashed red";
    }
  });

  // Highlight first and last menu items
  const firstMenuItem = menuItemsContainer.firstChild;
  if (firstMenuItem) {
    firstMenuItem.style.backgroundColor = "#e0e0e0";
    setTimeout(() => {
      firstMenuItem.style.backgroundColor = "";
    }, 3000);
  }
  // Highlight the next menu item if it exists
  const nextMenuItem = clickedMenuItem.nextElementSibling;
  if (nextMenuItem) {
    nextMenuItem.style.backgroundColor = "#e0e0e0";
    setTimeout(() => {
      nextMenuItem.style.backgroundColor = "";
    }, 1000);
  }
  // Prepend a notice at the beginning of the menu
  const notice = document.createElement("div");
  notice.innerHTML = "<p>Check out our special of the day!</p>";
  menuItemsContainer.prepend(notice);
});
