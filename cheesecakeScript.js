//I dont think this file actually does anything but I am too scared to detete it
const dropdownBtn = document.querySelector('.dropdown-btn');
const dropdownLinks = document.querySelectorAll('.dropdown-content a');

dropdownLinks.forEach(link => {
  link.addEventListener('click', function() {
    dropdownBtn.textContent = this.textContent;
  });
});
