"use client"
import React, { useState } from 'react';
import { ModalAuto } from '../modals/modalsauto';

const Añadir = ({onAddAuto}) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        className="group flex h-10 w-10 select-none items-center justify-center rounded-lg border border-zinc-100 bg-gray-200 leading-8 text-zinc-950 shadow-[0_-1px_0_0px_#d4d4d8_inset,0_0_0_1px_#f4f4f5_inset,0_0.5px_0_1.5px_#fff_inset] hover:bg-zinc-50 hover:via-zinc-900 hover:to-zinc-800 active:shadow-[-1px_0px_1px_0px_#e4e4e7_inset,1px_0px_1px_0px_#e4e4e7_inset,0px_0.125rem_1px_0px_#d4d4d8_inset]"
        aria-label="Abrir modal"
        onClick={() => setShowModal(true)}
      >
        <span className="flex items-center group-active:[transform:translate3d(0,1px,0)]">
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-zinc-950"
          >
            <path
              d="M8 2.75C8 2.47386 7.77614 2.25 7.5 2.25C7.22386 2.25 7 2.47386 7 2.75V7H2.75C2.47386 7 2.25 7.22386 2.25 7.5C2.25 7.77614 2.47386 8 2.75 8H7V12.25C7 12.5261 7.22386 12.75 7.5 12.75C7.77614 12.75 8 12.5261 8 12.25V8H12.25C12.5261 8 12.75 7.77614 12.75 7.5C12.75 7.22386 12.5261 7 12.25 7H8V2.75Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            ></path>
          </svg>
        </span>
      </button>
      {showModal && (
      <ModalAuto setShowModal={setShowModal} onAddAuto={onAddAuto}></ModalAuto>
      )}
    </>
  );
}

export default Añadir;
