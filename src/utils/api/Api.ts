const Api = async (): Promise<any> => {
  const host: string = window.location.host;
  const protocol: string = window.location.protocol;

  const data = await fetch(`${protocol}//${host}/data/photographers.json`);
  return data.json();
};

export default Api;
