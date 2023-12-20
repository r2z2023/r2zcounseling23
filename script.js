window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = '#73C2FB'; // Ubah warna latar belakang saat digeser
    } else {
        navbar.style.background = 'transparent'; // Kembalikan ke transparan
    }
});

const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const dotsContainer = document.querySelector('.dots');

let currentSlide = 0;

function showSlide(index) {
    slider.style.transform = `translateX(-${index * 100}%)`;
    currentSlide = index;
    updateDots();
}

function updateDots() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        if (index === currentSlide) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

slides.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    dot.addEventListener('click', () => showSlide(index));
    dotsContainer.appendChild(dot);
});
document.addEventListener('DOMContentLoaded', function() {
    const shortDesc = document.querySelector('.short-description');
    const fullDesc = document.querySelector('.full-description');

    shortDesc.addEventListener('mouseover', function() {
        shortDesc.style.display = 'none';
        fullDesc.style.display = 'block';
    });

    fullDesc.addEventListener('mouseout', function() {
        shortDesc.style.display = 'block';
        fullDesc.style.display = 'none';
    });
});


let currentSlide2 = 0;

function showSlide(index) {
  const slides = document.querySelectorAll('.slide');
  if (index >= slides.length) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = slides.length - 1;
  } else {
    currentSlide = index;
  }

  const sliderWrapper = document.querySelector('.slider-wrapper');
  const offset = -currentSlide * slides[0].offsetWidth;
  sliderWrapper.style.transform = `translateX(${offset}px)`;
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

let slideIndex = 0;

document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelector('.slides');
    const slide = document.querySelectorAll('.slide');
    const nextButton = document.querySelector('.next');
    const prevButton = document.querySelector('.prev');

    let index = 0;

    function updateSlidePosition() {
        slides.style.transform = `translateX(${-index * 100}%)`;
    }

    function showNextSlide() {
        index = (index + 1) % slide.length;
        updateSlidePosition();
    }

    function showPreviousSlide() {
        index = (index - 1 + slide.length) % slide.length;
        updateSlidePosition();
    }

    nextButton.addEventListener('click', showNextSlide);
    prevButton.addEventListener('click', showPreviousSlide);
});




document.addEventListener("DOMContentLoaded", function() {
    const animatedElements = document.querySelectorAll('.animated-element');

    function animateElements() {
        animatedElements.forEach(element => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0) rotate(0deg)';
        });
    }

    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY + window.innerHeight;
        const elementPosition = animatedElements[0].offsetTop + animatedElements[0].offsetHeight;

        if (scrollPosition > elementPosition) {
            animateElements();
        }
    });
});



document.addEventListener("DOMContentLoaded", function() {
    var navbarHeight = document.querySelector('.navbar').offsetHeight;
    var contentElement = document.getElementById('konten');

    contentElement.style.paddingTop = navbarHeight + 'px';

    window.addEventListener('resize', function() {
        navbarHeight = document.querySelector('.navbar').offsetHeight;
        contentElement.style.paddingTop = navbarHeight + 'px';
    });

    window.addEventListener('scroll', function() {
        var scrolled = window.scrollY > 0;
        document.querySelector('.navbar').classList.toggle('scrolled', scrolled);
    });
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


