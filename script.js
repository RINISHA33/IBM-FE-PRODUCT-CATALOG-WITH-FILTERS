const products = [
    {
        id: 1,
        name: "Lenovo ThinkPad",
        category: "laptop",
        price: 750,
        image: "https://via.placeholder.com/300x200?text=Lenovo+Laptop"
    },
    {
        id: 2,
        name: "iPhone 14",
        category: "mobile",
        price: 999,
        image: "https://via.placeholder.com/300x200?text=iPhone+14"
    },
    {
        id: 3,
        name: "Samsung Galaxy",
        category: "mobile",
        price: 850,
        image: "https://via.placeholder.com/300x200?text=Samsung+Galaxy"
    },
    {
        id: 4,
        name: "Logitech Mouse",
        category: "accessory",
        price: 25,
        image: "https://via.placeholder.com/300x200?text=Logitech+Mouse"
    },
    {
        id: 5,
        name: "HP Pavilion",
        category: "laptop",
        price: 600,
        image: "https://via.placeholder.com/300x200?text=HP+Pavilion"
    },
    {
        id: 6,
        name: "Sony Headphones",
        category: "accessory",
        price: 120,
        image: "https://via.placeholder.com/300x200?text=Sony+Headphones"
    }
];

const productGrid = document.getElementById("productGrid");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const sortFilter = document.getElementById("sortFilter");

// Function to render products
function displayProducts(items) {
    productGrid.innerHTML = "";
    if (items.length === 0) {
        productGrid.innerHTML = "<p>No products found.</p>";
        return;
    }

    items.forEach((item) => {
        const card = document.createElement("div");
        card.classList.add("product-card");

        card.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <div class="info">
        <h3>${item.name}</h3>
        <p>Category: ${item.category}</p>
        <p class="price">$${item.price}</p>
      </div>
    `;
        productGrid.appendChild(card);
    });
}

// Function to filter products
function filterProducts() {
    let filtered = [...products];

    // Search filter
    const searchText = searchInput.value.toLowerCase();
    if (searchText) {
        filtered = filtered.filter(p =>
            p.name.toLowerCase().includes(searchText)
        );
    }

    // Category filter
    const category = categoryFilter.value;
    if (category !== "all") {
        filtered = filtered.filter(p => p.category === category);
    }

    // Sort filter
    const sortOption = sortFilter.value;
    if (sortOption === "lowToHigh") {
        filtered.sort((a, b) => a.price - b.price);
    } else if (sortOption === "highToLow") {
        filtered.sort((a, b) => b.price - a.price);
    }

    displayProducts(filtered);
}

// Event listeners
searchInput.addEventListener("input", filterProducts);
categoryFilter.addEventListener("change", filterProducts);
sortFilter.addEventListener("change", filterProducts);

// Initial render
displayProducts(products);