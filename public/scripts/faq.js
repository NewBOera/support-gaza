document.addEventListener('DOMContentLoaded', function () {
  var accordionItems = document.querySelectorAll('.accordion-item');

  accordionItems.forEach(function (item) {
    var accordionHeader = item.querySelector('.accordion-header');

    accordionHeader.addEventListener('click', function () {
      var parent = this.parentNode;
      var openItem = document.querySelector('.accordion-item.open');

      if (parent.classList.contains('open')) {
        parent.classList.remove('open');
        accordionHeader.classList.remove('clicked');
      } else {
        if (openItem) {
          openItem.classList.remove('open');
          openItem.querySelector('.accordion-header').classList.remove('clicked');
        }
        parent.classList.add('open');
        accordionHeader.classList.add('clicked');
      }
    });
  });
});

const toggleMenuBtn = document.getElementById('toggleMenu');
const menuItems = document.getElementById('menuItems');

toggleMenuBtn.addEventListener('click', () => {
  menuItems.classList.toggle('hidden');
});
