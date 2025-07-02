// Returns true if the user is in mobile view (<=768px), otherwise false
export function CheckMobileView() {
  if (typeof window !== 'undefined' && window.matchMedia) {
    return window.matchMedia('(max-width: 768px)').matches;
  }
  return false;
}
