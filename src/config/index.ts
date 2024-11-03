const API_BASE_URL = import.meta.env.VITE_API_URL;
console.log(">>> ", API_BASE_URL);
export const API_URLS = {
  CURRENCIES: `${API_BASE_URL}/currencies`,
  CONVERT: `${API_BASE_URL}/convert`,
};

export default API_URLS;
