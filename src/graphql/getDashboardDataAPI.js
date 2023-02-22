import { GRAPHQL_ENDPOINT } from '../realm/constants';
import { gql, request } from 'graphql-request';

const getDashboardDataQuery = gql`
  query getDashboadData {
    accounts {
      _id
      type
      number
      balance
    }

    cards {
      _id
      number
      expiry
      type
      balance
    }

    transactions {
      _id
      number
      amount
      destination_account
      createdAt
      description
    }

    upcoming_transactions {
      _id
      number
      amount
      destination_account
      createdAt
      description
    }
  }
`;

const getDashboardDataAPI = async ({ queryVariables = {}, headers = {} }) => {
  const data = await request(
    GRAPHQL_ENDPOINT,
    getDashboardDataQuery,
    queryVariables,
    headers
  );

  return data;
};

export default getDashboardDataAPI;
