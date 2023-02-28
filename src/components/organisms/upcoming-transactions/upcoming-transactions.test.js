import { render } from '@testing-library/react';
import UpcomingTransactions from './index';

test('renders UpcomingTransactions component', () => {
  const data = [
    {
      amount: 100,
      createdAt: '2023-02-28T09:43:11.206Z',
      description: 'Testing',
      destination_account: 1234567,
      number: 745395850794,
      _id: '63fdccafa5acb333241eb884',
    },
  ];
  render(<UpcomingTransactions data={data} />);
});
