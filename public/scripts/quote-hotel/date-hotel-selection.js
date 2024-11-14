document.addEventListener('DOMContentLoaded', function () {
  const dates = document.getElementById('dates');

  function setupDatepicker(selector, onChangeCallback) {
    flatpickr(selector, {
      mode: 'range',
      dateFormat: 'Y-m-d',
      minDate: 'today',
      onChange: onChangeCallback,
    });
  }

  function handleDateChange(selectedDates) {
    if (selectedDates.length === 2) {
      dates.textContent = `${selectedDates[0].toLocaleDateString()} - ${selectedDates[1].toLocaleDateString()}`;
    }
  }

  setupDatepicker('#dates', handleDateChange);
});
