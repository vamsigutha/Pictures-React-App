import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID _wgVGkPH9F_kwOL9HAqpCIMbeGtGb3F4-pL1Dvm1CYw",
  },
});
