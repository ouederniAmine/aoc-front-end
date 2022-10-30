import logo from './logo.svg';
import './App.css';
import authProvider from './auth/authProvider';
import * as React from "react";
import MyLoginPage from './login/MyloginPage';
import { MyLayout } from './MyLayout';
import BookIcon from '@mui/icons-material/Book';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import PeopleIcon from '@mui/icons-material/People';
import   {BookEdit} from './create/create';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Admin, Resource,CustomRoutes,Layout,Menu } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
const MyMenu = () => <Menu />;
const App = () => (
      <Admin loginPage={MyLoginPage} authProvider={authProvider} dataProvider={dataProvider} layout={MyLayout}>
          <Resource name="users" list={BookEdit} />
      
        
     </Admin>
  );

export default App;
