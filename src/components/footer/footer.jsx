import React from 'react';
import {
  AiFillGithub,
  AiOutlineLinkedin,
  AiOutlineMail,
  AiOutlineMobile,
} from "react-icons/ai";
function Footer() {
    return (
      <div name="footer" className="w-full  text-whte justify-center p-4">
        <hr />
        <ul className="flex justify-center text-center text-4xl mt-3 ">
          <li >
            <a href="https://github.com/Enas-Sello">
              <AiFillGithub />
            </a>
          </li>

          <li>
            <a href="https://www.linkedin.com/in/enas-sellow-36153219a/">
              <AiOutlineLinkedin />
            </a>
          </li>

        

          <p className="text-lg mt-1 ">
            Made My Enas Sello
          </p>
        </ul>
      </div>
    );
}

export default Footer