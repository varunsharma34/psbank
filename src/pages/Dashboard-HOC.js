import { useEffect, useState, useContext } from 'react';
import PageContainer from '../components/molecules/container';
import AccountList from '../components/organisms/account-list';
import CardList from '../components/organisms/card-list';
import RecentTransactions from '../components/organisms/recent-transactions';
import UpcomingTransactions from '../components/organisms/upcoming-transactions';
import getDashboardDataAPI from '../graphql/getDashboardDataAPI';
import { UserContext } from '../contexts/user.context';
import { AccountSummarySkeleton } from '../components/molecules/account-summary';
import { Alert } from '@mui/material';
import Loader from '../components/atoms/loader';

const DashboardHOC = () => {
  const [data, setData] = useState([]);
  const [isDataLoading, setDataLoading] = useState(true);
  const [getDataApiError, setDataApiError] = useState();
  const { user } = useContext(UserContext);
  const headers = { Authorization: `Bearer ${user._accessToken}` };

  const getDashboardData = async () => {
    try {
      const data = await getDashboardDataAPI({ headers });

      setData(data);
      setDataLoading(false);
    } catch (error) {
      setDataApiError(error.error);
    }
  };

  useEffect(() => {
    getDashboardData();
  }, []);

  return (
    <PageContainer>
      {isDataLoading ? (
        <Loader />
      ) : (
        <>
          <AccountList data={data.accounts} />
          <CardList data={data.cards} />
          <UpcomingTransactions data={data.upcoming_transactions} />
          <RecentTransactions data={data.transactions} />
        </>
      )}

      {getDataApiError && <Alert severity='error'>No data found!</Alert>}
    </PageContainer>
  );
};

export default DashboardHOC;
