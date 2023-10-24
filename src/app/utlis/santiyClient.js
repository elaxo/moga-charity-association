// api/sanity.js
import axios from 'axios';

const sanityClient = axios.create({
  baseURL: `https://z79aatyz.api.sanity.io/v1/data/query/production`,
  headers: {
    Authorization: `Bearer ${'skSh1NnEJjLRoeD5OjFXXnTRoO2cA9LBO6EdkTPuNTOKQa6aD1d5ThA2YSI3CN0WSgKkRNG4g6Z8meHwlSVfFPqJnufM3fVRumWqyLaPQlYCR7gfTgWuLpovL37cO480lve59SFb7t6iv2NFmWkZwJNo2qY81gjikBhDorNjYKlNys1imPq2'}`,
  },
});

export async function fetchSanityData(query) {
  try {
    const response = await sanityClient.post('', { query });
    return response.data.result;
  } catch (error) {
    console.error('Error fetching data from Sanity:', error);
    return null;
  }
}
