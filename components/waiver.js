import {useState, useRef} from 'react';
import SignaturePad from 'react-signature-canvas';
import moment from 'moment';
import ReactHtmlParser from 'react-html-parser';
import {postWaiverForm} from '../data';
import {useMutation} from 'react-query';
import Spinner from '@components/spinner';
import Router from 'next/router';

export default function Waiver(props) {
  const [areTermsChecked, setAreTermsChecked] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [isSigned, setIsSigned] = useState(false);

  const signaturePad = useRef();

  const {
    FirstName,
    LastName,
    HtmlData,
    SchoolName,
    WaiverStatus,
    Email,
    WaiverType,
    Id,
    env,
    studentId,
    StudentId,
  } = props;

  const submitForm = useMutation(payload =>
    postWaiverForm({payload, env, studentId}),
  );

  const writeText = (info, style = {}) => {
    const {text, x, y} = info;
    const {
      fontSize = 14,
      fontFamily = 'monospace',
      color = 'blue',
      textAlign = 'left',
      textBaseline = 'top',
    } = style;

    const canvasEle = signaturePad.current;
    canvasEle.width = canvasEle.clientWidth;
    canvasEle.height = canvasEle.clientHeight;

    // get context of the canvas
    const ctx = canvasEle.getCanvas().getContext('2d');

    ctx.beginPath();
    ctx.font = fontSize + 'px ' + fontFamily;
    ctx.textAlign = textAlign;
    ctx.textBaseline = textBaseline;
    ctx.fillStyle = color;
    ctx.fillText(text, x, y);
    ctx.stroke();
    ctx.fillStyle = 'black';
  };

  const onSignatureBegin = () => {
    if (!isSigned) {
      setIsSigned(true);
      writeText({text: `signed at ${moment().toLocaleString()}`, x: 4, y: 2});
      writeText({text: Id, x: 4, y: 14});
    }
  };

  const disableFormSubmit = !(
    firstName &&
    lastName &&
    areTermsChecked &&
    isSigned
  );

  const waiverHeader = (
    <div className="mb-8">
      <h1 className="text-center text-gray-800 text-2xl font-bold pt-12">
        {SchoolName || 'Educational Funding Company'}
      </h1>
      <h1 className="text-center font-bold  text-xl text-gray-900 ">
        Student Waiver {FirstName && 'for '}{' '}
        <span className="text-blue-450 text-extrabold">{`${FirstName} ${LastName}`}</span>
      </h1>
    </div>
  );

  const waiverTemplate = (
    <div className="-mx-3 md:flex mb-6 mt-4 prose-md prose-blue flex flex-col py-8 relative">
      <div className="px-3 mb-6 md:mb-0 leading-relaxed">
        {ReactHtmlParser(HtmlData)}
      </div>
      <p className="text-xs text-blue-300 absolute right-0 bottom-0">{`intended for ${Email} only`}</p>
    </div>
  );

  const labelStyle =
    'block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2 text-blue-450';
  const inputStyle =
    'focus:ring-blue-450 focus:border-blue-450 border border-grey-lighter appearance-none block w-full bg-grey-lighter text-grey-darker rounded-lg  pt-3 px-4';

  const nameInputs = (
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 mb-6 md:mb-0 md:p-2">
        <label className={labelStyle} htmlFor="grid-first-name">
          First Name
        </label>
        <input
          className={inputStyle}
          id="grid-first-name"
          type="text"
          placeholder="your first name"
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
          required></input>
        {firstName ? (
          firstName.toLowerCase() === FirstName.toLowerCase() ? (
            <span className="text-xs text-green-500 pt-0">
              matches with records
            </span>
          ) : (
            <span className="text-xs text-red-500 pt-0">{`not matching with "${FirstName}" in records`}</span>
          )
        ) : (
          <span className="text-xs text-grey-300 pt-0">{`in the records: ${FirstName}`}</span>
        )}{' '}
      </div>
      <div className="w-full md:w-1/2 mb-6 md:mb-0 md:p-2">
        <label className={labelStyle} htmlFor="grid-last-name">
          Last Name
        </label>
        <input
          className={inputStyle}
          id="grid-first-name"
          type="text"
          placeholder="your last name"
          value={lastName}
          onChange={e => setLastName(e.target.value)}
          required></input>
        {lastName ? (
          lastName.toLowerCase() === LastName.toLowerCase() ? (
            <span className="text-xs text-green-500 pt-0">
              matches with records
            </span>
          ) : (
            <span className="text-xs text-red-500 pt-0">{`not matching with "${LastName}" in records`}</span>
          )
        ) : (
          <span className="text-xs text-grey-300 pt-0">{`in the records: ${LastName}`}</span>
        )}
      </div>
    </div>
  );

  const termsAndConditionsCheckBox = (
    <div className="mt-4 mb-0 flex flex-row">
      <input
        type="checkbox"
        className={` form-checkbox h-5 w-5 ${
          areTermsChecked
            ? 'text-green-500 focus:ring-green-500 focus:border-green-500'
            : 'text-red-500 focus:ring-red-500 focus:border-red-500'
        }`}
        checked={areTermsChecked}
        onChange={e => setAreTermsChecked(e.target.checked)}></input>

      <label
        className={`block tracking-wide text-grey-darker text-sm font-bold mb-2 pl-4 ${
          areTermsChecked ? 'text-green-500' : 'text-red-500'
        }`}
        htmlFor="grid-zip">
        I understand and agree to terms of Service Agreement
      </label>
    </div>
  );

  const signaturePadInput = (
    <div className="flex flex-col justify-center py-4 w-full h-60">
      <label className={labelStyle} htmlFor="grid-zip">
        Signature
      </label>
      <div className="relative rounded-lg shadow-lg flex overflow-hidden border border-grey-lighter h-60">
        <SignaturePad
          canvasProps={{className: 'w-full h-60'}}
          ref={signaturePad}
          onBegin={onSignatureBegin}
          clearOnResize={false}
        />
        <div className="absolute top-0 right-0">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="p-0 text-blue-500 text-lg cursor-pointer"
            onClick={e => {
              signaturePad.current.clear();
              setIsSigned(false);
            }}>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.49997 12.8995C2.71892 13.6805 2.71892 14.9468 3.49997 15.7279L7.35785 19.5858H4.08576C3.53347 19.5858 3.08576 20.0335 3.08576 20.5858C3.08576 21.1381 3.53347 21.5858 4.08576 21.5858H20.0858C20.638 21.5858 21.0858 21.1381 21.0858 20.5858C21.0858 20.0335 20.638 19.5858 20.0858 19.5858H10.9558L20.4705 10.071C21.2516 9.28999 21.2516 8.02366 20.4705 7.24261L16.2279 2.99997C15.4468 2.21892 14.1805 2.21892 13.3995 2.99997L3.49997 12.8995ZM7.82579 11.4021L4.91418 14.3137L9.15683 18.5563L12.0684 15.6447L7.82579 11.4021ZM9.24 9.98787L13.4826 14.2305L19.0563 8.65683L14.8137 4.41418L9.24 9.98787Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>
    </div>
  );

  const waiverForm = (
    <div className="-mx-3 md:flex mb-6 mt-4 flex flex-col px-3 py-8">
      {nameInputs}
      {termsAndConditionsCheckBox}
      {signaturePadInput}
    </div>
  );

  const onSubmitForm = () => {
    window.scrollTo(0, 0);
    submitForm.mutate({
      StudentId: studentId,
      WaiverType,
      Signature: signaturePad.current
        ? signaturePad.current.toDataURL().split(',')[1]
        : null,
      SignatureHeader: 'data:image/png;base64,',
    });
  };

  const renderError = ({error, detail}) => {
    return (
      <div className="max-w-4xl mx-auto flex-none shadow-lg">
        <div className="rounded-xl bg-red-400  pt-6 pb-40 -mb-40">
          <svg
            viewBox="0 0 20 20"
            className="w-10 h-10 md:w-16 md:h-auto mx-auto text-white fill-current">
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
          {error && (
            <h1 className="text-center text-white font-2xl font-semibold">
              {error}
            </h1>
          )}
          {detail && (
            <>
              <h2 className="text-center text-gray-200 font-normal">
                {detail}
              </h2>
              <p className="text-center text-gray-200 font-normal">
                <span className="text-gray-100">
                  Please try again later.{'  '}
                </span>
                <span
                  onClick={e => setShowHelpModal(true)}
                  className="cursor-pointer text-blue-600">
                  Contact support for help!
                </span>
              </p>
            </>
          )}
        </div>
      </div>
    );
  };

  const renderFormSubmissionStatus = () => {
    if (submitForm.isLoading) {
      return (
        <Spinner
          label="Submitting the waiver..."
          className=" text-2xl text-white"
        />
      );
    } else if (submitForm.isError) {
      const {message, stack} = submitForm.error;
      const defaultError = 'There was an error';
      const defaultDetail = 'Service is down';
      return renderError({
        error: message || defaultError,
        detail: stack || defaultDetail,
      });
    } else if (submitForm?.data?.ok && submitForm.isSuccess) {
      Router.push('/success');
    } else if (submitForm.isSuccess && !submitForm.data?.ok) {
      const {status, statusText} = submitForm.data;
      return renderError({error: status, detail: statusText});
    }
  };

  return (
    <>
      <div className="">{renderFormSubmissionStatus()}</div>

      <div
        className="max-w-4xl mx-auto flex-none -ml-full rounded-xl transform shadow-lg bg-gradient-to-br -rotate-1 lg:-rotate-1 px-0 lg:px-2 -mt-2 bg-blue-450"
        style={{background: '#1c88a3'}}>
        <div className="container max-w-4xl mx-auto shadow-md bg-white my-8 px-4 md:px-8 overflow-auto py-2 rounded-xl transform rotate-1 lg:rotate-1">
          <div className="divide-y-2 divide-blue-450 divide-opacity-50 divide-solid ">
            {waiverHeader}
            {waiverTemplate}
            {waiverForm}
          </div>

          <div className="flex justify-center pb-10">
            <button
              className="text-white font-bold py-2 rounded-lg px-16 text-lg hover:opacity-80 disabled:cursor-not-allowed"
              style={{
                background: disableFormSubmit ? 'lightgrey' : '#1c88a3',
              }}
              onClick={onSubmitForm}
              disabled={disableFormSubmit}>
              Submit Waiver
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
