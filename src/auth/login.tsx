const Login = () => {
  return (
    <div className="login_body w-full h-screen flex items-center justify-center">
      <div className="bg-[#000000] rounded-xl shadow-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Welcome Back
        </h2>

        {/* Email */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-medium mb-1"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
          />
        </div>

        {/* Password */}
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-medium mb-1"
            htmlFor="password"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
          />
        </div>

        {/* Login Button */}
        <button className="w-full bg-[#6102FF] text-white py-2 rounded-lg font-medium hover:bg-green-700 transition">
          Login
        </button>

        {/* Optional: Forgot Password */}
        <p className="text-center text-sm text-gray-500 mt-4">
          Forgot your password?{" "}
          <span className="text-green-600 cursor-pointer">Reset</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
