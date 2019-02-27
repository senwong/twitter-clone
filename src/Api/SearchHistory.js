export function getSearchHistory() {
  return JSON.parse(window.localStorage.getItem('searchHistorys')) || [];
}
export function addSearchHistory(history) {
  const old = getSearchHistory();
  const index = old.indexOf(history);
  if (index > -1) {
    old.splice(index, 1);
  }
  old.unshift(history);
  window.localStorage.setItem('searchHistorys', JSON.stringify(old));
}
export function deleteSearchHistory(history) {
  const old = getSearchHistory();
  const index = old.indexOf(history);
  if (index > -1) {
    old.splice(index, 1);
  }
  window.localStorage.setItem('searchHistorys', JSON.stringify(old));
}
export function deleteAllSearchHistory() {
  window.localStorage.setItem('searchHistorys', JSON.stringify([]));
}
