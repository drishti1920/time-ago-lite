# time-ago-lite

🕒 A tiny utility to convert dates or timestamps into human-readable relative time.

## Installation

```bash
npm install time-ago-lite
```

## Usage

```js
const timeAgo = require('time-ago-lite');

console.log(timeAgo(new Date(Date.now() - 90 * 1000))); // "1 minute ago"
console.log(timeAgo('2023-01-01')); // "1 year ago"
```

## Output Examples
- just now
- 30 seconds ago
- 5 minutes ago
- 3 hours ago
- 2 days ago
- 6 months ago
- 1 year ago
