export function getSearchHistory() {
  return JSON.parse(localStorage.getItem("searchHistorys")) || [];
}
export function addSearchHistory(history) {
  const old = getSearchHistory();
  const index = old.indexOf(history)
  if (index > -1) {
    old.splice(index, 1)
  }
  old.unshift(history)
  localStorage.setItem("searchHistorys", JSON.stringify(old))
}
export function deleteSearchHistory(history) {
  const old = getSearchHistory();
  const index = old.indexOf(history)
  if (index > -1) {
    old.splice(index, 1)
  }
  localStorage.setItem("searchHistorys", JSON.stringify(old))
}
export function deleteAllSearchHistory() {
  localStorage.setItem("searchHistorys", JSON.stringify([]))
}