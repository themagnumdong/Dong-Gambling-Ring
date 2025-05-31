document.getElementById("betsForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const formData = {
    name: this.name.value,
    bet1: this.bet1.value,
    bet2: this.bet2.value,
    bet3: this.bet3.value,
    bet4: this.bet4.value,
    bet5: this.bet5.value,
    babyName: this.babyName.value
  };

  fetch("https://script.google.com/macros/s/AKfycbxmyAplhc_o2Em9lqvnMekcHg7NT1YYRuz4Cd8_3ClPToSVrjRh_HKte-7GuIqDcIAEbQ/exec", {
    method: "POST",
    body: JSON.stringify(formData),
    headers: { "Content-Type": "application/json" }
  })
  .then(response => response.json())
  .then(data => {
    document.getElementById("confirmation").style.display = "block";
    document.getElementById("betsForm").reset();
  })
  .catch(error => {
    alert("Submission failed. Try again later.");
    console.error("Error!", error.message);
  });
});
