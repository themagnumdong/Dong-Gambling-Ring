document.getElementById("betsForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData.entries());

  console.log("Submitting data:", data); // Optional: for debugging

  try {
    const res = await fetch('/api/save-vote', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    if (res.ok) {
      document.getElementById("confirmation").style.display = "block";
      e.target.reset();
    } else {
      alert("Error saving your bets. Please try again.");
    }
  } catch (error) {
    console.error("Submission error:", error);
    alert("Server error. Please try again later.");
  }
});
