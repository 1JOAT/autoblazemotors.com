const cars = [
    {
        name: 'Lexus',
        image: 'statics/cars/lexus.jpg',
        link: 'https://www.instagram.com/p/DExv1NMOCA9',
        description: 'EXTREMELY CLEAN!! Foreign used Rx350 F-sport 2016 model',
    },
    {
        name: 'Mercedes-Benz',
        image: 'statics/cars/gle432017.jpg',
        link: 'https://www.instagram.com/autoblazemotors/p/DEnmYVyOta6',
        description: 'EXTREMELY CLEAN!! Foreign used GLE43 ///AMG 2017 model fully loaded',
    },
    {
        name: 'Mercedes-Benz',
        image: 'statics/cars/glk2013.jpg',
        link: 'https://www.instagram.com/autoblazemotors/p/DEqDUMbOLTt',
        description: 'EXTREMELY CLEAN UNREGISTERED!! GLK350 4matic (AMG TRIM) 2013 model fully loaded',
    },
    {
        name: 'Toyota',
        image: 'statics/cars/highlander.jpg',
        link: 'https://www.instagram.com/p/DFDppT6O78z',
        description: 'EXTREMELY CLEAN!! Foreign used Highlander (LIMITED EDITION) 2016 model fullest option',
    },
    {
        name: 'Lexus',
        image: 'statics/cars/rx350.jpg',
        link: 'https://www.instagram.com/p/DDNkCeXOVCa',
        description: 'EXTREMELY CLEAN!! Foreign used Lexus Rx350 2010 model fully loaded',
    },
    {
        name: 'Toyota',
        image: 'statics/cars/avalon.jpg',
        link: 'https://www.instagram.com/p/DECc67UuzWb',
        description: 'EXTREMELY CLEAN!! Foreign used Toyota Avalon (LIMITED) 2013 model fully loaded',
    },
    {
        name: 'Mercedes-Benz',
        image: 'statics/cars/c300.jpg',
        link: 'https://www.instagram.com/autoblazemotors/p/DE-qwT1O_pI',
        description: 'EXTREMELY CLEAN!! Foreign used C300 4matic 2015 model fully loaded',
    },
    {
        name: 'Lexus',
        image: 'statics/cars/es350.jpg',
        link: 'https://www.instagram.com/p/DE8HE1kOuod',
        description: 'EXTREMELY CLEAN!! Foreign used Es350 2008 model fully loaded',
    },
    {
        name: 'Mercedes-Benz',
        image: 'statics/cars/c43.jpg',
        link: 'https://www.instagram.com/autoblazemotors/p/DEiPZ7uOPnP',
        description: 'EXTREMELY CLEAN!! Foreign used C43 ///AMG 2017 model fully loaded',
    },
    {
        name: 'Lexus',
        image: 'statics/cars/es3502011.jpg',
        link: 'https://www.instagram.com/p/DEDSknWujeL',
        description: 'EXTREMELY CLEAN!! Foreign used Es350 2011 model fully loaded',
    },
    {
        name: 'Honda',
        image: 'statics/cars/hondar.jpg',
        link: 'https://www.instagram.com/p/DDfekvruOw3',
        description: 'EXTREMELY CLEAN!! Foreign used Honda Ridgeline (BLACK EDITION) 2022 model',
    },
    {
        name: 'Lexus',
        image: 'statics/cars/rx3502023.jpg',
        link: 'https://www.instagram.com/p/DEImw-RuW5z',
        description: 'EXTREMELY CLEAN!! BRAND NEW!! 2023 MODEL Rx350 F-sport',
    },
];

let currentIndex = 0;
const container = document.querySelector('.grid');
const menuButton = document.getElementById("menu-button");
const mobileMenu = document.getElementById("mobile-menu");

function updateHero() {
  const hero = document.getElementById("hero");
  const carName = document.getElementById("car-name");
  const carDescription = document.getElementById("car-description");

  hero.style.backgroundImage = `url('${cars[currentIndex].image}')`;
  carName.textContent = cars[currentIndex].name;
  carDescription.textContent = cars[currentIndex].description;

  currentIndex = (currentIndex + 1) % cars.length;
}

function loadCars(){
    cars.forEach(car => {
        const card = document.createElement('div');
        card.classList.add('card', 'bg-white', 'shadow-md', 'rounded-lg', 'overflow-hidden', 'relative');
        
        const imageDiv = document.createElement('div');
        imageDiv.classList.add('w-full', 'h-120', 'bg-cover', 'bg-center');
        imageDiv.style.backgroundImage = `url('${car.image}')`;
    
        const descriptionDiv = document.createElement('div');
        descriptionDiv.classList.add('p-2', 'bg-gray-800', 'bg-opacity-90');
    
        const description = document.createElement('p');
        description.classList.add('text-white', 'mt-4');
        description.textContent = car.description;
    
        descriptionDiv.appendChild(description);
        card.appendChild(imageDiv);
        card.appendChild(descriptionDiv);
    
        const link = document.createElement('a');
        link.href = car.link;
        link.classList.add('block');
    
        link.appendChild(card);
        container.appendChild(link);
    });
}

menuButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
});

if (window.location.pathname.includes("cars")) {
    loadCars();
} else {
    setInterval(updateHero, 3000);
}

