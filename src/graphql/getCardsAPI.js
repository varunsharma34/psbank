import { GRAPHQL_ENDPOINT } from '../realm/constants';
import { gql, request } from 'graphql-request';

const getCardsQuery = gql`
  query getAllCards {
    cards {
      _id
      type
      number
      userId
      currency
      createdAt
      limit
      balance
      expiry
    }
  }
`;

const getCardsAPI = async ({ queryVariables = {}, headers = {} }) => {
  const data = await request(
    GRAPHQL_ENDPOINT,
    getCardsQuery,
    queryVariables,
    headers
  );

  return data;
};

export default getCardsAPI;
