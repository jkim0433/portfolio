import React, { useState } from "react";
import { AiOutlineHome, AiOutlineMail, AiFillGithub } from "react-icons/ai";
import Alert from "./Alert";

const Footer = () => {
  const [alertMessage, setAlertMessage] = useState("");

  const copyToClipboard = () => {
    const email = "ijhni043@gmail.com";

    navigator.clipboard
      .writeText(email)
      .then(() => {
        setAlertMessage("이메일이 복사되었습니다");
        setTimeout(() => setAlertMessage(""), 6000);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <div className="w-full fixed bottom-0">
      <footer className="ml-1 px-5 mt-2 bg-neutral-50 text-stone-900 py-4 shadow-sm">
        <div className="mx-auto px-4 flex items-center justify-between">
          <div className="text-xs text-stone-600">React와 Tailwind CSS 기반으로 구축된 개인 포트폴리오 페이지입니다.</div>
          <div className="relative flex space-x-3">
            {/* Home 아이콘 */}
            <div className="relative group ml-3">
              <a
                href="#"
                className="text-neutral-700 hover:text-yellow-700/20 transition duration-300"
                onClick={() => {
                  window.location.href = "/";
                }}
              >
                <AiOutlineHome className="w-6 h-6" />
              </a>
              <div className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 w-max hidden group-hover:block bg-gray-800 text-white text-xs rounded py-1 px-2 whitespace-nowrap">
                Home
              </div>
            </div>

            {/* GitHub 아이콘 */}
            <div className="relative group">
              <a
                href="#"
                className="text-neutral-700 hover:text-yellow-700/20 transition duration-300"
                onClick={() => {
                  window.location.href = "https://github.com/jkim0433?tab=repositories";
                }}
              >
                <AiFillGithub className="w-6 h-6" />
              </a>
              <div className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 w-max hidden group-hover:block bg-gray-800 text-white text-xs rounded py-1 px-2 whitespace-nowrap">
                Go To GitHub
              </div>
            </div>

            {/* Email 복사 아이콘 */}
            <div className="relative group">
              <button
                type="button"
                className="text-neutral-700 hover:text-yellow-700/20 transition duration-300"
                onClick={copyToClipboard}
              >
                <AiOutlineMail className="w-6 h-6" />
              </button>
              <div className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 w-max hidden group-hover:block bg-gray-800 text-white text-xs rounded py-1 px-2 whitespace-nowrap">
                Copy Email
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* 알림창 */}
      {alertMessage && (
        <Alert message={alertMessage} onClose={() => setAlertMessage("")} />
      )}
    </div>
  );
};

export default Footer;
