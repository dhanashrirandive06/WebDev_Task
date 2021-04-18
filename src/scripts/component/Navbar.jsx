import React from "react";
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

export default function Navbar() {
  return (
    <div>
      <Disclosure as="nav">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                <div className="flex items-center">
                  <div className="hidden md:block">
                    <div className="ml-10 flex items-baseline space-x-4">
                      <a
                        href="#"
                        className="text-blue-800 px-3 py-2 text-3xl font-medium"
                      >
                        LOGO
                      </a>
                    </div>
                  </div>
                </div>
                <div className="hidden md:block">
                  <div className="flex  justify-evenly space-x-5 ">
                    <a href="#">Features</a>
                    <a href="#">Pricing</a>
                    <a href="#">Contacts</a>
                  </div>
                </div>
                <div className="hidden md:block">
                  <div className="ml-4 flex items-center md:ml-6">
                    <button className="bg-blue-800 py-2 px-3 text-white">
                      Start Now
                    </button>
                  </div>
                </div>

                <div className="mr-2 flex md:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="bg-gray-400 inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <div className="flex  justify-evenly space-x-5 ">
                  <a href="#">Features</a>
                  <a href="#">Pricing</a>
                  <a href="#">Contacts</a>
                </div>
              </div>{" "}
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8"></div>
      </main>
    </div>
  );
}
