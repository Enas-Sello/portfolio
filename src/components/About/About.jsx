import React from 'react';
import Button from '../button/Button';

const About = () => {
  const about = {
    name: 'Enas awad',
  };
  return (
    <div name="About" className=" w-full h-screen  text-white capitalize">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div
          className="container 
                max-[1000px] w-full grid grid-cols-2 gap-8"
        >
          <div data-aos="fade-in-zome" className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-yellow-400">
              about
            </p>
          </div>
          <div></div>
        </div>

        <div
          className="
                max-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4"
        >
          <div
            data-aos="fade-down-left"
            className="sm:text-right text-4xl font-bold mt-5"
          >
            <p className=" text-center">
              hi i'm <br />
              {about.name}
              <br />
            </p>
          </div>
          <div data-aos="fade-down-right">
            <p className=" text-l mb-14">
              I graduated from Al-Azher university , studied three diplomas in
              teaching and psychological health disabilities section . worked as
              an Arabic teacher for deaf and speechless . I have started my
              career at web devlopment with FWD front-end track by the end of
              2020 & I joined ITI ( information technology institute ) and AAIB
              bank(Arab african bank) full Stack using MERN for 6-month
              intensive code camp program , finally 1 October i got ajob as
              front end Devloper using react at{' '}
              <strong>Alexon softwear company</strong>
              {/*               A self-learner , highly motuvated and talented Full Stake web
              Devloper ,know for his clean code and the quality he delivers.
 */}
            </p>
          </div>
        </div>
        <Button />
      </div>
    </div>
  );
};

export default About;
