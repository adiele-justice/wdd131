// scripts/getdates.js

// Dynamically populate current year
const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentYear;

// Dynamically populate last modified date
document.getElementById('lastModified').textContent = "Last modified: " + document.lastModified;

