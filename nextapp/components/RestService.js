import isofetch from 'isomorphic-unfetch';

export const fetcher = url => {
  return isofetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  }).then(r => r.json());
};