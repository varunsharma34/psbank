export const APP_ID = 'psbank-gcnli';
export const GRAPHQL_ENDPOINT =
  'https://ap-south-1.aws.realm.mongodb.com/api/client/v2.0/app/psbank-gcnli/graphql';
export const CURRENCY_SYMBOL = '₹';

export const TransactionTableHeadings = [
  { name: 'Transaction ID' },
  { name: 'Amount' },
  { name: 'Destination Account' },
  { name: 'Description' },
  { name: 'Date' },
];

export const UpcomingTransactionTableHeadings = [
  { name: 'Payment to' },
  { name: 'Amount' },
  { name: 'Payee account' },
  { name: 'Description' },
  { name: 'Date' },
];
