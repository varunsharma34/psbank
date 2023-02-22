import { GRAPHQL_ENDPOINT } from '../realm/constants';
import { gql, request } from 'graphql-request';

const createAccountQuery = gql`
  mutation AddAccount($data: AccountInsertInput!) {
    insertOneAccount(data: $data) {
      _id
      number
      balance
    }
  }
`;

const createAccountAPI = async ({ queryVariables = {}, headers = {} }) => {
  const data = await request(
    GRAPHQL_ENDPOINT,
    createAccountQuery,
    queryVariables,
    headers
  );

  return data;
};

export default createAccountAPI;
