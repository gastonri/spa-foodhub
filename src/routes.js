import { HOME_PATH, LOGIN_PATH } from './paths';
import pages from '../src/components/pages';

const LOGIN_PAGE = {
    component: pages.Login,
    exact: false,
    path: LOGIN_PATH
};

const HOME_PAGE = {
    component: pages.Homepage,
    exact: true,
    path: HOME_PATH
};

export default [LOGIN_PAGE, HOME_PAGE];
