document.addEventListener('DOMContentLoaded', function () {
  const parks = [
      {
          Name: "Pietrasanta",
          location: "Italy",
          imageUrl: "https://media.istockphoto.com/id/601155950/photo/skate-park.jpg?s=612x612&w=0&k=20&c=SSpgTjAXi4WNtgHVXS7dPChcrAopf66-H23bSOfG-u0="
      },
      {
          Name: "Pura Pura, La Paz",
          location: "Bolivia",
          imageUrl: "https://media.istockphoto.com/id/1286430884/photo/quarter-pipe-at-empty-street-style-skatepark-on-a-sunny-day.jpg?s=612x612&w=0&k=20&c=vM7ImekGreHyEfvciwyjSHigMW3NzsbsLkBN637pzUc="
      },
      {
          Name: "Livingston Skatepark",
          location: "Scotland",
          imageUrl: "https://media.istockphoto.com/id/108365364/photo/the-ramp.jpg?s=612x612&w=0&k=20&c=pQQ4trIPnjoRNPuv_0vxnX2iqsU8tQKbdItUKP1pMo0="
      },
      {
          Name: "Gratitude Trails, Andros",
          location: "Greece",
          imageUrl: "https://media.istockphoto.com/id/1198233284/photo/venice-beach-skate-park-shot-at-golden-hour-los-angeles-california.jpg?s=612x612&w=0&k=20&c=6P2mpWVYGkCyJL0BXbzelsH2-vqT5m8u-Cdnlq_QKXM="
      },
      {
          Name: "Stockwell, London",
          location: "England",
          imageUrl: "https://media.istockphoto.com/id/681476442/photo/skateboard-and-backpack-in-skate-park.jpg?s=612x612&w=0&k=20&c=74SHSQT61HYT56hqbsbJGs7o1_r5c-Tif3ilBBQAzyI="
      },
      {
          Name: "Mystic Skatepark, prague",
          location: "Czechia",
          imageUrl: "https://media.istockphoto.com/id/1666278288/photo/skatepark-at-sunset-by-the-beach.jpg?s=612x612&w=0&k=20&c=xiHcGNLFkYD76VGVptrztkiWXd0MV9uTVIl7h5HT4wI="
      },
  ];

  const flexContainer = document.querySelector('.flex');

  parks.forEach(park => {
      const figure = document.createElement('figure');
      figure.classList.add('park-card');

      const image = document.createElement('img');
      image.src = park.imageUrl;
      image.alt = park.Name;
      image.loading = 'lazy';

      const name = document.createElement('figcaption');
      name.textContent = park.Name;

      const location = document.createElement('figcaption');
      location.textContent = park.location;

      figure.appendChild(image);
      figure.appendChild(name);
      figure.appendChild(location);

      flexContainer.appendChild(figure);
  });
});

document.addEventListener("DOMContentLoaded", function() {
    var lastModified = document.lastModified;
    document.getElementById("lastModified").textContent = "Last modified: " + lastModified;
});
