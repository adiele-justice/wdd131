// scripts/filtered-temples.js

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Baton Rouge, Louisiana",
        location: "Baton Rouge,United States",
        dedicated: "16, July, 2000",
        area: 190000,
        imageUrl: "https://churchofjesuschrist.org/imgs/a75beca22300a3263bd47fba03b5b0d1b5ca0753/full/320%2C/0/default"
    },
    {
        templeName: "Stockholm Sweden",
        location: "Västerhaninge, Sweden",
        dedicated: "1985, July, 2",
        area: 21267,
        imageUrl: "https://churchofjesuschrist.org/imgs/32063b0e351e47f76db1a50009f685761f48524d/full/320%2C/0/default"
    },
    {
        templeName: "Sapporo Japan",
        location: "Atsubetsu-ku Sapporo, Japan",
        dedicated: "2016, August, 21",
        area: 53600,
        imageUrl: "https://churchofjesuschrist.org/imgs/c917995588e9c8d3ce881ebd32405150f9109fa7/full/320%2C/0/default"
    },
    {
        templeName: "São Paulo Brazil",
        location: "São Paulo - SP, Brazil",
        dedicated: "30, October, 1978",
        area: 21267,
        imageUrl: "https://churchofjesuschrist.org/imgs/940f3e201364433a3d5d3dc14b0cacee38d41d1d/full/320%2C/0/default"
    },
    {
        templeName: "Rexburg Idaho",
        location: "Rexburg Idaho, United States",
        dedicated: "2016, August, 21",
        area: 53600,
        imageUrl: "https://churchofjesuschrist.org/imgs/af036291e98a7caa26e051bd65e2a37176cbbf89/full/320%2C/0/default"
    }
    // Add other temple objects here...
];

function createTempleCard(temple) {
    return `
        <div class="temple-card">
            <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
            <div>
                <h2>${temple.templeName}</h2>
                <p>Location: ${temple.location}</p>
                <p>Dedicated: ${temple.dedicated}</p>
                <p>Area: ${temple.area.toLocaleString()} sq ft</p>
            </div>
        </div>
    `;
}

function displayTemples(filteredTemples) {
    const templeContainer = document.getElementById('templeContainer');
    templeContainer.innerHTML = filteredTemples.map(createTempleCard).join('');
}

function filterTemples(criteria) {
    let filteredTemples = [];
    switch(criteria) {
        case 'old':
            filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
            break;
        case 'new':
            filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
            break;
        case 'large':
            filteredTemples = temples.filter(temple => temple.area > 90000);
            break;
        case 'small':
            filteredTemples = temples.filter(temple => temple.area < 10000);
            break;
        default:
            filteredTemples = temples;
    }
    displayTemples(filteredTemples);
}

document.addEventListener('DOMContentLoaded', () => {
    filterTemples('all'); // Display all temples initially
    const currentYear = new Date().getFullYear();
    document.getElementById('currentyear').textContent = currentYear;
    document.getElementById('lastModified').textContent = "Last modified: " + document.lastModified;
});
