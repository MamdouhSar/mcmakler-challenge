const API_HOST = "http://localhost:3004";

export const checkHttpStatus = (response: Response) =>  {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error: Error = new Error(response.statusText);
  throw error;
}


export const parseJSON = (response: Response) => response.json();

export const requestData = async (url: string, callback: (response: any) => any, errorCallback: () => any) => {
  return fetch(`${API_HOST}${url}`, {
    credentials: 'include',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then(checkHttpStatus)
    .then(parseJSON)
    .then(response => {
      callback(response);
    })
    .catch(() => {
      errorCallback();
    });
}