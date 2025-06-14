const items = [
  {
    id: 1,
    name: "Wireless Mouse",
    price: 25.99,
    category: "Electronics",
    inStock: true,
    rating: 4.3,
    description:
      "Ergonomic wireless mouse with adjustable DPI and silent clicks.",
    brand: "LogiTech",
    imageUrl:
      "https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE=",
  },
  {
    id: 2,
    name: "Bluetooth Speaker",
    price: 45.0,
    category: "Audio",
    inStock: false,
    rating: 4.7,
    description:
      "Portable Bluetooth speaker with 10-hour battery life and deep bass.",
    brand: "JBL",
    imageUrl:
      "https://static-cse.canva.com/blob/1626008/ComposeStunningImages16.jpg",
  },
  {
    id: 3,
    name: "Coffee Mug",
    price: 9.5,
    category: "Kitchen",
    inStock: true,
    rating: 4.1,
    description: "Ceramic mug with a sleek matte finish, holds 350ml.",
    brand: "BrewHouse",
    imageUrl:
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/new-year-background-736885_1280.jpg",
  },
  {
    id: 4,
    name: "Notebook",
    price: 3.25,
    category: "Stationery",
    inStock: true,
    rating: 3.9,
    description: "A5 size notebook with 120 lined pages and durable cover.",
    brand: "PaperCraft",
    imageUrl:
      "https://thumbs.dreamstime.com/b/colorful-butterflies-light-up-enchanting-forest-night-colorful-butterflies-light-up-enchanting-forest-night-361440318.jpg",
  },
  {
    id: 5,
    name: "Water Bottle",
    price: 12.75,
    category: "Fitness",
    inStock: false,
    rating: 4.4,
    description:
      "Insulated stainless steel water bottle, keeps drinks cold for 24h.",
    brand: "HydroMate",
    imageUrl:
      "https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE=",
  },
  {
    id: 6,
    name: "Laptop Stand",
    price: 34.99,
    category: "Office",
    inStock: true,
    rating: 4.6,
    description: "Adjustable aluminum stand for laptops up to 17 inches.",
    brand: "StandPro",
    imageUrl:
      "https://static-cse.canva.com/blob/1626008/ComposeStunningImages16.jpg",
  },
  {
    id: 7,
    name: "LED Desk Lamp",
    price: 29.99,
    category: "Home",
    inStock: true,
    rating: 4.2,
    description: "Touch-sensitive LED desk lamp with 3 brightness levels.",
    brand: "BrightGlow",
    imageUrl:
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/new-year-background-736885_1280.jpg",
  },
  {
    id: 8,
    name: "Phone Charger",
    price: 15.99,
    category: "Electronics",
    inStock: false,
    rating: 4.0,
    description: "Fast-charging USB-C charger with 20W power output.",
    brand: "Anker",
    imageUrl:
      "https://thumbs.dreamstime.com/b/colorful-butterflies-light-up-enchanting-forest-night-colorful-butterflies-light-up-enchanting-forest-night-361440318.jpg",
  },
  {
    id: 9,
    name: "Yoga Mat",
    price: 19.95,
    category: "Fitness",
    inStock: true,
    rating: 4.5,
    description: "Non-slip yoga mat with 6mm cushioning and carry strap.",
    brand: "ZenFit",
    imageUrl:
      "https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE=",
  },
  {
    id: 10,
    name: "Sunglasses",
    price: 22.49,
    category: "Accessories",
    inStock: true,
    rating: 4.8,
    description: "UV400 polarized sunglasses with stylish matte black frame.",
    brand: "RaySun",
    imageUrl:
      "https://static-cse.canva.com/blob/1626008/ComposeStunningImages16.jpg",
  },
];

const root = document.getElementById("contentdiv");

function cards(items) {
  const cardDiv = document.createElement("div");
  cardDiv.style.border = "1px solid gray";
  cardDiv.style.padding = "10px";
  cardDiv.style.margin = "10px";
  cardDiv.style.width = "350px";
  cardDiv.style.height = "500px";
  cardDiv.style.display = "flex";
  cardDiv.style.flexDirection = "column";
  cardDiv.style.justifyContent = "center";
  cardDiv.style.alignItems = "center";
  cardDiv.style.gap = "2px";

  const cardName = document.createElement("h3");
  cardName.innerText = items.name;

  const cardPrice = document.createElement("p");
  cardPrice.innerText = items.price;

  const cardCategory = document.createElement("p");
  cardCategory.innerText = items.category;

  const cardStock = document.createElement("p");
  cardStock.innerText = items.inStock;

  const cardRating = document.createElement("p");
  cardRating.innerText = items.rating;

  const cardDescription = document.createElement("p");
  cardDescription.innerText = items.description;

  const cardBrand = document.createElement("p");
  cardBrand.innerText = items.brand;

  const cardImage = document.createElement("img");
  cardImage.src = items.imageUrl;
  cardImage.style.Width = "200px";
  cardImage.style.minWidth = "200px";
  cardImage.style.margin = "20px";
  cardImage.style.height = "150px";

  cardDiv.append(
    cardName,
    cardPrice,
    cardCategory,
    cardStock,
    cardRating,
    cardDescription,
    cardBrand,
    cardImage
  );
  return cardDiv;
}

items.forEach((items) => {
  const card = cards(items);
  root.append(card);
});

const rightBtn = document.querySelector("#buttons button:nth-child(1)");
const leftBtn = document.querySelector("#buttons button:nth-child(2)");

rightBtn.addEventListener("click", () => {
  root.scrollLeft -= 980;
});

leftBtn.addEventListener("click", () => {
  root.scrollLeft += 980;
});
