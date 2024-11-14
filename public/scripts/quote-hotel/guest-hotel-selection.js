document.addEventListener('DOMContentLoaded', function () {
  const toggleButton = document.getElementById('toggle-button');
  const dropdownSection = document.getElementById('dropdown-section');
  const incrementButtons = document.querySelectorAll('.increment');
  const decrementButtons = document.querySelectorAll('.decrement');
  const guestsLabel = document.getElementById('guestsLabel');
  let guests = 0;
  let rooms = 0;

  // Abrir y cerrar el dropdown
  toggleButton.addEventListener('click', function (event) {
    event.stopPropagation(); // Evita que el evento se propague y cierre el dropdown

    if (dropdownSection.classList.contains('hidden')) {
      dropdownSection.classList.remove('hidden');
      dropdownSection.classList.remove('slide-up');
      dropdownSection.classList.add('slide-down');
    } else {
      dropdownSection.classList.remove('slide-down');
      dropdownSection.classList.add('slide-up');
      setTimeout(() => {
        dropdownSection.classList.add('hidden');
      }, 500);
    }
  });

  dropdownSection.addEventListener('click', function (event) {
    event.stopPropagation();
  });

  incrementButtons.forEach(button => {
    button.addEventListener('click', function (event) {
      event.stopPropagation();

      const input = this.previousElementSibling;
      if (input.id === 'guests') {
        if (guests >= 12) return;
        guests = parseInt(input.value) + 1;
        input.value = guests;
      } else {
        if (rooms >= 4) return;
        rooms = parseInt(input.value) + 1;
        input.value = rooms;
      }

      guestsLabel.innerHTML = `${guests} ${guests > 1 ? 'Guests' : 'Guest'} & ${rooms} ${rooms > 1 ? 'Rooms' : 'Room'}`;
    });
  });

  decrementButtons.forEach(button => {
    button.addEventListener('click', function (event) {
      event.stopPropagation();

      const input = this.nextElementSibling;
      if (parseInt(input.value) > 1) {
        input.value = parseInt(input.value) - 1;
        if (input.id === 'guests') {
          guests = parseInt(input.value);
        } else {
          rooms = parseInt(input.value);
        }

        guestsLabel.innerHTML = `${guests} ${guests > 1 ? 'Guests' : 'Guest'} & ${rooms} ${rooms > 1 ? 'Rooms' : 'Room'}`;
      }
    });
  });

  // ! Function to close dropdown when clicking in other part of the page
  document.addEventListener('click', function () {
    if (!dropdownSection.classList.contains('hidden')) {
      dropdownSection.classList.remove('slide-down');
      dropdownSection.classList.add('slide-up');
      setTimeout(() => {
        dropdownSection.classList.add('hidden');
      }, 500);
    }
  });
});
