const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://127.0.0.1:8000/api";

export async function fetchData(endpoint: string) {
  const res = await fetch(`${API_BASE_URL}${endpoint}`);
  if (!res.ok) throw new Error(`Erro ao buscar ${endpoint}`);
  return res.json();
}
