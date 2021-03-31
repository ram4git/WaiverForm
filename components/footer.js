import {useRouter} from 'next/router';

export default function Footer() {
  const router = useRouter();
  const {env} = router.query;

  return (
    <footer className="text-white flex-row flex justify-center max-w-4xl mx-auto font-bold py-2">
      <p className="px-4">{`©${new Date().getFullYear()}`}</p>
      {env && env !== 'prod' ? <p className="px-4 uppercase">{env}</p> : null}
      <a
        className="px-4 text-white"
        href="https://efcmartialartsbilling.com/"
        target="_blank">
        <svg
          className="w-4 h-4 inline-block m-1 justify-center items-center"
          viewBox="0 0 20 20"
          fill="currentColor">
          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
        </svg>
        EFC Inc
      </a>
      <a className="px-4 text-white" href="/help">
        <svg
          className="w-4 h-4 inline-block m-1 justify-center items-center"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
        Help
      </a>
    </footer>
  );
}
