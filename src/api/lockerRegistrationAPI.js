export async function submitLockerRegistration(formData) {
  const response = await fetch(import.meta.env.VITE_PUBLIC_GOOGLE_SHEET_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  });
  if (!response.ok) {
    throw new Error('Failed to register. Please try again.');
  }
  const data = await response.json();
  return data;
}