import { useState } from 'react'
import {Routes, Route, BrowserRouter as Router} from 'react-router-dom'
import SignIn from './pages/SignIn'
import SignInWithEmail from './pages/SignIn/SubPages/SignWithEmail'
import AuthLayout from './layouts/AuthLayout'
import DashBoardLayout from './layouts/DashBoardLayout'
import Dashboard from './pages/Dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Routes>
          <Route element={<AuthLayout />} path="/">
            {/* <Route path="/" element={<SignIn />} /> */}
            <Route path="/" element={<SignInWithEmail />} />
            {/* <Route path="signup" element={<SignUp />} />
            <Route path="signup_with_email" element={<SignWithEmail />} />
            <Route path="signup_verify_otp" element={<VerifyOtp />} />
            <Route path="signup_set_password" element={<SetPassword />} />
            <Route path="signup_loading" element={<SignUpLoading />} />
            <Route path="forgot_password" element={<ForgotPassword />} />
            <Route path="forgot_password_mail" element={<PasswordMail />} />
            <Route path="change_password" element={<ResetPassword />} /> */}
          </Route>
          <Route path='/' element={<DashBoardLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
      </Routes>
    </Router>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
