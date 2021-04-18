import React, { Fragment } from "react";
import "../../assets/css/style.css";
export default function Content() {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <div className="text-center flex flex-col items-center lg:mx-80  my-20">
      <h1 className="text-4xl text-gray-700 font-semibold">Demo Website</h1>
      <p className="py-8 text-gray-400 ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
        commodi. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Dolorum, sapiente.
      </p>

      <div className="flex mt-3">
        <button
          className="bg-blue-800 py-1 px-3 text-white mx-4"
          onClick={() => setShowModal(true)}
        >
          Know More
        </button>
        <button className="border border-8 text-blue-800 border-blue-700 px-3 py-1">
          Learn More
        </button>

        {/* Modal */}
        {showModal ? (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative lg:w-1/3 my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  <input
                    type="text"
                    class="form-input mx-10 mt-20 mb-3 bg-gray-100 px-4 py-3 rounded-xl"
                  ></input>
                  <input
                    type="text"
                    class="form-input mx-10 my-3 bg-gray-100 px-4 py-3 rounded-xl"
                  ></input>
                  <input
                    type="text"
                    class="form-input mx-10 my-3 bg-gray-100 px-4 py-3 rounded-xl"
                  ></input>

                  <button
                    className="text-white bg-blue-800 font-semibold rounded-xl my-5 mx-8 px-6 py-2 outline-none "
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
            <div className="opacity-50 fixed inset-0 z-40 bg-gray-900"></div>
          </>
        ) : null}
      </div>
    </div>
  );
}
