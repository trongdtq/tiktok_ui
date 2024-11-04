import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
// icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage } from '@fortawesome/free-regular-svg-icons';
import {
  faCircleXmark,
  faSpinner,
  faMagnifyingGlass,
  faEllipsisVertical,
  faEarthAsia,
  faCircleQuestion,
  faMoon,
  faHouseLaptop,
  faPlus,
  faCoins,
  faGear,
  faCircleUser,
  faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'; // optional

import Button from '~/components/Button';
import styles from './Header.module.scss';
import images from '~/assets/images';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AcccountItem from '~/components/AccountItem';
import Menu from '~/components/Popper/Menu';

const cx = classNames.bind(styles);

function Header() {
  const [searchResult, setSearchResult] = useState([]);

  const currentUser = true;

  useEffect(() => {
    setTimeout(() => {
      setSearchResult([]);
    }, 0);
  }, []);

  const MENU_ITEMS = [
    {
      icon: <FontAwesomeIcon icon={faHouseLaptop} />,
      title: 'Công cụ dành cho nhà sáng tạo',
      children: {
        title: 'Công cụ dành cho nhà sáng tạo',
        data: [
          {
            type: 'creatorTools',
            title: 'Trung tâm nhà sáng tạo LIVE',
          },
        ],
      },
    },
    {
      icon: <FontAwesomeIcon icon={faEarthAsia} />,
      title: 'Tiếng Việt',
      children: {
        title: 'Language',
        data: [
          {
            type: 'language',
            code: 'vi',
            title: 'Tiếng Việt', // Vietnam
            children: {
              title: 'Language',
              data: [
                {
                  type: 'language',
                  code: 'vi',
                  title: 'Tiếng Việt 1', // Vietnam
                },
                {
                  type: 'language',
                  code: 'en',
                  title: 'English 1', // United States, Canada, Australia, etc.
                },
                {
                  type: 'language',
                  code: 'fi',
                  title: 'Suomi 1', // Finland
                },
                {
                  type: 'language',
                  code: 'no',
                  title: 'Norsk 1', // Norway
                },
              ],
            },
          },
          {
            type: 'language',
            code: 'en',
            title: 'English', // United States, Canada, Australia, etc.
          },
          {
            type: 'language',
            code: 'fi',
            title: 'Suomi', // Finland
          },
          {
            type: 'language',
            code: 'no',
            title: 'Norsk', // Norway
          },
        ],
      },
    },
    {
      icon: <FontAwesomeIcon icon={faCircleQuestion} />,
      title: 'Phản hồi và trợ giúp',
      to: './feedback',
    },
    {
      icon: <FontAwesomeIcon icon={faMoon} />,
      title: 'Chế độ tối',
      children: {
        title: 'Chế độ tối',
        data: [
          {
            code: 'automatic',
            title: 'Tự động',
          },
          {
            code: 'darkMode',
            title: 'Chế độ tối',
          },
          {
            code: 'lightMode',
            title: 'Chế độ sáng',
          },
        ],
      },
    },
  ];

  const userMenu = [
    {
      icon: <FontAwesomeIcon icon={faCircleUser} />,
      title: 'Xem hồ sơ',
      to: './user',
    },
    {
      icon: <FontAwesomeIcon icon={faCoins} />,
      title: 'Nhận xu',
      to: './coin',
    },
    {
      icon: <FontAwesomeIcon icon={faGear} />,
      title: 'Cài đặt',
      to: './setting',
    },
    ...MENU_ITEMS,
    {
      icon: <FontAwesomeIcon icon={faSignOut} />,
      title: 'Log out',
      to: './logout',
      separate: true, // hiển thị vạch
    },
  ];

  // Handle logic
  const handleMenuChange = (menuItem) => {
    switch (menuItem.type) {
      case 'language':
        // logic
        console.log('handle menu language', menuItem);
        break;
      case 'creatorTools':
        // logic
        console.log('handle creator tools', menuItem);
        break;
      default:
        console.log('handleOMenuChage', menuItem);
    }
  };

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        {/* logo */}
        <div className={cx('logo')}>
          <img src={images.logo} alt="Tiktok" />
        </div>

        {/* search */}
        <HeadlessTippy
          interactive
          visible={searchResult.length > 0}
          render={(attrs) => (
            // search result
            <div className={cx('search-result')} tabIndex={'-1'} {...attrs}>
              <PopperWrapper>
                <h4 className={cx('search-title')}>Accounts</h4>
                <AcccountItem />
                <AcccountItem />
                <AcccountItem />
              </PopperWrapper>
            </div>
          )}
        >
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
        </HeadlessTippy>

        <div className={cx('actions')}>
          {currentUser ? (
            <>
              <Button square leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                Tải lên
              </Button>

              <Tippy content="Hội Thư" placement="bottom">
                <button className={cx('action-btn')}>
                  <FontAwesomeIcon icon={faMessage} />
                </button>
              </Tippy>
            </>
          ) : (
            <>
              {/* Login */}
              {/* <Button text> Upload</Button> */}
              <Button
                primary
                onClick={() => {
                  alert('login');
                }}
              >
                Log in
              </Button>
            </>
          )}
          {/* Menu */}
          <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
            {currentUser ? (
              <img
                src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/c9b27b91966166745b39845b8424fb26~c5_1080x1080.jpeg?lk3s=a5d48078&nonce=54539&refresh_token=8d14d868def6070062b94d0f04d81895&x-expires=1730876400&x-signature=F3GDtn1PjpIY2YDpyEEXQ7J2KsI%3D&shp=a5d48078&shcp=81f88b70"
                className={cx('user-avatar')}
                alt="user name"
              />
            ) : (
              <button className={cx('menu-btn')}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
