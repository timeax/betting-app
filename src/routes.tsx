import Home from "./layouts/Home";
import { EditCalendar, Star, Dashboard as HomeIcon, LiveTv } from '@mui/icons-material'
import Register from "./layouts/Registry/register";
import Login from "./layouts/Registry/login";
export const routes: Routes = [
    {
        id: 'home',
        route: '/register',
        element: <Register />,
        name: 'Home',
        icon: <HomeIcon />
    },
    {
        id: 'home',
        route: '/login',
        element: <Login />,
        name: 'Home',
        icon: <HomeIcon />
    },
    {
        id: 'home',
        route: '/',
        element: <Home />,
        name: 'Home',
        header: true,
        footer: true,
        isNav: true,
        icon: <HomeIcon />
    },
    {
        id: 'featured',
        route: '/featured',
        element: <Home />,
        name: 'Featured',
        header: true,
        footer: true,
        isNav: true,
        icon: <Star />
    },
    {
        id: 'live',
        route: '/Live',
        element: <Home />,
        name: 'live',
        header: true,
        footer: true,
        isNav: true,
        icon: <LiveTv />
    },
    {
        id: 'calender',
        route: '/calender',
        element: <Home />,
        name: 'Calender',
        header: true,
        footer: true,
        isNav: true,
        icon: <EditCalendar />
    }
]

export type Routes = Array<Route>;

interface Route {
    id: string;
    name: string;
    route: string;
    icon: React.ReactElement
    element: React.ReactElement;
    header?: boolean;
    footer?: boolean;
    search?: boolean;
    isNav?: boolean
}