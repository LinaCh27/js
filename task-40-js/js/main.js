const displayBtn = document.getElementById("display-btn");

displayBtn.addEventListener("click", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const surname = document.getElementById("surname").value;
  const phone = document.getElementById("phone").value;

  document.getElementById("name-output").textContent = "Name: " + name;
  document.getElementById("surname-output").textContent = "Last Name: " + surname;
  document.getElementById("phone-output").textContent = "Telephone: " + phone;
});
