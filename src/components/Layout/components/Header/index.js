import classNames from 'classnames/bind';
// icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import styles from './Header.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function Header() {
  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        {/* logo */}
        <div className={cx('logo')}>
          <img src={images.logo} alt="Tiktok" />
        </div>

        {/* search */}
        <div className={cx('search')}>
          <input placeholder="Tìm kiếm" spellCheck={false} />
          {/* btn clear */}
          <button className={cx('clear')}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
          {/* loading */}
          <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

          {/* btn search */}
          <button className={cx('search-btn')}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
        <div className={cx('actions')}></div>
      </div>
    </header>
  );
}

export default Header;
