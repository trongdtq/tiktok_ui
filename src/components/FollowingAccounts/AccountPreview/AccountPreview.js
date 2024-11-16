import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import Button from '~/components/Button';
import styles from './AccountPreview.module.scss';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

function AccountPreview({ dataAccount = [] }) {
  return (
    <div className={cx('wrapper')}>
      <header className={cx('header')}>
        <Image className={cx('avatar')} src={dataAccount.avatar} alt={dataAccount.nickname} />
        <div>
          <Button className={cx('follow-btn')} primary>
            Follow
          </Button>
        </div>
      </header>

      <main className={cx('body')}>
        <h2 className={cx('nickname')}>
          <strong>{dataAccount.nickname}</strong>
          {dataAccount.tick & <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
        </h2>
        <p className={cx('name')}>{dataAccount.full_name}</p>
        <p className={cx('analytisc')}>
          <strong className={cx('value')}>{dataAccount.followers_count}</strong>
          <span className={cx('label')}> Follower</span>

          <strong className={cx('value')}>{dataAccount.likes_count}</strong>
          <span className={cx('label')}> Linkes</span>
        </p>
      </main>
    </div>
  );
}

export default AccountPreview;
