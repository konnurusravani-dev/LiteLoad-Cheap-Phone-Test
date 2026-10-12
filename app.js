const button = document.querySelector("#checkBtn");
const status = document.querySelector("#status");

button.addEventListener("click", () => {
  const width = window.innerWidth;
  const connection = navigator.connection;
  const connectionType = connection?.effectiveType || "not reported by this browser";
  const saveData = connection?.saveData ? "enabled" : "not reported/enabled";
  status.textContent = `Check complete: viewport ${width}px wide. Connection type: ${connectionType}. Data Saver: ${saveData}. These are basic browser hints, not a full performance benchmark.`;
});
