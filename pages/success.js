export default ({}) => {
  return (
    <div className="transform -skew-y-6 sm:skew-y-0 sm:-rotate-2 container max-w-4xl mx-auto shadow-lg  rounded-xl items-center  justify-center flex flex-col min-h-60 my-6 bg-gradient-to-r from-green-400 to-green-600">
      <div className="text-green-700 bg-white w-full h-full rounded-xl py-8 transform skew-y-6 sm:skew-y-0 sm:rotate-2 shadow-2xl ">
        <svg
          className=" h-40 w-40  mx-auto stroke-1"
          viewBox="0 0 24 24"
          fill="currentColor">
          <path
            d="M10.2426 16.3137L6 12.071L7.41421 10.6568L10.2426 13.4853L15.8995 7.8284L17.3137 9.24262L10.2426 16.3137Z"
            fill="currentColor"
            className="animate-pulse"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z"
            fill="currentColor"
          />
        </svg>
        <p className="text-green-700 text-lg mx-4 text-center my-2">
          Signed waiver document is saved successfully!
        </p>
      </div>
    </div>
  );
};
