export default async function fetchData(url: string, token?: string | null) {
  try {
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch.");
    }

    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
  }
}
