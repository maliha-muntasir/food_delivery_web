// Array of additional item details
const additionalItems = [
    { image: "food1.png", name: "Pasta", price: "$14.00" },
    { image: "food_2.png", name: "Sushi Roll", price: "$18.00" },
    { image: "food_3.png", name: "Taco", price: "$10.00" },
    { image: "food_4.png", name: "Burrito", price: "$12.00" },
    { image: "food_5.png", name: "Steak", price: "$20.00" },
    { image: "food_6.png", name: "Salmon", price: "$16.00" }
  ];
  
  const additionalItemsContainer = document.getElementById("additionalItems");
  
  // Function to show more items
  function showMore() {
    // Clear existing items if any
    additionalItemsContainer.innerHTML = "";
  
    // Create and append additional item elements
    additionalItems.forEach(item => {
      const div = document.createElement("div");
      div.classList.add("internal_container");
      div.innerHTML = `
        <img src="${item.image}" alt="" class="Imag">
        <h4>${item.name}</h4>
        <p>${item.price}</p>
        <button onclick="addToCart('${item.name}', '${item.price}')">Add to cart</button>
      `;
      additionalItemsContainer.appendChild(div);
    });
  
    // Show the "See Less" button and hide the "More Details" button
    document.getElementById("moreDetails").style.display = "none";
    document.getElementById("seeLess").style.display = "block";
    additionalItemsContainer.style.display = "flex";
  }
  
  // Function to show less items
  function showLess() {
    // Clear additional items
    additionalItemsContainer.innerHTML = "";
  
    // Hide the additional items container and the "See Less" button
    additionalItemsContainer.style.display = "none";
    document.getElementById("seeLess").style.display = "none";
    document.getElementById("moreDetails").style.display = "block";
  }
  
  // Function to simulate adding an item to cart
  function addToCart(name, price) {
    console.log(`Added ${name} to cart for ${price}`);
    // Implement your cart logic here, e.g., updating cart total, storing in localStorage, etc.
  }
  