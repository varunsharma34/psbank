import { GRAPHQL_ENDPOINT } from '../realm/constants';
import { gql, request } from 'graphql-request';

const createCardQuery = gql`
  mutation AddCard($data: CardInsertInput!) {
    insertOneCard(data: $data) {
      _id
      number
      expiry
      type
      balance
    }
  }
`;

const createCardAPI = async ({ queryVariables = {}, headers = {} }) => {
  const data = await request(
    GRAPHQL_ENDPOINT,
    createCardQuery,
    queryVariables,
    headers
  );

  return data;
};

export default createCardAPI;
