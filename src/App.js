import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Explore from './pages/Explore'
import Offers from './pages/Offers'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import ForgotPassword from './pages/ForgotPassword'
import Navbar from './components/Navbar'
import Profile from './pages/Profile'
import Category from './pages/Category'
import PrivateRoute from './components/PrivateRoute'
import CreateListing from './pages/CreateListing'
import Listing from './pages/Listing'
import Contact from './pages/Contact'
import EditListing from './pages/EditListing'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Explore />} />
        <Route path='/offers' element={<Offers />} />
        <Route path='/category/:categoryName' element={<Category />} />
        <Route
          path='/category/:categoryName/:listingId'
          element={<Listing />}
        />

        <Route path='/profile' element={<PrivateRoute />}>
          <Route path='/profile' element={<Profile />} />
        </Route>
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/create-listing' element={<CreateListing />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/contact/:landlordId' element={<Contact />} />
        <Route path='/edit-listing/:listingId' element={<EditListing />} />
      </Routes>
      <Navbar />
      <ToastContainer />
    </BrowserRouter>
  )
}

export default App
