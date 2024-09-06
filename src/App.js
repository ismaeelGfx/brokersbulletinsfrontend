



import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux'; // Import Provider from react-redux

import '../src/css/App.css';

import Landing from './Main-site/landing';
import Save from './Inner-Site/save';
import About from '../src/Main-site/about';
import Fave from '../src/Inner-Site/fave'
import Follow from './Inner-Site/follow';
import Inner from '../src/Inner-Site/inner';
import Dashboardmain from './Dashboard-Site/dashboardmain';
import Dashboard2 from './Dashboard-Site/dashboard2';
import Mainside  from './Dashboard-Site/oldside';
import LOGIN from './Login/login';

import Read from './Read';
import Login from './Login/loginttt';
import BrandUpload from './Admin_Screens/uploadbrand';
import CloudinaryUpload from './Admin_Screens/uploadbrand';
import Admin_Signup from './Admin_Screens/AdminSignup';
import Admin_Login from './Admin_Screens/AdminLogin';
import Form_Google from './GOOGLE_FOLDER/form';

function App() {
  return (
  
      <Router>
        <Routes>
          <Route path="/" exact element={<Landing />} />
          <Route path="/login" exact element={<LOGIN />} />
          <Route path="/save" exact element={<Save />} />
          <Route path="/oldside" exact element={<Mainside />} />
          <Route path="/main-dashboard" exact element={<Dashboardmain/>} />
          <Route path="/dashborad2" exact element={<Dashboard2/>} />
          <Route path="/fave" exact element={<Fave />} />


          <Route path="/view_email/:id" exact element={<Inner />} />



          <Route path="/follow" exact element={<Follow />} />
          <Route path="/about" exact element={<About />} />


          {/* <Route path="/view_email/:id" exact element={<View_Email />} /> */}


          <Route path="/read" exact element={<Read />} />



          <Route path="/ts" exact element={<CloudinaryUpload />} />

          <Route path="/admin-signup" exact element={<Admin_Signup />} />

          <Route path="/admin-login" exact element={<Admin_Login />} />



          <Route path="/google_form" exact element={<Form_Google />} />


        </Routes>
      </Router>
   
  );
}

export default App;

