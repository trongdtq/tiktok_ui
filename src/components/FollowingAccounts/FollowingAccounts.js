import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './FollowingAccounts.module.scss';
import AccountItem from './AccountItem';

const cx = classNames.bind(styles);

function FollowingAccounts({ data = [], label }) {
  console.log('dâdadada', data);
  return (
    <div className={cx('wrapper')}>
      <h2 className={cx('label')}>{label}</h2>

      {data.map((item) => (
        <AccountItem data={item} />
      ))}

      {/* <AccountItem data={data} />
      <AccountItem data={data} />
      <AccountItem data={data} /> */}

      <p className={cx('more-btn')}>See all</p>
    </div>
  );
}

FollowingAccounts.propTypes = {
  label: PropTypes.string.isRequired,
};

export default FollowingAccounts;
