import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

function AcccountItem() {
  return (
    <div className={cx('wrapper')}>
      <Image
        className={cx('avatar')}
        src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/3a922101ab333e99bdb6436a8e6266b6~c5_300x300.webp?lk3s=a5d48078&nonce=95846&refresh_token=3c89b2f80a2a967c1ce5812dae074935&x-expires=1730440800&x-signature=iWbC4xqittr40d2bn9vFt6C%2B8H4%3D&shp=a5d48078&shcp=c1333099"
        alt="heyhey"
      />
      <div className={cx('info')}>
        <h4 className={cx('name')}>
          <span>Store Aesthetic</span>
          <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
        </h4>
        <span className={cx('username')}>storeaesthetic</span>
      </div>
    </div>
  );
}

export default AcccountItem;
