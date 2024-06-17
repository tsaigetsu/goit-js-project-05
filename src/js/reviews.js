import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { Navigation, Keyboard, Scrollbar } from 'swiper/modules';

const swiper = new Swiper('.reviews_swiper', {
  direction: 'horizontal',

  loop: false,
  navigation: {
    nextEl: '.button_next',
    prevEl: '.button_prev',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  modules: [Navigation, Keyboard, Scrollbar],
  slidesPerView: 2,
  spaceBetween: 32,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 32,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 32,
    },
    1280: {
      slidesPerView: 2,
      spaceBetween: 32,
    },
  },
  effect: 'creative',
  creativeEffect: {
    prev: {
      translate: [0, 0, -400],
    },
    next: {
      translate: ['100%', 0, 0],
    },
  },
});

function showError(message) {
  iziToast.error({
    title: 'Error',
    message: message,
  });
}

function cardTemplate(review) {
  return `<li class="swiper-slide review-list-item" id="list-item-id">
          <p class="review-section-text">${review.review}</p>
          <div class="review-avatar-text">
        <img
        srcset="${review.avatar_url}"
        class="review-section-img"
        src="${review.avatar_url}"
        alt="Avatar"
        width="40"
        height="40"/>
            <h3 class="review-section-title">${review.author}</h3>
          </div>
        </li>`;
}

function cardsTemplate(reviews) {
  return reviews.map(cardTemplate).join('');
}
function renderReviews(reviews) {
  const reviewList = document.getElementById('reviews_list');
  const markup = cardsTemplate(reviews);
  reviewList.innerHTML = markup;
  swiper.update();
}

async function fetchReviews() {
  try {
    const response = await fetch(
      'https://portfolio-js.b.goit.study/api/reviews'
    );
    if (!response.ok) {
      throw new Error('Failed to fetch reviews');
    }
    const data = await response.json();
    if (data && data.length > 0) {
      renderReviews(data);
    } else {
      showError('No reviews found');
      document.getElementById('reviews_list').innerHTML = '<p>Not found</p>';
    }
  } catch (error) {
    showError('An error occurred while fetching reviews');
    document.getElementById('reviews_list').innerHTML = '<p>Not found</p>';
  }
}

function updateNavigationButtons() {
  const prevButton = document.querySelector('.button_prev');
  const nextButton = document.querySelector('.button_next');

  if (swiper.isBeginning) {
    prevButton.classList.add('disabled');
  } else {
    prevButton.classList.remove('disabled');
  }

  if (swiper.isEnd) {
    nextButton.classList.add('disabled');
  } else {
    nextButton.classList.remove('disabled');
  }
}

swiper.on('slideChange', updateNavigationButtons);

swiper.on('init', updateNavigationButtons);

swiper.init();

document.addEventListener('DOMContentLoaded', fetchReviews);
