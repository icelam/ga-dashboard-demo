import axios from 'axios';

const getAlanyticsAccessToken = () => axios.get(`${process.env.REACT_APP_TOKEN_GENERATOR_ENDPOINT}/v1/token`);

export default getAlanyticsAccessToken;
