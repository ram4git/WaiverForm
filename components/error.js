export default () => {
  return (
    <div className="transform -skew-y-6 sm:skew-y-0 sm:-rotate-2 container max-w-4xl mx-auto shadow-2xl rounded-xl mb-8 from-red-400 to-red-600 bg-gradient-to-r">
      <div className="container transform skew-y-6 sm:skew-y-0 sm:rotate-2 max-w-4xl mx-auto shadow-2xl my-8 py-8 rounded-xl items-center  justify-center flex bg-white flex-col">
        <h1 className="text-center font-extrabold py-2 text-2xl text-red-800">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-red-700 text-3xl">
            We can't find the page you are looking for
          </span>
        </h1>
        <img
          className="w-48 h-48 md:w-72 md:h-auto mx-auto bg-transparent"
          src="/404.svg"></img>
        <h4 className="text-blue-500 text-center mx-8">
          If you think this is a mistake, please contact TAP support by clicking
          help section in the footer.
        </h4>
      </div>
    </div>
  );
};
