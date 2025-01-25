let alarmName = "hourlyReminder";

// Create an alarm that triggers every hour
chrome.alarms.create(alarmName, {
    periodInMinutes: 60 //triggering the notification in every 60 min to give u alert
  });

// Listen for the alarm event
chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === alarmName) {
    chrome.notifications.create({
      type: "basic",
      iconUrl: "icon.png",
      title: "Hourly Reminder",
      message: "What did you complete in the last hour? Log it now!",
      priority: 2
    });
  }
});
