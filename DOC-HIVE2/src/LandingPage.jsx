// import React, { useState } from "react";
// import DAuthPage from "./doctor/components/authentication/DAuthPage";
// import PAuthPage from "./patient/components/authentication/PAuthPage";
// import PatientPage from "./patient/components/authentication/PatientPage"
// import DoctorPage from "./doctor/components/authentication/DoctorPage";
// import { Activity, Calendar, Users, Shield, Heart, MessageSquare } from "lucide-react";

// const LandingPage = () => {
//   const [userType, setUserType] = useState(null);
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   const handleUserTypeSelection = (type) => {
//     setUserType(type);
//   };

//   const handleAuthentication = () => {
//     setIsAuthenticated(true);
//   };

//   if (userType === null) {
//     return (
//       <div className="min-h-screen bg-[radial-gradient(circle,_#a1c4fd_0%,_#c2e9fb_100%)] p-8">
//         <nav className="flex items-center justify-between mb-20">
//         <div className="flex items-center space-x-2">
//         <Activity className="h-8 w-8 text-blue-400" />
//         <span className="text-xl font-bold text-blue-900">DOC HIVE</span>
//       </div>
//           <div className="flex space-x-6">
//             <a
//               href="#"
//               className="text-gray-600 hover:text-gray-800 transition-transform transform hover:scale-105"
//             >
//               About
//             </a>
//             <a
//               href="#"
//               className="text-gray-600 hover:text-gray-800 transition-transform transform hover:scale-105"
//             >
//               Features
//             </a>
//             <a
//               href="#"
//               className="text-gray-600 hover:text-gray-800 transition-transform transform hover:scale-105"
//             >
//               Blog
//             </a>
//           </div>
//         </nav>

//         <div className="max-w-4xl mx-auto text-center rounded-lg p-8 backdrop-blur-md bg-white bg-opacity-30 shadow-xl">
//           <h1 className="text-5xl font-bold text-gray-800 mb-6">
//             Connect. Heal. Thrive
//           </h1>
//           <p className="text-lg text-gray-600 mb-12">
//             Your health journey starts here. With Doc Hive, connect with
//             healthcare professionals and manage your medical care seamlessly.
//           </p>

//           <div className="flex flex-col space-y-4 max-w-md mx-auto">
//             <button
//               onClick={() => handleUserTypeSelection("patient")}
//               className="w-full py-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-transform transform hover:scale-105 ease-in-out duration-300"
//             >
//               I'm a Patient
//             </button>
//             <button
//               onClick={() => handleUserTypeSelection("doctor")}
//               className="w-full py-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-transform transform hover:scale-105 ease-in-out duration-300"
//             >
//               I'm a Doctor
//             </button>
//           </div>
//         </div>

//         <div className="grid grid-cols-3 gap-8 mt-20">
//           <div className="p-6 rounded-xl backdrop-blur-md bg-white bg-opacity-20 shadow-xl transition-transform transform hover:scale-105 ease-in-out duration-300">
//             <div className="text-2xl font-bold text-gray-800 mb-2">24/7</div>
//             <div className="text-gray-600">
//               Access to healthcare professionals around the clock
//             </div>
//           </div>
//           <div className="p-6 rounded-xl backdrop-blur-md bg-white bg-opacity-20 shadow-xl transition-transform transform hover:scale-105 ease-in-out duration-300">
//             <div className="text-2xl font-bold text-gray-800 mb-2">Secure</div>
//             <div className="text-gray-600">
//               End-to-end encrypted communications and data storage
//             </div>
//           </div>
//           <div className="p-6 rounded-xl backdrop-blur-md bg-white bg-opacity-20 shadow-xl transition-transform transform hover:scale-105 ease-in-out duration-300">
//             <div className="text-2xl font-bold text-gray-800 mb-2">Easy</div>
//             <div className="text-gray-600">
//               Simple and intuitive interface for both patients and doctors
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   if (!isAuthenticated) {
//     return (
//       <div className="min-h-screen bg-[radial-gradient(circle,_#a1c4fd_0%,_#c2e9fb_100%)] p-8">
//         {userType === "patient" ? (
//           <PAuthPage onAuth={handleAuthentication} />
//         ) : (
//           <DAuthPage onAuth={handleAuthentication} />
//         )}
//       </div>
//     );
//   }

//   return userType === "patient" ? <PatientPage /> : <DoctorPage />;
// };

// export default LandingPage;





import React, { useState } from "react";
import DAuthPage from "./doctor/components/authentication/DAuthPage";
import PAuthPage from "./patient/components/authentication/PAuthPage";
import PatientPage from "./patient/components/authentication/PatientPage";
import DoctorPage from "./doctor/components/authentication/DoctorPage";
import { Activity, Calendar, Users, Shield, Heart, MessageSquare } from "lucide-react";

const LandingPage = () => {
  const [userType, setUserType] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleUserTypeSelection = (type) => {
    setUserType(type);
  };

  const handleAuthentication = () => {
    setIsAuthenticated(true);
  };

  if (userType === null) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 overflow-hidden">
        {/* Navigation */}
        <nav className="container mx-auto px-6 py-6 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Activity className="h-10 w-10 text-blue-600 animate-pulse" />
            <span className="text-2xl font-extrabold text-blue-900 tracking-tight">
              DocHive
            </span>
          </div>
          <div className="flex space-x-8">
            {["About", "Features", "Blog"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-gray-600 hover:text-blue-600 font-medium transition-all duration-300 ease-in-out hover:scale-105"
              >
                {item}
              </a>
            ))}
          </div>
        </nav>

        {/* Hero Section */}
        <section className="container mx-auto px-6 py-20 text-center relative">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/white-diamond.png')] opacity-10"></div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in-up">
            Connect. <span className="text-blue-600">Heal.</span> Thrive.
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
            Empowering your health journey with seamless access to top healthcare professionals.
          </p>

          <div className="flex flex-col md:flex-row gap-6 max-w-md mx-auto animate-fade-in-up animation-delay-400">
            <button
              onClick={() => handleUserTypeSelection("patient")}
              className="flex-1 py-4 px-6 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              I'm a Patient
            </button>
            <button
              onClick={() => handleUserTypeSelection("doctor")}
              className="flex-1 py-4 px-6 bg-teal-600 text-white rounded-xl font-semibold hover:bg-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              I'm a Doctor
            </button>
          </div>
        </section>

        {/* Features Section */}
        <section className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Heart className="h-8 w-8 text-blue-500" />,
                title: "24/7 Access",
                desc: "Connect with healthcare professionals anytime, anywhere.",
              },
              {
                icon: <Shield className="h-8 w-8 text-teal-500" />,
                title: "Secure Platform",
                desc: "Your data is protected with end-to-end encryption.",
              },
              {
                icon: <Users className="h-8 w-8 text-indigo-500" />,
                title: "User-Friendly",
                desc: "Intuitive design for patients and doctors alike.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="container mx-auto px-6 py-12 text-center text-gray-500">
          <p>&copy; 2025 DocHive. All rights reserved.</p>
        </footer>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
        {userType === "patient" ? (
          <PAuthPage onAuth={handleAuthentication} />
        ) : (
          <DAuthPage onAuth={handleAuthentication} />
        )}
      </div>
    );
  }

  return userType === "patient" ? <PatientPage /> : <DoctorPage />;
};

export default LandingPage;