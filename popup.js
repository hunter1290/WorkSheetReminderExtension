// popup.js
const activityLog = document.getElementById("activity-log");
const saveLogButton = document.getElementById("save-log");
const downloadLogButton = document.getElementById("download-log");

// Retrieve saved logs from storage on load
chrome.storage.local.get(["logs"], (result) => {
  if (result.logs) {
    activityLog.value = result.logs;
  }
});

// Save the current activity to storage
saveLogButton.addEventListener("click", () => {
  const currentLog = activityLog.value;
  chrome.storage.local.set({ logs: currentLog }, () => {
    alert("Activity saved successfully!");
  });
});

// Download the logs as a text file
downloadLogButton.addEventListener("click", () => {
  chrome.storage.local.get(["logs"], (result) => {
    const logs = result.logs || "";
    const blob = new Blob([logs], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "activity-log.txt";
    a.click();
    URL.revokeObjectURL(url);
  });
});
