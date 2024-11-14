const hotels = [
  'DoubleTree by Hilton Coventry Building Society Arena',
  'Prestige Plaza Hotel',
  'Zedwell Piccadilly Circus',
  'St Giles Hotel London',
  'The First Luxury Home',
  'Genting Hotel',
  'Aspect Apartments City Centre',
];
const urlParams = new URLSearchParams(window.location.search);

function showHotel(userHotel) {
  if (!validateHotel(userHotel)) {
    const main = document.querySelector('main');
    main.classList.add('blur-3xl');
    notify.error('Invalid URL parameters, please try later', 3000);
    setTimeout(() => {
      window.location.href = 'index.html';
    }, 4000);
  }

  dismissHotels(hotels);

  hotelVisibilityHook(userHotel);
  activeFormOption(userHotel);
}

function getURLParams() {
  try {
    const userHotel = urlParams.get('hotel');
    if (!userHotel) {
      throw new Error('No hotel provided');
    }

    return userHotel;
  } catch (error) {
    notify.error(error.message, 3000);
    return null;
  }
}

function validateHotel(hotel) {
  return hotels.includes(hotel);
}

function hotelVisibilityHook(hotel) {
  const hotelElement = document.getElementById(hotel);
  hotelElement.classList.toggle('hidden');
}

function dismissHotels(hotels) {
  hotels.forEach(hotel => {
    const hotelElement = document.getElementById(hotel);
    console.log(hotelElement);

    hotelElement.classList.add('hidden');
  });
}

function activeFormOption(hotelSelected) {
  const selectHotels = document.getElementById('selectHotels');
  const options = selectHotels.options;

  for (let i = 0; i < options.length; i++) {
    if (options[i].value !== hotelSelected && options[i].selected) {
      options[i].selected = false;
    }

    if (options[i].value === hotelSelected && !options[i].selected) {
      options[i].selected = true;
    }
  }
}

function addSelectListener() {
  const selectHotels = document.getElementById('selectHotels');
  selectHotels.addEventListener('change', function () {
    const selectedHotel = this.value;
    showHotel(selectedHotel);
  });
}

window.onload = addSelectListener();
