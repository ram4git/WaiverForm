import FreshdeskWidget from '@personare/react-freshdesk-widget';

export default function HelpWidget({}) {
  return (
    <div className="modal opacity-1 fixed w-full h-full top-0 left-0 flex items-center justify-center z-50 px-0 lg:px-16">
      <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-75"></div>

      <div className="modal-container bg-white max-w-6xl mx-auto rounded shadow-lg z-50 overflow-y-auto  w-full lg:w-8/12">
        <div className="modal-content py-4 text-left px-6 w-full">
          <div className="flex justify-between items-center pb-3 w-full relative">
            <div
              className="modal-close cursor-pointer z-50 absolute top-2 right-2"
              onClick={() => {}}>
              <svg
                className="fill-current text-black"
                width="18"
                height="18"
                viewBox="0 0 18 18">
                <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
              </svg>
            </div>
            <div className="w-full">
              <iframe
                className="w-full"
                url="https://kinapptech.freshdesk.com"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
