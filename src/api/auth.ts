import { api } from "./api";
import Cookies from "js-cookie";

export async function login(dto: {
  email: string | undefined;
  password: string | undefined;
}) {
  if (dto.email && dto.password) {
    const loginResp = await api.post("/auth", dto);
    Cookies.set("access_token", loginResp.data.access_token);
    return loginResp;
  }
}
