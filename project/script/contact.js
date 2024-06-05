
const skaters = [
    {
        imageUrl: "https://media.istockphoto.com/id/1423341981/photo/skateboarder-doing-a-trick-in-a-skate-park.jpg?s=612x612&w=0&k=20&c=7SwufIr-e13hSm9SwuP9P_4jqEljucAgFKCPuoBJa3k="
    },
    {
        imageUrl: "https://media.istockphoto.com/id/1457390176/photo/skateboard-fashion-or-man-with-arms-crossed-in-city-skate-park-for-stunt-training-hobby.jpg?s=612x612&w=0&k=20&c=Fa41Ldo7st2hJgwmr1PqaIBgOEtmtYGyLEg3PBrhWD0="
    },
    {
        imageUrl: "https://media.istockphoto.com/id/1490494924/photo/asian-woman-skateboarder-skateboarding-in-modern-city.jpg?s=612x612&w=0&k=20&c=rspZkZNWu-w0NGYtYOEHEGDIgsRf6p_8ts0ivp2xfU4="
    },
    {
        imageUrl: "https://media.istockphoto.com/id/1457387201/photo/portrait-skateboard-and-skater-man-in-city-street-or-skate-park-ready-for-skating-practice.jpg?s=612x612&w=0&k=20&c=rLTJyJHFo0orSqy44pbeE6A4YQdjl9BQoS8Ww7fxVAQ="
    },
    {
        imageUrl: "https://media.istockphoto.com/id/1428527586/photo/skateboard-leaning-on-curb-box-with-coffee-cup-and-helmet-on-top-of-it.jpg?s=612x612&w=0&k=20&c=0jMd_C3R6vRDE_oabJF5H9GVvYng-HAbBoBUbsIW5rc="
    },
    {
        imageUrl: "https://media.istockphoto.com/id/1440221456/photo/skater-jumping-over-camera.jpg?s=612x612&w=0&k=20&c=Mx7xwomO4jyBCu9uxbpFGHSOtAXnyc6AefsOaflJuMk="
    },
];

document.addEventListener("DOMContentLoaded", function() {
    const skaterImagesContainer = document.getElementById("skaterImages");

    skaters.forEach(skater => {
        const img = document.createElement("img");
        img.src = skater.imageUrl;
        img.alt = "Skater";
        skaterImagesContainer.appendChild(img);
    });
});

// Counter using localStorage
if (localStorage.getItem("reviewCounter")) {
    let counter = parseInt(localStorage.getItem("reviewCounter"));
    counter++;
    localStorage.setItem("reviewCounter", counter);
} else {
    localStorage.setItem("reviewCounter", 1);
}

document.addEventListener("DOMContentLoaded", function() {
    var lastModified = document.lastModified;
    document.getElementById("lastModified").textContent = "Last modified: " + lastModified;
});

