import { GRAPHQL_ENDPOINT } from '../realm/constants';
import { gql, request } from 'graphql-request';

const getAccountQuery = gql`
  query getAccount($id: ObjectId) {
    account(query: { _id: $id }) {
      _id
      type
      number
      balance
      userId
      currency
      createdAt
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

const getAccountAPI = async ({ queryVariables = {}, headers = {} }) => {
  const data = await request(
    GRAPHQL_ENDPOINT,
    getAccountQuery,
    queryVariables,
    headers
  );

  return data;
};

export default getAccountAPI;
