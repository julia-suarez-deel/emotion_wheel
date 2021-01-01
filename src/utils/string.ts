export function capitalize(value: string): string {
  if (!value) return "";
  value = value.toLowerCase();
  return value.charAt(0).toUpperCase() + value.slice(1);
}
