/**
 * Asynchronous function to fetch data from the photographers.json file.
 * @returns {Promise<any>} A Promise that resolves to the parsed JSON data.
 */
const Api = async (): Promise<any> => {
  try {
    // Use the Fetch API to retrieve data from the photographers.json file
    const data = await fetch(`/data/photographers.json`);

    // Parse the response as JSON
    return data.json();
  } catch (error) {
    // Handle any errors that occur during the fetch or JSON parsing
    console.error('Error fetching data:', error);
    throw error; // Propagate the error for handling in the calling code
  }
};

export default Api;
