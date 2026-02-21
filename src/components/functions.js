export function formatDate(date) {
  const isoDate = date;
  const d = new Date(isoDate);
  const day = String(d.getDate()).padStart(2, '0');
  const month = String(d.getMonth() + 1).padStart(2, '0'); // Months are 0-11
  const year = d.getFullYear();
  if (isNaN(day) || isNaN(month) || isNaN(year)) return;
  const formatted = `${day}-${month}-${year}`;
  return formatted;
}
export function formatTime(date) {
  const isoDate = date;
  const d = new Date(isoDate);
  const hours = String(d.getHours()).padStart(2, '0');
  const minutes = String(d.getMinutes()).padStart(2, '0');
  if (isNaN(hours) || isNaN(minutes)) return;
  const formattedTime = `${hours}:${minutes}`;
  return formattedTime;
}