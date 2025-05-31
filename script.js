// ---- Bets Form Submission ----
document.getElementById("betsForm")?.addEventListener("submit", function(event) {
  event.preventDefault();

const formData = {
  name: this.name.value,
  bet1: this.bet1.value,
  bet2: this.bet2.value,
  bet3: this.bet3.value,
  bet4: this.bet4.value,
  bet5: this.bet5.value,
  trollQuestion: this.trollQuestion.value // 
};

// ---- Nav Tab Highlighting ----
console.log("script.js loaded");

const currentPage = location.pathname.split("/").pop() || "index.html";
console.log("Current page:", currentPage);

document.querySelectorAll(".nav-tab").forEach(link => {
  const href = link.getAttribute("href");
  console.log("Comparing with:", href);

  if (href === currentPage || (href === "index.html" && currentPage === "")) {
    link.classList.add("active");
  }
});
document.getElementById("betsForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData.entries());

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
    console.error(error);
    alert("Server error. Please try again later.");
  }
});
document.getElementById("betsForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData.entries());

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
    console.error(error);
    alert("Server error. Please try again later.");
  }
});
