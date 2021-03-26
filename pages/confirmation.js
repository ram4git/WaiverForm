export default function Confirmation() {
  return (
    <div className="relative transform -skew-y-6 sm:skew-y-0 sm:-rotate-2 container max-w-4xl mx-auto shadow-2xl rounded-xl mb-8 from-green-400 to-green-600 bg-gradient-to-r">
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
        <div className="w-12 h-12 absolute top-0 right-0 p-2 text-blue-600">
          <a
            title="download signed waiver"
            href={
              'https://tapdevblobstorage.blob.core.windows.net/tap-waiver-container/cee0b5b8-c245-49b0-b8cb-946af2d9cb87.pdf'
            }
            download="waiver.pdf">
            <svg viewBox="0 0 24 24" fill="none">
              <path
                d="M11 5C11 4.44772 11.4477 4 12 4C12.5523 4 13 4.44772 13 5V12.1578L16.2428 8.91501L17.657 10.3292L12.0001 15.9861L6.34326 10.3292L7.75748 8.91501L11 12.1575V5Z"
                fill="currentColor"
              />
              <path
                d="M4 14H6V18H18V14H20V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V14Z"
                fill="currentColor"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
