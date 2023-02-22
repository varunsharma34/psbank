import { GRAPHQL_ENDPOINT } from '../realm/constants';
import { gql, request } from 'graphql-request';

const getTransactionsQuery = gql`
  query getAllTransactions($data: Transaction!) {
    transactions(limit: 10) {
      _id
      number
      amount
      createdAt
      description
      destination_account
    }
  }
`;

const getTransactionsAPI = async ({ queryVariables = {}, headers = {} }) => {
  const data = await request(
    GRAPHQL_ENDPOINT,
    getTransactionsQuery,
    queryVariables,
    headers
  );

  return data;
};

export default getTransactionsAPI;
