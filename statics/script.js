const cars = [
    {
        name: 'Lexus',
        image: 'statics/cars/lexus.jpg',
        link: 'https://www.instagram.com/p/DExv1NMOCA9',
        description: 'EXTREMELY CLEAN!! Foreign used Rx350 F-sport 2016 model',
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

