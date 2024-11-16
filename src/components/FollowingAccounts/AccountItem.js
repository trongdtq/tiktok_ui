import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountPreview from './AccountPreview';
import styles from './FollowingAccounts.module.scss';
import Image from '../Image';

const cx = classNames.bind(styles);

function AccountItem({ data = [] }) {
  // Render Preview acconut
  const renderPreview = (props) => (
    <div tabIndex={'-1'} {...props}>
      <PopperWrapper className={cx('menu-popper')}>
        <AccountPreview dataAccount={data} />
      </PopperWrapper>
    </div>
  );

  return (
    // Using a wrapper <div> tag around the reference element
    //  solves this by creating a new parentNode context.
    <div>
      <Tippy interactive delay={[700, 0]} offset={[-20, 0]} placement="bottom" render={renderPreview}>
        <div className={cx('account-item')}>
          <Image className={cx('avatar')} src={data.avatar} alt={data.nickname} />

          <div className={cx('item-info')}>
            <p className={cx('nickname')}>
              <strong>{data.nickname}</strong>
              {data.tick & <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
            </p>
            <p className={cx('name')}>{data.full_name}</p>
          </div>
        </div>
      </Tippy>
    </div>
  );
}

AccountItem.propTypes = {};

export default AccountItem;
