export default function sortActivitiesByDate(arr) {
  return arr.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
}
