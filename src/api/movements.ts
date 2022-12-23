import { api } from "./api";

export async function getMovements() {
  const movements = await api.get("/movements");
  console.log(movements)
  return movements;
}
