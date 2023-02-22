import { React } from 'react';
import getDashboardDataAPI from '../graphql/getDashboardDataAPI';
import { UserContext } from '../../contexts/user.context';

const withDataHOC = (WrappedComponent) => {
  class WithFetchHOC extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: [],
        isDataLoading: true,
        isError: false,
      };
    }

    async componentDidUpdate() {
      const { user } = this.useContext(UserContext);
      const headers = { Authorization: `Bearer ${user._accessToken}` };

      try {
        const data = await getDashboardDataAPI({ headers });

        this.setState({
          data: data,
          isDataLoading: false,
        });
      } catch (error) {
        this.setState({
          isError: error.error,
        });
        // setDataApiError(error.error);
      }
    }

    render() {
      return <WrappedComponent data={this.state} {...this.props} />;
    }
  }

  return WithFetchHOC;
};

export default withDataHOC;
