import React from "react";

const Add_stock_card = ({ title, file }) => {
  const currentDate = new Date().toLocaleDateString();

  return (
    <article className="flex flex-col">
      <section className="bg-white p-4 rounded-md shadow-md mx-10">
        <header className="flex items-center justify-between">
          <div className="flex">
            <div className="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                />
              </svg>
              <div className="flex-col">
                <h2 className="font-bold">{title}</h2>
                <p className="text-gray-500">{file}</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-end">
            <button className="bg-transparent border-none cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <p className="text-gray-500">{currentDate} </p>
          </div>
        </header>
        <footer className="flex flex-col items-end space-y-2"></footer>
      </section>
    </article>
  );
};

export default Add_stock_card;
