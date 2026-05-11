export function cn(...values: Array<string | false | null | undefined>) {
  return values.filter(Boolean).join(" ");
}

export function formatPrice(value: number) {
  return `ALL ${value.toLocaleString("en-US")}`;
}

export function getAlbaniaOpenState(date = new Date()) {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/Tirane",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false
  }).formatToParts(date);
  const hour = Number(parts.find((part) => part.type === "hour")?.value ?? "0");
  const isOpen = hour >= 11 && hour < 23;

  return {
    isOpen,
    label: isOpen ? "Open Now" : "Closed Right Now",
    detail: isOpen ? "Open until 11:00 PM" : "Opens again later today"
  };
}
