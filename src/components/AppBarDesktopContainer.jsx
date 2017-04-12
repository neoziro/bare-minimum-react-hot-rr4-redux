import { connect } from 'react-redux';
import AppBarDesktop from './AppBarDesktop';

export default connect((state) => ({
    newsData:state.newsData
    //newsData:'my news data'
}))(AppBarDesktop);

