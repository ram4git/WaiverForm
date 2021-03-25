export default function Confirmation() {
  return (
    <div className="transform -skew-y-6 sm:skew-y-0 sm:-rotate-2 container max-w-4xl mx-auto shadow-2xl rounded-xl mb-8 from-green-400 to-green-600 bg-gradient-to-r">
      <div className="container transform skew-y-6 sm:skew-y-0 sm:rotate-2 max-w-4xl mx-auto shadow-2xl my-8 py-8 rounded-xl items-center  justify-center flex bg-white flex-col">
        <h1 className="text-center font-extrabold py-2 text-2xl text-green-800">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
            You've signed the waiver already!
          </span>
        </h1>
        <img
          className="w-48 h-48 md:w-72 md:h-auto mx-auto bg-transparent"
          src="/confirmation.svg"></img>
        <h1 className="text-blue-500 text-center font-bold pt-8 mx-8">
          We have your waiver signed and registered already in our system.
        </h1>
        <h4 className="text-blue-500 text-center mx-8">
          Please contact TAP support you don't remember submitting or wish to
          change the details.
        </h4>
      </div>
    </div>
  );
}
