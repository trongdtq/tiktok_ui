import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import config from '~/config';
import Menu, { MenuItem } from './Menu';
import {
  ExploreActiveIcon,
  ExploreIcon,
  FriendsActiveIcon,
  FriendsIcon,
  HomeActiveIcon,
  HomeIcon,
  LiveActiveIcon,
  LiveIcon,
  MessagesIcon,
  ProfileIcon,
  UserGroupActiveIcon,
  UserGroupIcon,
} from '~/components/Icons';

const cx = classNames.bind(styles);

function Sidebar() {
  console.log('routes', config.routes);
  return (
    <aside className={cx('wrapper')}>
      <Menu>
        <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
        <MenuItem
          title="Explore"
          to={config.routes.explore}
          icon={<ExploreIcon />}
          activeIcon={<ExploreActiveIcon />}
        />
        <MenuItem
          title="Following"
          to={config.routes.following}
          icon={<UserGroupIcon />}
          activeIcon={<UserGroupActiveIcon />}
        />
        <MenuItem
          title="Friends"
          to={config.routes.friends}
          icon={<FriendsIcon />}
          activeIcon={<FriendsActiveIcon />}
        />
        <MenuItem title="Live" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
        <MenuItem title="Messages" to={config.routes.messages} icon={<MessagesIcon />} />
        <MenuItem title="Profile" to={config.routes.Profile} icon={<ProfileIcon />} />
      </Menu>
    </aside>
  );
}

export default Sidebar;
