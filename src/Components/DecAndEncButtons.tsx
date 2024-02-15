



import ecimg from '../assets/EncAndEecICONS/Vector (1).svg'
import decimg from '../assets/EncAndEecICONS/Group 2288.svg'
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
function Buttons() {
  return (
    <div className={` font-roboto py-[50px] w-[100%] m-auto  flex extramd:flex-row justify-between flex-col `}>


      <Link to="/decrypt" className=" m-auto w-[16.5rem]  text-[20px] my-2 shadow-3xl  border-4 border-yellowAcc h-[70px]  justify-center flex flex-row items-center  bg-greenAcc capitalize   text-white rounded-input ">
        <img src={decimg} alt=" Decrypt" className="mx-3" />
        Decrypt the file
      </Link>


      <Link to="/encryption" className=" m-auto w-[16.5rem] my-2 text-[20px]  shadow-3xl border-4 border-yellowAcc text-white  h-[70px] justify-center flex flex-row items-center capitalize  bg-greenAcc rounded-input ">
        <img src={ecimg} alt=" encryption" className="mx-3" />
        file encryption
      </Link>

      <div className="bg-yellowAcc rounded-[10px] h-[70px] flex flex-row items-center m-auto xl:w-[424px] lg:w-[300px] extralg:w-[280px] extramd:w-[290px] w-[390px]  my-2">

        <input type="text" placeholder='search' className="h-[62px] ps-5  placeholder:text-gray-400  placeholder:text-lg ms-[4px] rounded-tl-[10px]  rounded-bl-[10px] bg-bg xl:w-[365px] lg:w-[240px] extramd:w-[220px] w-[320px] " />

        <div className="h-[70px] xl:w-[59px] lg:w-[60px] extramd:w-[70px] w-[70px] grid justify-center items-center">
          <SearchIcon className=" text-white text-3xl " />
        </div>


      </div>
    </div>
  );
}

export default Buttons;
