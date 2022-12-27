import React, { useState } from "react";

const ModalAction = ({ openModal, dataModal, onLeave, setOpenModal }) => {
  const [isModal, setIsModal] = useState(false);

  const handleSubmit = () => {
    setOpenModal(false);
  };

  const convertRatio = (datas) => {
    return (
      <div className="flex items-center mr-2">
        {datas?.ratio.map((dataItem, index) => (
          <span
            key={index}
            className="mr-2 px-3 py-1 rounded-full text-oldRed font-vidaloka text-gray-600 bg-[#FFDFB9] font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease"
          >
            {dataItem}
          </span>
        ))}
      </div>
    );
  };

  const rupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(number);
  };

  return (
    <>
      {openModal ? (
        <>
          <div
            data-aos="zoom-in"
            data-aos-delay="20"
            data-aos-duration="200"
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full md:min-w-[500px] bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-3 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-2xl font-semibold">Modal Title</h3>
                  <button className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none">
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="modal-body relative p-4">
                  <table className="table-fixed">
                    <tbody>
                      <tr>
                        <td className="p-2 font-vidaloka font-base text-oldRed">
                          Tema{" "}
                        </td>
                        <td className="p-2 font-vidaloka font-base text-oldRed">
                          :{" "}
                        </td>
                        <td className="p-2 font-vidaloka font-base text-oldRed">
                          {" "}
                          {dataModal?.title}
                        </td>
                      </tr>
                      <tr>
                        <td className="p-2 font-vidaloka font-base text-oldRed">
                          Ratio{" "}
                        </td>
                        <td className="p-2 font-vidaloka font-base text-oldRed">
                          :{" "}
                        </td>
                        <td className="p-2 font-vidaloka font-base text-oldRed">
                          {" "}
                          {convertRatio(dataModal)}
                        </td>
                      </tr>
                      <tr>
                        <td className="p-2 font-vidaloka font-base text-oldRed">
                          Harga{" "}
                        </td>
                        <td className="p-2 font-vidaloka font-base text-oldRed">
                          :{" "}
                        </td>
                        <td className="p-2 font-vidaloka font-base text-oldRed">
                          {" "}
                          {rupiah(dataModal?.price)}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-3 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={onLeave}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={handleSubmit}
                  >
                    Order
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default ModalAction;
