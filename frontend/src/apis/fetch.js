const authFetch = async (url, options = {}) => {
  const token = localStorage.getItem('token');

  const finalOptions = {
    ...options,
    headers: {
      Authorization: token ? `Bearer ${token}` : '',
      "Content-Type": "application/json",
      ...options.headers
    }
  }

  const res = await fetch(url, finalOptions);
  const data = await res.json();
  return data
}

export default authFetch;