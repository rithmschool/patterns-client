import sortByUpdatedAt from './sortByUpdatedAt';

export default function mostRecentlyUpdated(obj) {
  var res = sortByUpdatedAt(obj)[0];
  if (res && res._id) {
    return res._id;
  }
  return '';
}
