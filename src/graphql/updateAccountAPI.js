import { GRAPHQL_ENDPOINT } from '../realm/constants';
import { gql, request } from 'graphql-request';

// const updateAccountQuery = gql`
//   query updateAccount($id: ObjectId) {
//     updateOneTra(query: { _id: $id }, set: { transactions: { link: $id } }) {
//       _id
//       type
//       number
//       balance
//       userId
//       currency
//       createdAt
//       transactions
//     }
//   }
// `;

const updateAccountQuery = gql`
  mutation updateAccount($query: AccountQueryInput, $set: AccountUpdateInput!) {
    updateOneAccount(query: $query, set: $set) {
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
        source_account
        destination_account
      }
    }
  }
`;

const updateAccountAPI = async ({
  updateAccountQueryVariables = {},
  headers = {},
}) => {
  const data = await request(
    GRAPHQL_ENDPOINT,
    updateAccountQuery,
    updateAccountQueryVariables,
    headers
  );

  return data;
};

export default updateAccountAPI;
