import React from 'react';
import Signup from './authentication/Signup';
import Profile from './authentication/Profile';
import Login from './authentication/Login';
import PrivateRoute from './authentication/PrivateRoute';
import ForgotPassword from './authentication/ForgotPassword';
import UpdateProfile from './authentication/UpdateProfile';
import { AuthProvider } from '../contexts/authContext';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './google-drive/Dashboard';

function App() {
  return (    
      <>
        <Router>
          <AuthProvider>
            <Routes>
              {/* Drive */}
              <Route path="/"
                element={
                  <PrivateRoute>
                    <Dashboard />
                  </PrivateRoute>
                }
              />
              <Route path="/folder/:folderId"
                element={
                  <PrivateRoute>
                    <Dashboard />
                  </PrivateRoute>
                }
              />
      
              {/* Auth */}
              <Route path='/signup' Component={Signup} />
              <Route path='/login' Component={Login} />
              <Route path='/forgot-password' Component={ForgotPassword} />

             
              {/* Profile */}
              <Route path="/user"
                element={
                  <PrivateRoute>
                    <Profile />
                  </PrivateRoute>
                }
              />
              <Route path="/user/update-profile"
                element={
                  <PrivateRoute>
                    <UpdateProfile />
                  </PrivateRoute>
                }
              />
            </Routes>
          </AuthProvider>
        </Router>
      </>
  );
}

export default App;
