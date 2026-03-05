// Date utility functions — no tests written yet
// Your /test-gen command will generate them

function isWeekend(date) {
    const day = date.getDay();
    return day === 0 || day === 6;
}

function addDays(date, days) {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}

function formatDate(date) {
    // Returns "YYYY-MM-DD"
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const d = String(date.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
}

function daysBetween(dateA, dateB) {
    const msPerDay = 1000 * 60 * 60 * 24;
    return Math.round(Math.abs(dateB - dateA) / msPerDay);
}

module.exports = { isWeekend, addDays, formatDate, daysBetween };
