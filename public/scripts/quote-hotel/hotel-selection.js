document.addEventListener('DOMContentLoaded', function() {
  const hotelToggleButton = document.getElementById('hotel-toggle-button');
  const hotelDropdownSection = document.getElementById('hotel-dropdown-section');
  const hotelItems = document.querySelectorAll('.hotel-item');
  const selectedHotelSpan = document.getElementById('selected-hotel');
  const hotelSelect = document.getElementById('hotel-select');

  hotelToggleButton.addEventListener('click', function() {
    if (hotelDropdownSection.classList.contains('hidden')) {
      hotelDropdownSection.classList.remove('hidden');
      hotelDropdownSection.classList.remove('slide-up');
      hotelDropdownSection.classList.add('slide-down');
    } else {
      hotelDropdownSection.classList.remove('slide-down');
      hotelDropdownSection.classList.add('slide-up');
      setTimeout(() => {
        hotelDropdownSection.classList.add('hidden');
      }, 500);
    }
  });

  hotelItems.forEach(item => {
    item.addEventListener('click', function() {
      const selectedHotel = this.textContent;
      selectedHotelSpan.textContent = selectedHotel;
      hotelSelect.value = selectedHotel;
      hotelDropdownSection.classList.remove('slide-down');
      hotelDropdownSection.classList.add('slide-up');
      setTimeout(() => {
        hotelDropdownSection.classList.add('hidden');
      }, 500);
    });
  });
});