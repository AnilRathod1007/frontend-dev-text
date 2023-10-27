export function saveToLocalStorage(state) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("auth", serializedState);
  } catch (e) {
    console.log(e);
  }
}
export function loadFromLocalStorage() {
  try {
    const serializedState = localStorage.getItem("auth");
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    console.log(e);
    return undefined;
  }
}

export function clearFromLocalStorage() {
  localStorage.clear();
}


