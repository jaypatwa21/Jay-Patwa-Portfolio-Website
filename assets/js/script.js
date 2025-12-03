'use strict';

/* Enhanced JS for Smooth Animation & Better UX */

// Element toggle
const toggle = (el) => el.classList.toggle("active");

// Sidebar
const sidebar = document.querySelector('[data-sidebar]');
const sidebarBtn = document.querySelector('[data-sidebar-btn]');
sidebarBtn.addEventListener('click', () => toggle(sidebar));

// Smooth Fade-in on Page Change
const navLinks = document.querySelectorAll('[data-nav-link]');
const pages = document.querySelectorAll('[data-page]');

navLinks.forEach((link, index) => {
  link.addEventListener('click', () => {
    pages.forEach((page) => page.classList.remove('active'));
    navLinks.forEach((btn) => btn.classList.remove('active'));

    pages[index].classList.add('active');
    link.classList.add('active');

    pages[index].style.opacity = 0;
    setTimeout(() => (pages[index].style.opacity = 1), 150);

    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

// Custom project filter (only if elements exist)
const select = document.querySelector('[data-select]');
const selectItems = document.querySelectorAll('[data-select-item]');
const selectValue = document.querySelector('[data-select-value]');
const filterItems = document.querySelectorAll('[data-filter-item]');

if (select) {
  select.addEventListener('click', () => toggle(select));

  selectItems.forEach((item) => {
    item.addEventListener('click', () => {
      let selected = item.innerText.toLowerCase();
      if (selectValue) selectValue.innerText = item.innerText;

      toggle(select);

      filterItems.forEach((box) => {
        if (selected === 'all' || selected === box.dataset.category) {
          box.classList.add('active');
          box.style.transform = 'scale(1)';
          box.style.opacity = '1';
        } else {
          box.classList.remove('active');
          box.style.transform = 'scale(0.8)';
          box.style.opacity = '0';
        }
      });
    });
  });
}

// Testimonials modal
const testimonialItems = document.querySelectorAll('[data-testimonials-item]');
const modalContainer = document.querySelector('[data-modal-container]');
const modalClose = document.querySelector('[data-modal-close-btn]');
const overlay = document.querySelector('[data-overlay]');

const modalImg = document.querySelector('[data-modal-img]');
const modalTitle = document.querySelector('[data-modal-title]');
const modalText = document.querySelector('[data-modal-text]');

const toggleModal = () => {
  modalContainer.classList.toggle('active');
  overlay.classList.toggle('active');
};

testimonialItems.forEach((item) => {
  item.addEventListener('click', () => {
    modalImg.src = item.querySelector('[data-testimonials-avatar]').src;
    modalTitle.innerText = item.querySelector('[data-testimonials-title]').innerText;
    modalText.innerText = item.querySelector('[data-testimonials-text]').innerText;

    toggleModal();
  });
});

modalClose.addEventListener('click', toggleModal);
overlay.addEventListener('click', toggleModal);

// Contact form
const form = document.querySelector('[data-form]');
const formInputs = document.querySelectorAll('[data-form-input]');
const formBtn = document.querySelector('[data-form-btn]');

if (formInputs.length > 0) {
  formInputs.forEach((input) => {
    input.addEventListener('input', () => {
      if (form.checkValidity()) {
        formBtn.removeAttribute('disabled');
      } else {
        formBtn.setAttribute('disabled', '');
      }
    });
  });
}

// Smooth hover animations for project cards
const projectCards = document.querySelectorAll('.project-item');
projectCards.forEach((card) => {
  card.addEventListener('mouseover', () => {
    card.style.transform = 'translateY(-4px)';
    card.style.transition = '0.3s ease';
  });

  card.addEventListener('mouseout', () => {
    card.style.transform = 'translateY(0)';
  });
});