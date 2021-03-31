export default function IndexPage() {
  return (
    <div className="transform skew-y-6 sm:skew-y-0 sm:rotate-2 container bg-red-600 max-w-4xl mx-auto shadow-2xl rounded-xl mb-8 from-red-400 to-red-600 bg-gradient-to-r">
      <div className="container transform -skew-y-6 sm:skew-y-0 sm:-rotate-2 max-w-4xl mx-auto shadow-lg my-8 py-8 rounded-xl items-center  justify-center flex bg-white flex-col from-white to-yellow-100 bg-gradient-to-br">
        <h1 className="text-bold text-center font-bold pt-8 text-3xl">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 text-3xl">
            Welcome to TAP Waiver Portal
          </span>
        </h1>
        <img
          className="w-48 h-48 md:w-72 md:h-auto mx-auto bg-transparent"
          src="/welcome.svg"></img>
        <h1 className="text-blue-500 text-center font-bold py-1 px-8">
          Usually you are directed to a specific waiver page.
        </h1>
        <h1 className="text-blue-500 text-center font-bold py-1 px-8">
          If you reached here by mistake, contact TAP support or file a support
          ticket using help section in the footer.
        </h1>
      </div>
    </div>
  );
}
