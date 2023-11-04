export function validateForm(...inputs: {error: string | null}[]) {
  for (const input of inputs) {
    if (input.error) {
      return false;
    }
  }
  return true;
}

export function clearinputs(...inputs : {clearInput: () => void}[]) {
  for (const input of inputs) {
    input.clearInput();
  }
  return true;
}
