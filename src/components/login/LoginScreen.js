const LoginScreen = ({ history }) => {
  // function for redirect user to home
  const handleRedirect = () => {
    history.replace('/');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800">
      <div className="p-6 text-center font-mono bg-white rounded-lg">
        <h1 className="text-4xl font-bold">Login</h1>
        <button
          onClick={handleRedirect}
          className="mt-5 px-4 py-2 text-blue-300 font-semibold bg-gray-800 rounded-lg uppercase"
        >
          Authenticate
        </button>
      </div>
    </div>
  );
};

export default LoginScreen;
