export function formatoPrecio(precio) {
  if (typeof precio !== "number") {
    return "0"; 
  }
  return precio.toLocaleString("es-CL");
}
