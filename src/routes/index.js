import config from '~/config';

// Layouts
import { HeaderOnly } from '~/layouts';

// Pages
import Following from '~/pages/Following';
import Home from '~/pages/Home';
import Profile from '~/pages/Profile';
import Search from '~/pages/Search';
import Upload from '~/pages/Upload';
import Live from '~/pages/Live';
import Explore from '~/pages/Explore';
import Friends from '~/pages/Friends';
import Messages from '~/pages/Messages';

// Public Routes
const publicRoutes = [
  { path: config.routes.home, component: Home },
  { path: config.routes.explore, component: Explore },
  { path: config.routes.following, component: Following },
  { path: config.routes.friends, component: Friends },
  { path: config.routes.upload, component: Upload, layout: HeaderOnly },
  { path: config.routes.search, component: Search, layout: null },
  { path: config.routes.live, component: Live },
  { path: config.routes.messages, component: Messages },
  { path: config.routes.Profile, component: Profile },
];

// Private Routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
