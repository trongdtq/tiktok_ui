import classNames from 'classnames/bind';
// icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical, faPlus } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional

import Button from '~/components/Button';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Menu from '~/components/Popper/Menu';
import {
  CoinIcon,
  CreatorIcon,
  FeedbackIcon,
  IdeaIcon,
  LanguageIcon,
  LightIcon,
  LogoutIcon,
  MessageIcon,
  SettingIcon,
  UserIcon,
} from '~/components/Icons';
import Image from '~/components/Image';
import Search from '../Search/index';

const cx = classNames.bind(styles);

function Header() {
  const currentUser = true;

  const MENU_ITEMS = [
    {
      icon: <CreatorIcon />,
      title: 'Công cụ dành cho nhà sáng tạo',
      children: {
        title: 'Công cụ dành cho nhà sáng tạo',
        data: [
          {
            type: 'creatorTools',
            icon: <IdeaIcon />,
            title: 'Trung tâm nhà sáng tạo LIVE',
          },
        ],
      },
    },
    {
      icon: <LanguageIcon />,
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
      icon: <FeedbackIcon />,
      title: 'Phản hồi và trợ giúp',
      to: './feedback',
    },
    {
      icon: <LightIcon />,
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
      icon: <UserIcon />,
      title: 'Xem hồ sơ',
      to: './user',
    },
    {
      icon: <CoinIcon />,
      title: 'Nhận xu',
      to: './coin',
    },
    {
      icon: <SettingIcon />,
      title: 'Cài đặt',
      to: './setting',
    },
    ...MENU_ITEMS,
    {
      icon: <LogoutIcon />,
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
        <Search />

        <div className={cx('actions')}>
          {currentUser ? (
            <>
              <Button square leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                Tải lên
              </Button>

              <Tippy content="Hội Thư" placement="bottom">
                <button className={cx('action-btn')}>
                  <MessageIcon />
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
              <Image
                src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/c9b27b91966166745b39845b8424fb26~c5_1080x1080.jpeg?lk3s=a5d48078&nonce=54539&refresh_token=8d14d868def6070062b94d0f04d81895&x-expires=1730876400&x-signature=F3GDtn1PjpIY2YDpyEEXQ7J2KsI%3D&shp=a5d48078&shcp=81f88b70"
                className={cx('user-avatar')}
                alt="user name"
                fallback="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-euttp/114965057d95841c681cbf38b1718905~c5_100x100.jpeg?lk3s=a5d48078&nonce=30958&refresh_token=83cc3f6559d45abca392f444582de0c9&x-expires=1730973600&x-signature=R4II1RQ7IeXvkAMIU%2FyG7MTWrU0%3D&shp=a5d48078&shcp=b59d6b55"
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
