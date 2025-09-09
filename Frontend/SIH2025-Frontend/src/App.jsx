import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import LandingPage from './components/LandingPage'
import './App.css'
// import AdminDashboard from './components/AdminDashboard'
// import DropSheet from './components/DropSheet'

import Layout from './components/Layout'

import LandingPageLayout from './components/LandingPageLayout'
import DropSheetLayout from './components/DropSheetLayout'
import AdminLayout from './components/AdminLayout'
import NotFound from './components/NoteFound'
import TypeErrorPage from './components/TypeErrorPage'
import ContactPage from './components/ContactPage'
import AboutUsPage from './components/AboutUsPage'
import ServicesPage from './components/ServicesPage'



function App() {

  return (
    <>

      {/* <div> */}
      {/* <LandingPage /> */}
      {/* <DropSheet /> */}

      {/* </div> */}
      {/* <AdminDashboard /> */}

      <Router>
        <Layout>
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<LandingPageLayout />} />
            <Route path="/type-error" element={<TypeErrorPage />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/login" element={<TypeErrorPage />} />
            <Route path="/drop-sheet" element={<DropSheetLayout />} />
            <Route path="/admin-dashboard" element={<AdminLayout />} />
            <Route path='/institution-dashboard' element={<AdminLayout />} />

          </Routes>
        </Layout>
      </Router>



    </>
  )
}

export default App
