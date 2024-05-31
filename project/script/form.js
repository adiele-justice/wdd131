// Dynamically populate Product Name options
document.addEventListener("DOMContentLoaded", function() {
  const products = [
      {
          id: "fc-1888",
          name: "flux capacitor",
          averageRating: 4.5
      },
      {
          id: "fc-2050",
          name: "power laces",
          averageRating: 4.7
      },
      {
          id: "fs-1987",
          name: "time circuits",
          averageRating: 3.5
      },
      {
          id: "ac-2000",
          name: "low voltage reactor",
          averageRating: 3.9
      },
      {
          id: "jj-1969",
          name: "warp equalizer",
          averageRating: 5.0
      },
  ];

  const productNameSelect = document.getElementById("productName");

  products.forEach(product => {
      const option = document.createElement("option");
      option.value = product.id;
      option.textContent = product.name;
      productNameSelect.appendChild(option);
  });

  // Counter using localStorage
  if (localStorage.getItem("reviewCounter")) {
      let counter = parseInt(localStorage.getItem("reviewCounter"));
      counter++;
      localStorage.setItem("reviewCounter", counter);
  } else {
      localStorage.setItem("reviewCounter", 1);
  }

  // Dynamically populate current year
  const currentYear = new Date().getFullYear();
  document.getElementById('currentyear').textContent = currentYear;

  // Dynamically populate last modified date
  document.getElementById('lastModified').textContent = "Last modified: " + document.lastModified;
});
