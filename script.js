const airConditionerToggle = document.getElementById('airConditionerToggle'); // Unique ID
const airConditionerHistory = document.getElementById('airConditionerHistory');
airConditionerToggle.addEventListener('change', function() {
  if (airConditionerToggle.checked) {
    airConditionerHistory.querySelector('.dot').classList.add('green-dot');
  } else {
    airConditionerHistory.querySelector('.dot').classList.remove('green-dot');
  }
});
