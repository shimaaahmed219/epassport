import { useState } from "react";
import icon2 from "../assets/filters-2.svg";
import icon from "../assets/navImg/Group (1).svg";
import Saidebar from "./Saidebar";
// import CloseIcon from '@mui/icons-material/Close';

function Nav() {
  const [showSidebar, setShowSidebar] = useState(false);

  const toogleSidebar = () => {
    setShowSidebar(showSidebar === false ? true : false);
  };

  return (
    // xl button size
    <div className={`bg-bg w-5/6 mt-3 m-auto flex flex-row justify-between `}>
      <div>
        <button onClick={toogleSidebar}>
          <img src={icon2} className={`${showSidebar && "hidden"}`} />
        </button>
        <div
          className={`${
            !showSidebar && "hidden transition-opacity"
          } absolute w-full bg-black transition-opacity	`}
        >
          <Saidebar />
        </div>
      </div>

      {/* small size */}

      <div className="flex row w-full">
        <div className="ms-auto flex">
          <h1
            className={` font-tinos text-[26px] text-greenAcc mt-3 mr-3  text-xl`}
          >
            <span className="text-yellowAcc text-[22px]">E-</span>passport
          </h1>

          <img
            src={icon}
            alt="enc-img"
            className="ms-auto transition ease-in-out delay-150 duration-700 "
          />
        </div>
      </div>
      {/*          
            {showSidebar === true ? 
            <Saidebar/>
             : ''}
             {showSidebar === true ?
                <img src={icon2} onClick={toogleSidebar} className='fixed cursor-pointer left-[360px] ' /> : ''}  */}

      {/* {showSidebar?  <button onClick={toogleSidebar} className="absolute"><CloseIcon/></button>:""} */}
    </div>
  );
}

export default Nav;
