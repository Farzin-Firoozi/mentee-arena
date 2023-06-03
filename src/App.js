import './App.css';
import Home from './pages/Home';
import Error from './pages/Error';
import Bookmarks from './pages/Bookmarks';

//rrd
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './pages/RootLayout';



function App() {

  const router = createBrowserRouter([

    { path:'/',
      element: <RootLayout/>,
      errorElement: <Error/>,
      children:[
        {
          index: 'true',
          element: <Home/>
          
        },
      {
        path: 'bookmarks',
        element: <Bookmarks/>
        
      },
     ]
   }


  ])


  return (
    <div className="App">
         <RouterProvider router={router} /> 
    </div>
  );
}

export default App;
