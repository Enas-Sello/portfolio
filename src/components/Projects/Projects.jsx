import './projects.css';
import portfolio from '../assets/item1.png';
import Amazon from '../assets/item2.png';
import admin from '../assets/admin.png';
import netflex from '../assets/item3.png';
import shareme from '../assets/shareme.png';
import game from '../assets/sello-templet.png';
//hover
import {} from 'react-icons/fa'
const Projects = () => {
  const data = [
    {
      name: 'Amazon clone',
      demo: 'https://amazon-clone-front-end-five.vercel.app/',
      code: 'https://github.com/Enas-Sello/Amazon-Clone-FrontEnd',
      img: `${Amazon}`,
      lang: [
        'React',
        'bootstrap',
        'Redux tollkit',
        'node',
        'express',
        'mongodb',
      ],
    },
    {
      name: 'Portfolio',
      code: 'https://github.com/Enas-Sello/animated-portfolio',
      img: `${portfolio}`,
      lang: ['React', 'taillwind'],
    },
    {
      name: 'Netflex clone',
      code: 'https://github.com/Enas-Sello/Netflix_clone',
      img: `${netflex}`,
      lang: ['React', 'taillwind', 'firebase'],
    },
    {
      name: 'Admin dashbord',
      code: 'https://github.com/Enas-Sello/Amazon-Clone-FrontEnd',
      img: `${admin}`,
      lang: [
        'React',
        'bootstrap',
        'Redux tollkit',
        'node',
        'express',
        'mongodb',
      ],
    },
    {
      name: 'gameing landing page',
      demo: 'https://enas-sello.github.io/sello-template/',
      code: 'https://github.com/Enas-Sello/landing',
      img: `${game}`,
      lang: ['HTML', 'CSS', 'javaScript'],
    },
    {
      name: 'Share Me App',
      demo: 'https://shareme-sello.netlify.app/',
      code: 'https://github.com/Enas-Sello/Social-media-sharing-App',
      img: `${shareme}`,
      lang: ['React', 'taillwind', 'santiy'],
    },
  ];

  return (
    <>
      <div
        data-aos="fade-up"
        name="Projects"
        className="w-full md:h-screen text-white capitalize "
      >
        <div className="cotainer max-w[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
          <div className="p-b-8  text-center">
            <p className="text-4xl font-bold inline border-b-4 border-yellow-400 ">
              work
            </p>
            <p className="py-6 text-2xl">my recent </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
            {data.map((x) => (
              <div
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000"
                className="card-item shadow-lg group container rounded-md flex
              justify-center items-center mx-auto object-cover"
                style={{
                  backgroundImage: `url(${x.img})`,
                  backgroundSize: 'cover',
                  height: '300px',
                  backgroundRepeat: 'no-repeat',
                }}
              >
                {/* hover */}
                <div className="opacity-0 group-hover:opacity-100 justify-center bg-violet-200 w-full p-5 m-1 rounded-2xl">
                  <span className="text-4xl font-bold text-violet-800  tracing-wider">
                    {x.name}
                  </span>
                  <div className=" pt-8 text-center">
                    {x.demo ? (
                      <a href={x.demo} target="#">
                        <button className="text-center rounded-lg px-6 m-4  bg-black font-bold text-xl ">
                          Dmo
                        </button>
                      </a>
                    ) : (
                      <></>
                    )}

                    <a href={x.code} target="#">
                      <button className="text-center rounded-lg px-6 m-4  bg-black font-bold text-xl">
                        code
                      </button>
                    </a>
                  </div>
                  <div className="flex flex-wrap gap-4 text-violet-800 font-bold  text-center ">
                    {x.lang.map((a) => (
                      <>
                        <p>{a}</p>
                      </>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
