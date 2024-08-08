const Card = () => {
  return (
    <div>
      <div className="px-[5.5rem] pt-10 flex gap-4">
        <div className="rounded-lg shadow-xl border w-[45%] bg-slate-200 pt-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-12 pl-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
            />
          </svg>

          <div className="flex pl-2.5">
            <span className="text-2xl font-semibold pl-2">
              Secure Messaging
            </span>
          </div>
          <span className="flex pt-2 pb-4 pl-[1.2rem] pr-2 text-md justify-center">
            Your conversations are protected with end-to-end encryption.
          </span>
        </div>
        <div className="rounded-lg shadow-xl border w-[45%] bg-slate-200 pt-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-12 pl-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
            />
          </svg>
          <div className="flex">
            <span className="text-2xl font-semibold lg:px-5">File Sharing</span>
          </div>
          <span className="flex pt-2 pb-6 px-5 text-md justify-center">
            Share documents, images, and other files with your team.
          </span>
        </div>
      </div>
      <div className="px-[5.5rem] flex gap-4">
        <div className="flex gap-4 pt-4">
          <div className="rounded-lg shadow-xl border w-[45%] bg-slate-200 pt-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-12 pl-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
              />
            </svg>

            <div className="flex">
              <span className="text-2xl font-semibold lg:px-5">
                Real-Time Chat
              </span>
            </div>
            <span className="flex pt-2 pb-4 px-5 text-md justify-center">
              Engage in seamless conversations with our real-time chat feature.
            </span>
          </div>
          <div className="rounded-lg shadow-xl border w-[45%] bg-slate-200 pt-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-12 pl-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.182 16.318A4.486 4.486 0 0 0 12.016 15a4.486 4.486 0 0 0-3.198 1.318M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z"
              />
            </svg>

            <div className="flex">
              <span className="text-2xl font-semibold lg:px-5">
                Express with Emojis
              </span>
            </div>
            <span className="flex pt-2 pb-6 px-5 text-md justify-center">
            Express yourself with emoji feature, adding emotion to your conversations.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
