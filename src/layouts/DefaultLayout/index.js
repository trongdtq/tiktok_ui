import classNames from 'classnames/bind';
import Header from '~/layouts/components/Header';
import styles from './DefaltLayout.module.scss';
import Sidebar from './Sidebar';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
  return (
    <div className={cx('wrapper')}>
      <Header />
      <div className={cx('container')}>
        <Sidebar />
        <div className={cx('container')}>{children}</div>
      </div>
    </div>
  );
}

export default DefaultLayout;
