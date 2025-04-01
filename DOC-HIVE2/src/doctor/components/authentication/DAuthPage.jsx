// import React, { useState } from 'react';
// import { Activity } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';

// const DAuthPage = () => {
//   const [isLogin, setIsLogin] = useState(true);
//   const [error, setError] = useState('');
//   const [formData, setFormData] = useState({
//     doctorID: '',
//     password: '',
//     name: '',
//     department: '',
//     qualification: '',
//     dob: '',
//     age: '',
//     bloodGroup: '',
//     latitude: '',
//     longitude: '',
//     appointmentCost: '',
//     contactNumber: ''
//   });
//     const navigate = useNavigate();
  

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setError('');
//     console.log('Form submitted:', formData);

//     if (isLogin) {
//       // Login: send only doctorID and password
//       fetch('http://localhost:4000/login', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           doctorID: formData.doctorID,
//           password: formData.password
//         })
//       })
//         .then((res) => {
//           if (!res.ok) {
//             return res.json().then((data) => {
//               throw new Error(data.message || 'Invalid credentials');
//             });
//           }
//           return res.json();
//         })
//         .then((data) => {
//           console.log('Login response:', data);
//           navigate("/dashboard");
//           // Handle login success (clear error, redirect, etc.)
//         })
//         .catch((error) => {
//           setError(error.message);
//           console.error('Error during login:', error);
//         });
//     } else {
//       // Sign up: send full form data
//       fetch('http://localhost:4000/signup', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData)
//       })
//         .then((res) => {
//           if (!res.ok) {
//             return res.json().then((data) => {
//               throw new Error(data.message || 'Signup failed');
//             });
//           }
//           return res.json();
//         })
//         .then((data) => {
//           console.log('Signup response:', data);
//           navigate("/dashboard");
//           // Handle signup success (clear error, redirect, etc.)
//         })
//         .catch((error) => {
//           setError(error.message);
//           console.error('Error during signup:', error);
//         });
//     }
//   };

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-blue-200 via-blue-300 to-blue-200 flex flex-col items-center justify-center px-4">
//       <div className="w-full max-w-md">
//         <div className="flex items-center justify-center mb-8">
//           <Activity className="h-8 w-8 text-blue-700 mr-2" />
//           <span className="text-xl font-bold text-blue-900">DocHive</span>
//         </div>
        
//         <div className="bg-blue-100 rounded-lg shadow-xl p-8">
//           <div className="flex mb-8">
//             <button
//               type="button"
//               className={`flex-1 py-2 text-center ${isLogin ? 'text-blue-700 border-b-2 border-blue-700' : 'text-blue-500'}`}
//               onClick={() => { setIsLogin(true); setError(''); }}
//             >
//               Login
//             </button>
//             <button
//               type="button"
//               className={`flex-1 py-2 text-center ${!isLogin ? 'text-blue-700 border-b-2 border-blue-700' : 'text-blue-500'}`}
//               onClick={() => { setIsLogin(false); setError(''); }}
//             >
//               Sign Up
//             </button>
//           </div>

//           <form onSubmit={handleSubmit} className="space-y-6">
//             {isLogin ? (
//               <>
//                 <div>
//                   <label className="block text-blue-900 mb-2">Doctor ID</label>
//                   <input
//                     type="text"
//                     name="doctorID"
//                     className="w-full px-4 py-2 rounded-lg bg-blue-50 text-blue-900 border border-blue-400 focus:border-blue-700 focus:outline-none"
//                     placeholder="Enter your Doctor ID"
//                     value={formData.doctorID}
//                     onChange={handleChange}
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-blue-900 mb-2">Password</label>
//                   <input
//                     type="password"
//                     name="password"
//                     className="w-full px-4 py-2 rounded-lg bg-blue-50 text-blue-900 border border-blue-400 focus:border-blue-700 focus:outline-none"
//                     placeholder="Enter your password"
//                     value={formData.password}
//                     onChange={handleChange}
//                   />
//                 </div>
//                 {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
//               </>
//             ) : (
//               <>
//                 <div>
//                   <label className="block text-blue-900 mb-2">Doctor ID</label>
//                   <input
//                     type="text"
//                     name="doctorID"
//                     className="w-full px-4 py-2 rounded-lg bg-blue-50 text-blue-900 border border-blue-400 focus:border-blue-700 focus:outline-none"
//                     placeholder="Enter your Doctor ID"
//                     value={formData.doctorID}
//                     onChange={handleChange}
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-blue-900 mb-2">Full Name</label>
//                   <input
//                     type="text"
//                     name="name"
//                     className="w-full px-4 py-2 rounded-lg bg-blue-50 text-blue-900 border border-blue-400 focus:border-blue-700 focus:outline-none"
//                     placeholder="Enter your full name"
//                     value={formData.name}
//                     onChange={handleChange}
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-blue-900 mb-2">Password</label>
//                   <input
//                     type="password"
//                     name="password"
//                     className="w-full px-4 py-2 rounded-lg bg-blue-50 text-blue-900 border border-blue-400 focus:border-blue-700 focus:outline-none"
//                     placeholder="Enter your password"
//                     value={formData.password}
//                     onChange={handleChange}
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-blue-900 mb-2">Department</label>
//                   <input
//                     type="text"
//                     name="department"
//                     className="w-full px-4 py-2 rounded-lg bg-blue-50 text-blue-900 border border-blue-400 focus:border-blue-700 focus:outline-none"
//                     placeholder="Enter your department"
//                     value={formData.department}
//                     onChange={handleChange}
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-blue-900 mb-2">Qualification</label>
//                   <input
//                     type="text"
//                     name="qualification"
//                     className="w-full px-4 py-2 rounded-lg bg-blue-50 text-blue-900 border border-blue-400 focus:border-blue-700 focus:outline-none"
//                     placeholder="Enter your qualification"
//                     value={formData.qualification}
//                     onChange={handleChange}
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-blue-900 mb-2">Date of Birth</label>
//                   <input
//                     type="date"
//                     name="dob"
//                     className="w-full px-4 py-2 rounded-lg bg-blue-50 text-blue-900 border border-blue-400 focus:border-blue-700 focus:outline-none"
//                     value={formData.dob}
//                     onChange={handleChange}
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-blue-900 mb-2">Age</label>
//                   <input
//                     type="number"
//                     name="age"
//                     className="w-full px-4 py-2 rounded-lg bg-blue-50 text-blue-900 border border-blue-400 focus:border-blue-700 focus:outline-none"
//                     placeholder="Enter your age"
//                     value={formData.age}
//                     onChange={handleChange}
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-blue-900 mb-2">Blood Group</label>
//                   <input
//                     type="text"
//                     name="bloodGroup"
//                     className="w-full px-4 py-2 rounded-lg bg-blue-50 text-blue-900 border border-blue-400 focus:border-blue-700 focus:outline-none"
//                     placeholder="Enter your blood group"
//                     value={formData.bloodGroup}
//                     onChange={handleChange}
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-blue-900 mb-2">Latitude</label>
//                   <input
//                     type="text"
//                     name="latitude"
//                     className="w-full px-4 py-2 rounded-lg bg-blue-50 text-blue-900 border border-blue-400 focus:border-blue-700 focus:outline-none"
//                     placeholder="Enter latitude"
//                     value={formData.latitude}
//                     onChange={handleChange}
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-blue-900 mb-2">Longitude</label>
//                   <input
//                     type="text"
//                     name="longitude"
//                     className="w-full px-4 py-2 rounded-lg bg-blue-50 text-blue-900 border border-blue-400 focus:border-blue-700 focus:outline-none"
//                     placeholder="Enter longitude"
//                     value={formData.longitude}
//                     onChange={handleChange}
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-blue-900 mb-2">Appointment Cost</label>
//                   <input
//                     type="text"
//                     name="appointmentCost"
//                     className="w-full px-4 py-2 rounded-lg bg-blue-50 text-blue-900 border border-blue-400 focus:border-blue-700 focus:outline-none"
//                     placeholder="Enter appointment cost"
//                     value={formData.appointmentCost}
//                     onChange={handleChange}
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-blue-900 mb-2">Contact Number</label>
//                   <input
//                     type="text"
//                     name="contactNumber"
//                     className="w-full px-4 py-2 rounded-lg bg-blue-50 text-blue-900 border border-blue-400 focus:border-blue-700 focus:outline-none"
//                     placeholder="Enter contact number"
//                     value={formData.contactNumber}
//                     onChange={handleChange}
//                   />
//                 </div>
//                 {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
//               </>
//             )}

//             <button
//               type="submit"
//               className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
//             >
//               {isLogin ? 'Login' : 'Sign Up'}
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DAuthPage;

// patient authentication page

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


































import React, { useState, useEffect } from 'react';
import { Activity, User, Lock, Stethoscope, Award, Calendar, Droplet, MapPin, DollarSign, Phone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const DAuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    doctorID: '',
    password: '',
    name: '',
    department: '',
    qualification: '',
    dob: '',
    age: '',
    bloodGroup: '',
    latitude: '',
    longitude: '',
    appointmentCost: '',
    contactNumber: ''
  });
  const navigate = useNavigate();

  // Auto-calculate age based on DOB
  useEffect(() => {
    if (formData.dob) {
      const birthDate = new Date(formData.dob);
      const today = new Date();
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      setFormData(prev => ({ ...prev, age: age.toString() }));
    }
  }, [formData.dob]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    
    console.log('Form submitted:', formData);

    if (isLogin) {
      // Login: send only doctorID and password
      fetch('http://localhost:4000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          doctorID: formData.doctorID,
          password: formData.password
        })
      })
        .then((res) => {
          if (!res.ok) {
            return res.json().then((data) => {
              throw new Error(data.message || 'Invalid credentials');
            });
          }
          return res.json();
        })
        .then((data) => {
          console.log('Login response:', data);
          navigate("/dashboard");
        })
        .catch((error) => {
          setError(error.message);
          console.error('Error during login:', error);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      // Sign up: send full form data
      fetch('http://localhost:4000/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
        .then((res) => {
          if (!res.ok) {
            return res.json().then((data) => {
              throw new Error(data.message || 'Signup failed');
            });
          }
          return res.json();
        })
        .then((data) => {
          console.log('Signup response:', data);
          navigate("/dashboard");
        })
        .catch((error) => {
          setError(error.message);
          console.error('Error during signup:', error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Get current location
  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setFormData({
          ...formData,
          latitude: position.coords.latitude.toString(),
          longitude: position.coords.longitude.toString()
        });
      }, (error) => {
        console.error("Error getting location:", error);
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 via-blue-50 to-blue-100 flex flex-col items-center justify-center px-4 py-12">
      <div className="w-full max-w-lg">
        <div className="flex items-center justify-center mb-8">
          <div className="bg-white p-4 rounded-full shadow-md">
            <Activity className="h-10 w-10 text-blue-600" />
          </div>
          <div className="ml-4">
            <h1 className="text-3xl font-bold text-blue-900">DocHive</h1>
            <p className="text-blue-600">Healthcare Professional Portal</p>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-xl overflow-hidden">
          <div className="flex text-lg font-medium">
            <button
              type="button"
              className={`flex-1 py-4 transition-colors duration-300 ${isLogin 
                ? 'bg-blue-600 text-white' 
                : 'bg-blue-100 text-blue-800 hover:bg-blue-200'}`}
              onClick={() => { setIsLogin(true); setError(''); }}
            >
              Doctor Login
            </button>
            <button
              type="button"
              className={`flex-1 py-4 transition-colors duration-300 ${!isLogin 
                ? 'bg-blue-600 text-white' 
                : 'bg-blue-100 text-blue-800 hover:bg-blue-200'}`}
              onClick={() => { setIsLogin(false); setError(''); }}
            >
              Doctor Registration
            </button>
          </div>

          <div className="p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              {isLogin ? 'Welcome Back, Doctor' : 'Join Our Medical Network'}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              {isLogin ? (
                <>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-blue-500" />
                    </div>
                    <input
                      type="text"
                      name="doctorID"
                      className="w-full pl-10 px-4 py-3 rounded-lg bg-blue-50 text-gray-800 border border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all"
                      placeholder="Doctor ID"
                      value={formData.doctorID}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-blue-500" />
                    </div>
                    <input
                      type="password"
                      name="password"
                      className="w-full pl-10 px-4 py-3 rounded-lg bg-blue-50 text-gray-800 border border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all"
                      placeholder="Password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input 
                        id="remember-me" 
                        name="remember-me" 
                        type="checkbox" 
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                        Remember me
                      </label>
                    </div>
                    <div className="text-sm">
                      <a href="#" className="text-blue-600 hover:text-blue-500">
                        Forgot password?
                      </a>
                    </div>
                  </div>
                </>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="relative md:col-span-2">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-blue-500" />
                    </div>
                    <input
                      type="text"
                      name="doctorID"
                      className="w-full pl-10 px-4 py-3 rounded-lg bg-blue-50 text-gray-800 border border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all"
                      placeholder="Doctor ID"
                      value={formData.doctorID}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="relative md:col-span-2">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-blue-500" />
                    </div>
                    <input
                      type="text"
                      name="name"
                      className="w-full pl-10 px-4 py-3 rounded-lg bg-blue-50 text-gray-800 border border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all"
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="relative md:col-span-2">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-blue-500" />
                    </div>
                    <input
                      type="password"
                      name="password"
                      className="w-full pl-10 px-4 py-3 rounded-lg bg-blue-50 text-gray-800 border border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all"
                      placeholder="Password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Stethoscope className="h-5 w-5 text-blue-500" />
                    </div>
                    <input
                      type="text"
                      name="department"
                      className="w-full pl-10 px-4 py-3 rounded-lg bg-blue-50 text-gray-800 border border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all"
                      placeholder="Department"
                      value={formData.department}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Award className="h-5 w-5 text-blue-500" />
                    </div>
                    <input
                      type="text"
                      name="qualification"
                      className="w-full pl-10 px-4 py-3 rounded-lg bg-blue-50 text-gray-800 border border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all"
                      placeholder="Qualification"
                      value={formData.qualification}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Calendar className="h-5 w-5 text-blue-500" />
                    </div>
                    <input
                      type="date"
                      name="dob"
                      className="w-full pl-10 px-4 py-3 rounded-lg bg-blue-50 text-gray-800 border border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all"
                      value={formData.dob}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Droplet className="h-5 w-5 text-blue-500" />
                    </div>
                    <select
                      name="bloodGroup"
                      className="w-full pl-10 px-4 py-3 rounded-lg bg-blue-50 text-gray-800 border border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all"
                      value={formData.bloodGroup}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select Blood Group</option>
                      <option value="A+">A+</option>
                      <option value="A-">A-</option>
                      <option value="B+">B+</option>
                      <option value="B-">B-</option>
                      <option value="AB+">AB+</option>
                      <option value="AB-">AB-</option>
                      <option value="O+">O+</option>
                      <option value="O-">O-</option>
                    </select>
                  </div>
                  
                  <div className="relative md:col-span-2">
                    <div className="flex items-center space-x-2">
                      <div className="flex-1 relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <MapPin className="h-5 w-5 text-blue-500" />
                        </div>
                        <input
                          type="text"
                          name="latitude"
                          className="w-full pl-10 px-4 py-3 rounded-lg bg-blue-50 text-gray-800 border border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all"
                          placeholder="Latitude"
                          value={formData.latitude}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="flex-1 relative">
                        <input
                          type="text"
                          name="longitude"
                          className="w-full px-4 py-3 rounded-lg bg-blue-50 text-gray-800 border border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all"
                          placeholder="Longitude"
                          value={formData.longitude}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <button 
                        type="button" 
                        className="bg-blue-100 p-3 rounded-lg text-blue-600 hover:bg-blue-200 transition-colors"
                        onClick={getCurrentLocation}
                      >
                        <MapPin className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <DollarSign className="h-5 w-5 text-blue-500" />
                    </div>
                    <input
                      type="text"
                      name="appointmentCost"
                      className="w-full pl-10 px-4 py-3 rounded-lg bg-blue-50 text-gray-800 border border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all"
                      placeholder="Appointment Cost"
                      value={formData.appointmentCost}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Phone className="h-5 w-5 text-blue-500" />
                    </div>
                    <input
                      type="text"
                      name="contactNumber"
                      className="w-full pl-10 px-4 py-3 rounded-lg bg-blue-50 text-gray-800 border border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all"
                      placeholder="Contact Number"
                      value={formData.contactNumber}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              )}

              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                  <p className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    {error}
                  </p>
                </div>
              )}

              <button
                type="submit"
                className={`w-full flex items-center justify-center px-4 py-3 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                disabled={loading}
              >
                {loading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </>
                ) : (
                  isLogin ? 'Sign In' : 'Create Account'
                )}
              </button>
            </form>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">
                    {isLogin ? 'New to DocHive?' : 'Already have an account?'}
                  </span>
                </div>
              </div>

              <div className="mt-6">
                <button
                  type="button"
                  className="w-full flex items-center justify-center px-4 py-3 border border-blue-300 rounded-lg shadow-sm text-base font-medium text-blue-700 bg-white hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                  onClick={() => { setIsLogin(!isLogin); setError(''); }}
                >
                  {isLogin ? 'Create a new account' : 'Sign in to your account'}
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <p className="mt-6 text-center text-gray-500 text-sm">
          &copy; 2025 DocHive. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default DAuthPage;