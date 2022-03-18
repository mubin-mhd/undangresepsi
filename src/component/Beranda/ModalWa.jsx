import React from "react";

function ModalWa({ setModal }) {
  return (
    <div
      class="p-6 max-w-20 bg-white rounded-lg border border-gray-200 shadow-md  pb-10 rounded-br-3xl relative"
      data-aos="fade-up"
      data-aos-duration="700"
    >
      <button
        onClick={() => setModal(false)}
        className="absolute right-2 top-0"
      >
        <i class="bi bi-x"></i>
      </button>
      <a href="#">
        <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 ">
          <i class="bi bi-chat-square-dots"></i> Send WA Admin
        </h5>
      </a>
      <p class="mb-3 text-sm text-gray-400">
        Hallo kak, say ingin tanya undangan...
      </p>
      <a
        href="#"
        class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-[#56d18e] rounded-lg  focus:ring-4 focus:ring-blue-300 group"
      >
        <i class="bi bi-send group-hover:rotate-45 transition-all"></i>
      </a>
    </div>
  );
}

export default ModalWa;
