export function dateFilter(value) {
  return new Date(value).toLocaleDateString('en', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

export function w3DateFilter(value) {
  const date = new Date(value);
  return date.toISOString();
}