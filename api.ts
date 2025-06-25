const API_URL = 'http://localhost:1337'; // adapte selon ton API Strapi

export async function sendBatteryData(data: { level: number }, token: string) {
  const response = await fetch(`${API_URL}/battery`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });
  return response.json();
}

export async function getBatteryHistory(token: string) {
  const response = await fetch(`${API_URL}/battery`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.json();
}
