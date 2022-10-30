import { Menu } from 'react-admin';
import BookIcon from '@mui/icons-material/Book';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import PeopleIcon from '@mui/icons-material/People';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
export const MyMenu = () => (
    <Menu>
        <Menu.DashboardItem />
        <Menu.Item to="/donations" primaryText="donations" leftIcon={<VolunteerActivismIcon />}/>
        <Menu.Item to="/statistics" primaryText="statistics" leftIcon={<EqualizerIcon />}/>
        <Menu.Item to="/users" primaryText="Users" leftIcon={<PeopleIcon />}/>
    </Menu>
);