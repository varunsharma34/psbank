import { GRAPHQL_ENDPOINT } from '../realm/constants';
import { gql, request } from 'graphql-request';

const getCardQuery = gql`
  query getCard($id: ObjectId) {
    card(query: { _id: $id }) {
      _id
      type
      number
      balance
      limit
      expiry
      userId
      currency
      createdAt
      annualCharges
      transactions {
        _id
        number
        amount
        createdAt
        description
        destination_account
      }
    }
  }
`;

const getCardAPI = async ({ queryVariables = {}, headers = {} }) => {
  const data = await request(
    GRAPHQL_ENDPOINT,
    getCardQuery,
    queryVariables,
    headers
  );

  return data;
};

export default getCardAPI;
