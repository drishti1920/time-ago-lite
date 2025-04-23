function timeAgo(dateInput) {
  const now = new Date();
  const date = new Date(dateInput);
  const seconds = Math.floor((now - date) / 1000);

  if (isNaN(seconds) || seconds < 0) {
    return "Invalid date";
  }

  const intervals = [
    { label: "year", seconds: 31536000 },
    { label: "month", seconds: 2592000 },
    { label: "day", seconds: 86400 },
    { label: "hour", seconds: 3600 },
    { label: "minute", seconds: 60 },
    { label: "second", seconds: 1 },
  ];

  for (const { label, seconds: unit } of intervals) {
    const count = Math.floor(seconds / unit);
    if (count > 0) {
      return `${count} ${label}${count > 1 ? "s" : ""} ago`;
    }
  }

  return "just now";
}

module.exports = timeAgo;
