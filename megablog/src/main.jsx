import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import  store  from './store/store.js'
import { BrowserRouter, createBrowserRouter } from 'react-router-dom'
import { Authlayout } from './components/index.js'
import AllPost from './Pages/AllPost.jsx'
import AddPost from './Pages/AddPost.jsx'
const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
          path:'/',
          element:<Home/>

      },
      {
        path:'/login',
        element:(
          <Authlayout authentication={false}>
              <Login/>
          </Authlayout>
        )
      },
      {
        path:'/signup',
        element:(
          <Authlayout authentication={false}>
            <Signup/>
            
          </Authlayout>
        )
      },
      {
        path:'/all-posts',
        element:(
          <Authlayout authentication>
            {""}
            <AllPost/>

          </Authlayout>
        )
      },
      {
        path:'/edit-post/:slug',
        element:(
          <Authlayout authentication>
            {""}
            <Editpost/>
          </Authlayout>
        )
      },
      {
        path:'/add-post',
        element:(
          <Authlayout>
            {""}
            <AddPost/>
          </Authlayout>
        )
      },
      {
        path:'/post/:slug',
        element:<Post/>

      }

    ]
    
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)