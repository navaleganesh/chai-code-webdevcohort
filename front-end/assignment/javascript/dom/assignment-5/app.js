const carouselTrack = document.querySelector("#carouselTrack");
const carouselNav = document.querySelector("#carouselNav");
const prevButton = document.querySelector("#prevButton");
const nextButton = document.querySelector("#nextButton");

const imgList = [
    'https://images.pexels.com/photos/29656095/pexels-photo-29656095/free-photo-of-vibrant-butterfly-resting-on-fresh-green-leaves.jpeg',
    'https://images.pexels.com/photos/30189414/pexels-photo-30189414/free-photo-of-butterfly-perched-on-vibrant-yellow-flowers-in-bangkok.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/30662160/pexels-photo-30662160/free-photo-of-vibrant-butterfly-on-blooming-flowers-in-nature.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
];

// Create UL and add images
const ul = document.createElement('ul');
ul.style.display = 'flex';
ul.style.transition = 'transform 0.5s ease';
ul.style.width = `${imgList.length * 800}px`; // total width of all images
ul.style.margin = 0;
ul.style.padding = 0;
ul.style.listStyle = 'none';
ul.setAttribute('id', 'listId');
carouselTrack.appendChild(ul);

imgList.forEach((item, index) => {
    const li = document.createElement('li');
    li.classList.add('commonList');
    if (index === 0) li.classList.add('active');

    const img = document.createElement('img');
    img.src = item;
    img.alt = `Image ${index + 1}`;
    img.width = 800;
    img.height = 400;

    li.appendChild(img);
    ul.appendChild(li);
});

// Indicators
const indiUL = document.createElement('ul');
indiUL.style.display = 'flex';
indiUL.style.marginTop = '10px';
carouselNav.appendChild(indiUL);

imgList.forEach((item, index) => {
    const indiLI = document.createElement('li');
    indiLI.style.margin = '0 5px';
    indiLI.style.borderRadius = '50%';
    indiLI.style.width = '10px';
    indiLI.style.height = '10px';
    indiLI.style.border = '1px solid #000';
    indiLI.style.cursor = 'pointer';
    indiLI.setAttribute('data-index', index);

    if (index === 0) indiLI.style.backgroundColor = '#000';

    indiUL.appendChild(indiLI);
});





let currentIndex = 0;

function updateCarousel(index) {
    ul.style.transform = `translateX(-${index * 800}px)`;
    currentIndex = index;

    // Update active class
    document.querySelectorAll('.commonList').forEach((li, i) => {
        li.classList.toggle('active', i === index);
    });

    // Update indicator style
    indiUL.querySelectorAll('li').forEach((dot, i) => {
        dot.style.backgroundColor = i === index ? '#000' : '#fff';
    });
}

nextButton.addEventListener('click', () => {
    if (currentIndex < imgList.length - 1) {
        updateCarousel(currentIndex + 1);
    }
});

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        updateCarousel(currentIndex - 1);
    }
});

// Optional: Click indicator to jump to image
indiUL.querySelectorAll('li').forEach(dot => {
    dot.addEventListener('click', () => {
        const index = Number(dot.getAttribute('data-index'));
        updateCarousel(index);
    });
});
