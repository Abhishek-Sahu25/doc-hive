// import React, { useState } from 'react';
// import { Activity } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';

// const PAuthPage = () => {
//   const [isLogin, setIsLogin] = useState(true);
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//     name: ''
//   });
//   const [error, setError] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');
//     setIsLoading(true);

//     if (!formData.email || !formData.password) {
//       setError('Email and password are required.');
//       setIsLoading(false);
//       return;
//     }

//     try {
//       if (isLogin) {
//         // Fetch users and check for matching email and password
//         const response = await fetch('http://localhost:5000/users');
//         if (!response.ok) throw new Error('Failed to fetch users');
        
//         const users = await response.json();
//         const user = users[formData.email];

//         if (user && user.password === formData.password) {
//           console.log('Login successful:', user);
//           localStorage.setItem('user', JSON.stringify(user));
//           navigate("/pdashboard");
//         } else {
//           setError('Invalid email or password.');
//         }
//       } else {
//         // Sign-up: Check if the user already exists
//         const response = await fetch('http://localhost:5000/users');
//         if (!response.ok) throw new Error('Failed to fetch users');

//         const users = await response.json();
//         if (users[formData.email]) {
//           setError('User already exists.');
//           setIsLoading(false);
//           return;
//         }

//         // Create new user
//         const newUser = {
//           email: formData.email,
//           password: formData.password,
//           name: formData.name
//         };

//         const postResponse = await fetch('http://localhost:5000/users', {
//           method: 'PATCH', // Using PATCH to merge new user into existing users
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({
//             [formData.email]: newUser
//           }),
//         });

//         if (postResponse.ok) {
//           console.log('Sign-up successful');
//           alert('Sign-Up successful!');
//           setIsLogin(true);
//           navigate("/pdashboard");
//         } else {
//           setError('Failed to sign up. Please try again.');
//         }
//       }
//     } catch (err) {
//       console.error('Error:', err);
//       setError('Something went wrong. Please try again.');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-r bg-blue-50 flex flex-col items-center justify-center px-4">
//       <div className="w-full max-w-md">
//         <div className="flex items-center justify-center mb-8">
//           <Activity className="h-8 w-8 text-blue-700 mr-2" />
//           <span className="text-xl font-bold text-blue-900">DocHive</span>
//         </div>
        
//         <div className="bg-blue-100 rounded-lg shadow-xl p-8">
//           <div className="flex mb-8">
//             <button
//               className={`flex-1 py-2 text-center ${isLogin ? 'text-blue-700 border-b-2 border-blue-700' : 'text-blue-500'}`}
//               onClick={() => { setIsLogin(true); setError(''); }}
//             >
//               Login
//             </button>
//             <button
//               className={`flex-1 py-2 text-center ${!isLogin ? 'text-blue-700 border-b-2 border-blue-700' : 'text-blue-500'}`}
//               onClick={() => { setIsLogin(false); setError(''); }}
//             >
//               Sign Up
//             </button>
//           </div>

//           <form onSubmit={handleSubmit} className="space-y-6">
//             {!isLogin && (
//               <div>
//                 <label className="block text-blue-900 mb-2">Full Name</label>
//                 <input
//                   type="text"
//                   name="name"
//                   className="w-full px-4 py-2 rounded-lg bg-blue-50 text-blue-900 border border-blue-400 focus:border-blue-700 focus:outline-none"
//                   placeholder="Enter your full name"
//                   value={formData.name}
//                   onChange={handleChange}
//                 />
//               </div>
//             )}

//             <div>
//               <label className="block text-blue-900 mb-2">Email Address</label>
//               <input
//                 type="email"
//                 name="email"
//                 className="w-full px-4 py-2 rounded-lg bg-blue-50 text-blue-900 border border-blue-400 focus:border-blue-700 focus:outline-none"
//                 placeholder="Enter your email"
//                 value={formData.email}
//                 onChange={handleChange}
//               />
//             </div>

//             <div>
//               <label className="block text-blue-900 mb-2">Password</label>
//               <input
//                 type="password"
//                 name="password"
//                 className="w-full px-4 py-2 rounded-lg bg-blue-50 text-blue-900 border border-blue-400 focus:border-blue-700 focus:outline-none"
//                 placeholder="Enter your password"
//                 value={formData.password}
//                 onChange={handleChange}
//               />
//             </div>

//             {error && (
//               <p className="text-red-500 text-sm mt-2 text-center">
//                 {error}
//               </p>
//             )}

//             {isLogin && (
//               <div className="text-right">
//                 <a href="#" className="text-sm text-blue-700 hover:text-blue-600">
//                   Forgot Password?
//                 </a>
//               </div>
//             )}

//             <button
//               type="submit"
//               className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
//               disabled={isLoading}
//             >
//               {isLoading ? "Processing..." : isLogin ? 'Login' : 'Sign Up'}
//             </button>
//           </form>

//           <div className="mt-6 text-center text-blue-700">
//             {isLogin ? (
//               <p>
//                 Don't have an account?{' '}
//                 <button className="text-blue-600 hover:text-blue-500" onClick={() => setIsLogin(false)}>
//                   Sign up
//                 </button>
//               </p>
//             ) : (
//               <p>
//                 Already have an account?{' '}
//                 <button className="text-blue-600 hover:text-blue-500" onClick={() => setIsLogin(true)}>
//                   Login
//                 </button>
//               </p>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PAuthPage;




import React, { useState } from 'react';
import { Activity, Mail, Lock, User, AlertTriangle, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PAuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Form validation
    if (!formData.email || !formData.password) {
      setError('Email and password are required.');
      setIsLoading(false);
      return;
    }

    if (!isLogin) {
      if (!formData.name) {
        setError('Full name is required.');
        setIsLoading(false);
        return;
      }
      
      if (formData.password !== formData.confirmPassword) {
        setError('Passwords do not match.');
        setIsLoading(false);
        return;
      }
    }

    try {
      if (isLogin) {
        // Fetch users and check for matching email and password
        const response = await fetch('http://localhost:5000/users');
        if (!response.ok) throw new Error('Failed to fetch users');
        
        const users = await response.json();
        const user = users[formData.email];

        if (user && user.password === formData.password) {
          console.log('Login successful:', user);
          localStorage.setItem('user', JSON.stringify(user));
          
          // Show success message with animation before redirect
          setError('');
          setTimeout(() => {
            navigate("/pdashboard");
          }, 500);
        } else {
          setError('Invalid email or password.');
        }
      } else {
        // Sign-up: Check if the user already exists
        const response = await fetch('http://localhost:5000/users');
        if (!response.ok) throw new Error('Failed to fetch users');

        const users = await response.json();
        if (users[formData.email]) {
          setError('Email already registered. Please use a different email.');
          setIsLoading(false);
          return;
        }

        // Create new user
        const newUser = {
          email: formData.email,
          password: formData.password,
          name: formData.name
        };

        const postResponse = await fetch('http://localhost:5000/users', {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            [formData.email]: newUser
          }),
        });

        if (postResponse.ok) {
          console.log('Sign-up successful');
          
          // Store user data and redirect
          localStorage.setItem('user', JSON.stringify(newUser));
          
          // Show success message before redirect
          setError('');
          setTimeout(() => {
            navigate("/pdashboard");
          }, 500);
        } else {
          setError('Failed to sign up. Please try again.');
        }
      }
    } catch (err) {
      console.error('Error:', err);
      setError('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex flex-col items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center p-4 bg-white rounded-full shadow-md mb-4">
            <Activity className="h-10 w-10 text-indigo-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900">DocHive</h1>
          <p className="mt-2 text-indigo-600">Patient Healthcare Portal</p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="p-8">
            <div className="flex justify-between mb-8">
              <div className="w-full">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  {isLogin ? 'Welcome Back' : 'Create Your Account'}
                </h2>
                
                <div className="flex space-x-1 mb-8">
                  <button 
                    className={`py-2 px-3 rounded-lg transition-all duration-200 ${
                      isLogin 
                        ? 'bg-indigo-100 text-indigo-700 font-medium' 
                        : 'text-gray-500 hover:text-indigo-600'
                    }`}
                    onClick={() => { setIsLogin(true); setError(''); }}
                  >
                    Sign In
                  </button>
                  <button 
                    className={`py-2 px-3 rounded-lg transition-all duration-200 ${
                      !isLogin 
                        ? 'bg-indigo-100 text-indigo-700 font-medium' 
                        : 'text-gray-500 hover:text-indigo-600'
                    }`}
                    onClick={() => { setIsLogin(false); setError(''); }}
                  >
                    Sign Up
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {!isLogin && (
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User className="h-5 w-5 text-indigo-500" />
                      </div>
                      <input
                        type="text"
                        name="name"
                        className="w-full pl-10 px-4 py-3 rounded-lg bg-gray-50 text-gray-800 border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 focus:outline-none transition-all"
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                  )}

                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-indigo-500" />
                    </div>
                    <input
                      type="email"
                      name="email"
                      className="w-full pl-10 px-4 py-3 rounded-lg bg-gray-50 text-gray-800 border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 focus:outline-none transition-all"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-indigo-500" />
                    </div>
                    <input
                      type="password"
                      name="password"
                      className="w-full pl-10 px-4 py-3 rounded-lg bg-gray-50 text-gray-800 border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 focus:outline-none transition-all"
                      placeholder="Password"
                      value={formData.password}
                      onChange={handleChange}
                    />
                  </div>

                  {!isLogin && (
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Lock className="h-5 w-5 text-indigo-500" />
                      </div>
                      <input
                        type="password"
                        name="confirmPassword"
                        className="w-full pl-10 px-4 py-3 rounded-lg bg-gray-50 text-gray-800 border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 focus:outline-none transition-all"
                        placeholder="Confirm Password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                      />
                    </div>
                  )}

                  {error && (
                    <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg flex items-center">
                      <AlertTriangle className="h-5 w-5 mr-2 flex-shrink-0" />
                      <p className="text-sm">{error}</p>
                    </div>
                  )}

                  {isLogin && (
                    <div className="text-right">
                      <a href="#" className="text-sm text-indigo-600 hover:text-indigo-800 transition-colors">
                        Forgot password?
                      </a>
                    </div>
                  )}

                  <button
                    type="submit"
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-4 rounded-lg shadow-md transition-all duration-200 flex items-center justify-center"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    ) : null}
                    {isLogin ? 'Sign In' : 'Create Account'}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center text-gray-600 text-sm">
          <p>
            {isLogin ? (
              <>
                Don't have an account?{' '}
                <button className="text-indigo-600 hover:text-indigo-800" onClick={() => setIsLogin(false)}>
                  Sign up
                </button>
              </>
            ) : (
              <>
                Already have an account?{' '}
                <button className="text-indigo-600 hover:text-indigo-800" onClick={() => setIsLogin(true)}>
                  Login
                </button>
              </>
            )}
          </p>
          <p className="mt-2">
            &copy; {new Date().getFullYear()} DocHive Healthcare Portal
          </p>
        </div>
      </div>
    </div>
  );
};

export default PAuthPage;