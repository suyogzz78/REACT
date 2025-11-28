import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { Provider } from 'react-redux';
import store from './store/store.js';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Authlayout, Signup } from './components/index.js';
import AllPost from './Pages/AllPost.jsx';
import AddPost from './Pages/AddPost.jsx';
import Home from './Pages/Home.jsx';
import Login from './components/Login.jsx';
import Editpost from './Pages/Editpost.jsx';
import Post from './Pages/Post.jsx';

// --- Router setup ---
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      {
        path: '/login',
        element: (
          <Authlayout authentication={false}>
            <Login />
          </Authlayout>
        ),
      },
      {
        path: '/signup',
        element: (
          <Authlayout authentication={false}>
            <Signup />
          </Authlayout>
        ),
      },
      {
        path: '/all-posts',
        element: (
          <Authlayout authentication>
            <AllPost />
          </Authlayout>
        ),
      },
      {
        path: '/edit-post/:slug',
        element: (
          <Authlayout authentication>
            <Editpost />
          </Authlayout>
        ),
      },
      {
        path: '/add-post',
        element: (
          <Authlayout>
            <AddPost />
          </Authlayout>
        ),
      },
      {
        path: '/post/:slug',
        element: <Post />,
      },
    ],
  },
]);

// --- Render the App ---
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
