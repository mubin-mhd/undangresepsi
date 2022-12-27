import React, { useState } from "react";
import "../TemplateVideo/_template-video.scss";
import ModalAction from "../Modal/ModalAction";

const EmbedVideo = ({ data }) => {
  const rupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(number);
  };
  const dataDefault = {
    title: "",
    price: null,
    ratio: [],
  };

  const [dataModal, setDataModal] = useState(dataDefault);
  const [isModal, setIsModal] = useState(false);

  const handleOpenModal = (title, price, ratio) => {
    setIsModal(true);
    setDataModal({
      ...dataDefault,
      title,
      price,
      ratio,
    });
  };

  return (
    <div>
      <ModalAction
        dataModal={dataModal}
        openModal={isModal}
        onLeave={() => setIsModal(false)}
        setOpenModal={setIsModal}
      />
      <div className="flex gap-4 flex-wrap justify-center md:justify-start">
        {data?.map((item, index) => (
          <div key={index} data-aos="fade-up" data-aos-duration="700">
            <div className="bg-white px-6 pb-4 pt-2 w-min rounded-md">
              <h3 className="text-xl font-base mb-1 text-oldRed font-vidaloka">
                {item.title}
              </h3>
              <div className="img-container">
                <iframe
                  width="auto"
                  height="400"
                  src={item.link}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div>
                <div className="flex justify-start mt-2 items-center">
                  <h3 className="text-md font-base mr-2 text-oldRed font-vidaloka">
                    Ratio :
                  </h3>
                  {item?.ratio.map((dataItem, index) => (
                    <span
                      key={index}
                      className="mr-2 px-3 py-1 rounded-full text-oldRed font-vidaloka text-gray-600 bg-[#FFDFB9] font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease"
                    >
                      {dataItem}
                    </span>
                  ))}
                </div>
                <h3 className="text-lg font-base mt-1 text-oldRed font-vidaloka">
                  {rupiah(item.price)}
                </h3>
              </div>
              <button
                className="bg-[#890025] hover:bg-[#ac3555] transition px-5 py-3 w-full rounded-md text-white mt-2 text-lg"
                data-bs-toggle="modal"
                data-bs-target="#exampleModalCenter"
                onClick={() =>
                  handleOpenModal(item.title, item.price, item.ratio)
                }
              >
                Order
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmbedVideo;
