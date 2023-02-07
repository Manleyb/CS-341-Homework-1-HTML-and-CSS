//I dont think this file actually does anything but I am too scared to detete it
const dropdownBtn = document.querySelector('.dropdown-btn');
const dropdownLinks = document.querySelectorAll('.dropdown-content a');

dropdownLinks.forEach(link => {
  link.addEventListener('click', function() {
    dropdownBtn.textContent = this.textContent;
  });
});


//the bellow is necessary 

//TODO: event handler for enter button on keyboard
//currently there is a bug if enter is hit when user is in
//the notes section.

function changeMonth(month) {
  document.getElementById("month-button").innerHTML = month;
}

function submitForm() {
  const notes = document.getElementById("fname").value;
  if (notes === "Vegan") {
    document.body.innerHTML = `
      <div style="background-color: black; color: red; text-align: center; font-size: 36px;">
        Alert: Cheesecake contains dairy!
      </div>
    `;
  } else {
    document.body.innerHTML = `
    
    <div style="background-color: green ; color: pink; text-align: center; font-size: 36px;">
       <h3>Thank you! Your order has been placed</h3>
      <p>Topping: ${document.querySelector("input[name='food']:checked").nextSibling.nodeValue}</p>
      // <p>Quantity: ${document.getElementById("alignment").value}</p>
      <p>Notes: ${notes}</p>
    `;
  }
}


function changeMonth(month) {
  document.getElementById("month-button").innerHTML = month;
}

function submitForm() {
const notes = document.getElementById("fname").value;
if (notes === "Vegan" || notes === "vegan") {
  document.body.innerHTML = `
    <div style="background-color: black; color: red; text-align: center; font-size: 36px;">
      Alert: Cheesecake contains dairy!
    </div>
  `;
} else {
  document.body.innerHTML = `
    <h3 class  = "rainbow" >Thank you! Your order has been placed</h3>
    <p class  = "rainbow">Topping: ${document.querySelector("input[name='food']:checked").nextSibling.nodeValue}</p>
    <p class  = "rainbow">Notes: ${notes}</p>
  `;
}
}
