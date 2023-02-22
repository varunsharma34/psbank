import { GRAPHQL_ENDPOINT } from '../realm/constants';
import { gql, request } from 'graphql-request';

const updateCardQuery = gql`
  mutation updateAccount($query: CardQueryInput, $set: CardUpdateInput!) {
    updateOneCard(query: $query, set: $set) {
      _id
      type
      number
      balance
      limit
      userId
      currency
      createdAt
      expiry
      annualCharges
      transactions {
        _id
        number
        amount
        createdAt
        description
        source_account
        destination_account
      }
    }
  }
`;

const updateCardAPI = async ({
  updateCardQueryVariables = {},
  headers = {},
}) => {
  const data = await request(
    GRAPHQL_ENDPOINT,
    updateCardQuery,
    updateCardQueryVariables,
    headers
  );

  return data;
};

export default updateCardAPI;
