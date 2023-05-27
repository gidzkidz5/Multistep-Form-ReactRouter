import {Routes, Route, NavLink } from 'react-router-dom'
// import React from 'react'
import NotFound from './routes/NotFound';
import Home from './routes/Home';
import Step2 from './routes/Step2';
import Step3 from './routes/Step3';
import Step4 from './routes/Step4';
import { FormProvider } from './FormContext';
import Confirmation from './routes/Confirmation';






function App() {
 

  return (
    <FormProvider>
    <>
    <main className='flex' >
      <div className='flex' id="nav-form">
      <header>
        <nav>
          <ul>
            <li>
            <NavLink className='link' to="/gidzkidz5.github.io/Multistep-Form-ReactRouter" end>
              <div className='flex ff-sanserif'>
                <button className='circular-button'>1</button>
                <div className='uppercase'>
                  <h1 className='nav-steps'>Step 1</h1>
                  <h2 className='nav-title'>Your Info</h2>
                </div>
              </div>
            </NavLink>
            </li>
            <li>
            <NavLink className='link' to="../gidzkidz5.github.io/Multistep-Form-ReactRouter/step2" >
              <div className='flex ff-sanserif'>
                <button className='circular-button'>2</button>
                <div className='uppercase'>
                  <h1 className='nav-steps'>Step 2</h1>
                  <h2 className='nav-title'>Select Plan</h2>
                </div>
              </div>
            </NavLink>
            </li>
            <li>
            <NavLink className='link' to="../gidzkidz5.github.io/Multistep-Form-ReactRouter/step3" >
              <div className='flex ff-sanserif'>
                <button className='circular-button'>3</button>
                <div className='uppercase'>
                  <h1 className='nav-steps'>Step 3</h1>
                  <h2 className='nav-title'>Add-Ons</h2>
                </div>
              </div>
            </NavLink>
            </li>
            <li>
            <NavLink className='link' to="../gidzkidz5.github.io/Multistep-Form-ReactRouter/step4" >
              <div className='flex ff-sanserif'>
                <button className='circular-button'>4</button>
                <div className='uppercase'>
                  <h1 className='nav-steps'>Step 4</h1>
                  <h2 className='nav-title'>Summary</h2>
                </div>
              </div>
            </NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <Routes>
      <Route path="gidzkidz5.github.io/Multistep-Form-ReactRouter" >
        <Route index element={<Home />} />
        <Route path="step2" index element={<Step2 />} />
        <Route path="step3" index element={<Step3 />} />
        <Route path="step4" index element={<Step4 />} />
        <Route path="Confirmation" index element={<Confirmation />} />

      </Route>


      
      
      <Route path="*" element={<NotFound />} />
      </Routes>
      </div>
    </main>
    
    </>
    </FormProvider>
  )
}

export default App




// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <div>Hello world!</div>,
//   },
// ]);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );