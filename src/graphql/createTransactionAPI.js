import { GRAPHQL_ENDPOINT } from '../realm/constants';
import { gql, request } from 'graphql-request';

const createTrasnsactionQuery = gql`
  mutation AddTransaction($data: TransactionInsertInput!) {
    insertOneTransaction(data: $data) {
      _id
      number
      createdAt
      amount
      source_account
      destination_account
    }
  }
`;

const createTransactionAPI = async ({ queryVariables = {}, headers = {} }) => {
  const data = await request(
    GRAPHQL_ENDPOINT,
    createTrasnsactionQuery,
    queryVariables,
    headers
  );

  return data;
};

export default createTransactionAPI;
