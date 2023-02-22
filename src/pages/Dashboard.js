import PageContainer from '../components/molecules/container';
import AccountList from '../components/organisms/account-list';
import CardList from '../components/organisms/card-list';
import RecentTransactions from '../components/organisms/recent-transactions';
import UpcomingTransactions from '../components/organisms/upcoming-transactions';

const Dashboard = () => {
  return (
    <PageContainer>
      <AccountList />
      <CardList />
      <UpcomingTransactions />
      <RecentTransactions />
    </PageContainer>
  );
};

export default Dashboard;
