import Link from 'next/link';
import {useState} from 'react';
import cn from 'classnames';

export default function Header() {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

  return (
    <header>
      <div className="flex items-center">
        <div className="h-16 max-w-md container md:max-w-xl mx-auto shadow-lg md:my-8 my-0 md:h-32 rounded-none md:rounded-xl items-center  justify-center flex bg-white overflow-hidden">
          <img
            className="h-20 w-20 md:w-48 md:h-auto mx-auto bg-white bg-cover object-contain md:object-scale-down"
            src="/Logo.png"></img>
        </div>
      </div>
    </header>
  );
}
