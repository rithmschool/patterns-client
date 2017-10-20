function sortActivitiesByDate(activitiesObj) {
  return Object.values(activitiesObj).sort(
    (a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)
  );
}
