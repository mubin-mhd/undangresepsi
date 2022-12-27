import React from "react";
import "../../component/Fitur/_fitur.scss";

const Regist = () => {
  return (
    <section id="fitur">
      <div className="mt-28 p-6">
        <form>
          <h3 className="font-vidaloka text-4xl font-semibold mb-2 text-oldRed">
            Form Data Undangan
          </h3>
          <div className="flex justify-between items-start gap-4">
            <div className="w-1/2">
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white font-vidaloka"
                >
                  Nama Lengkap Mempelai Pria
                </label>
                <input
                  type="text"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="fullNamePria"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white font-vidaloka"
                >
                  Nama Panggilan Mempelai Pria
                </label>
                <input
                  type="text"
                  id="fullnamePria"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="fullNamePria"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white font-vidaloka"
                >
                  Nama Lengkap Mempelai Wanita
                </label>
                <input
                  type="text"
                  id="fullnamePria"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="fullNamePria"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white font-vidaloka"
                >
                  Nama Panggilan Mempelai Wanita
                </label>
                <input
                  type="text"
                  id="fullnamePria"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="fullNamePria"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white font-vidaloka"
                >
                  Nama Orang Tua Mempelai Pria (Bpk & Ibu)
                </label>
                <input
                  type="text"
                  id="fullnamePria"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
            </div>
            {/*FORM COMPONENT LEFT */}
            <div className="w-1/2">
              <div className="mb-6">
                <label
                  htmlFor="fullNamePria"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white font-vidaloka"
                >
                  Nama Orang Tua Mempelai Wanita (Bpk & Ibu)
                </label>
                <input
                  type="text"
                  id="fullnamePria"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white font-vidaloka"
                >
                  Waktu Pelaksanaan Akad Nikah (dd/mm/yy) ( Jam )
                </label>
                <input
                  type="text"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="fullNamePria"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white font-vidaloka"
                >
                  Waktu Pelaksanaan Resepsi (dd/mm/yy) ( Jam )
                </label>
                <input
                  type="text"
                  id="fullnamePria"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="fullNamePria"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white font-vidaloka"
                >
                  Alamat Lengkap
                </label>
                <input
                  type="text"
                  id="fullnamePria"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="fullNamePria"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white font-vidaloka"
                >
                  Link Google Maps (Tidak wajib)
                </label>
                <input
                  type="text"
                  id="fullnamePria"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
            </div>
          </div>

          {/*END FORM COMPONENT LEFT */}

          <div className="flex items-start mb-6">
            <div className="flex items-center h-5">
              <input
                id="remember"
                type="checkbox"
                value=""
                className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                required
              />
            </div>
            <label
              htmlFor="remember"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Remember me
            </label>
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Regist;
