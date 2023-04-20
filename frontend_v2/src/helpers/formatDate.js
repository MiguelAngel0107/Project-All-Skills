export function formatDate(dateString) {
  const date = new Date(dateString);
  const now = new Date();

  const diff = now.getTime() - date.getTime();
  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);

  if (seconds < 60) {
    return "hace unos segundos";
  } else if (minutes === 1) {
    return "hace un minuto";
  } else if (minutes < 60) {
    return `hace ${minutes} minutos`;
  } else if (hours === 1) {
    return "hace una hora";
  } else if (hours < 24) {
    return `hace ${hours} horas`;
  } else if (days === 1) {
    return "hace un día";
  } else if (days < 7) {
    return `hace ${days} días`;
  } else if (weeks === 1) {
    return "hace una semana";
  } else if (weeks < 4) {
    return `hace ${weeks} semanas`;
  } else if (months === 1) {
    return "hace un mes";
  } else {
    const options = { month: "long", day: "numeric" };
    return fecha.toLocaleDateString("es-ES", options);
  }
}
