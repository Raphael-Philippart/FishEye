const Api = async (): Promise<any> => {
  const data = await fetch(`/data/photographers.json`);
  return data.json();
};

export default Api;
