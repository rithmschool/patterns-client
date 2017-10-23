export default function sortByUpdatedAt(obj) {
  return Object.values(obj).sort(
    (a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)
  );
}
