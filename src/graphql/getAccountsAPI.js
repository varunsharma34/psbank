import { GRAPHQL_ENDPOINT } from '../realm/constants';
import { gql, request } from 'graphql-request';

const getAccountsQuery = gql`
  query getAllAccounts {
    #   expenses(sortBy: CREATEDAT_DESC) {
    #     _id
    #     name
    #   }

    accounts {
      _id
      type
      number
      balance
      userId
      currency
      createdAt
    }
  }
`;

const getAccountsAPI = async ({ queryVariables = {}, headers = {} }) => {
  const data = await request(
    GRAPHQL_ENDPOINT,
    getAccountsQuery,
    queryVariables,
    headers
  );

  return data;
};

export default getAccountsAPI;
