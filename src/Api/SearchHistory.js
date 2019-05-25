export function getSearchHistory() {
  return JSON.parse(window.localStorage.getItem("searchHistorys")) || [];
}
export function setSearchHistory(historys) {
  window.localStorage.setItem("searchHistorys", JSON.stringify(historys));
}
