import axios from "axios";
import getServerUrl from "../services/serverService";

export function adminLogin(data) {
  return axios.post(getServerUrl("api/v1/auth/login/admin"), data);
}
