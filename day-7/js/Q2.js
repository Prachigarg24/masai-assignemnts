async function fetchWithRetry(url, maxRetries = 3) {
  let attempt = 0;

  while (attempt < maxRetries) {
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
      }

      return await response.json();

    } catch (error) {
      attempt++;

      if (attempt === maxRetries) {
        throw new Error("Max retries reached. Request failed.");
      }

      const delay = Math.pow(2, attempt) * 1000;
      console.warn(
        `Retrying (${attempt}/${maxRetries}) after ${delay}ms...`
      );

      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }
}
