import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';

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
import FollowingAccounts from '~/components/FollowingAccounts/FollowingAccounts';
import * as searchSevices from '~/services/searchService';

const cx = classNames.bind(styles);

function Sidebar() {
  const [listFollowng, setListFollowng] = useState([]);

  const followingUser = 'li';

  // Temporary use API search
  useEffect(() => {
    const fetchApi = async () => {
      //  async(await must always come before Promise)
      const result = await searchSevices.search(followingUser);
      setListFollowng(result);
    };

    fetchApi();
  }, [followingUser]);

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

      <FollowingAccounts label="Following accounts" data={listFollowng} />
    </aside>
  );
}

export default Sidebar;
