export function validateForm(...inputs) {
  for (const input of inputs) {
    if (input.error) {
      return false;
    }
  }
  return true;
}

export function clearinputs(...inputs) {
  for (const input of inputs) {
    input.clarInput();
  }
  return true;
}
