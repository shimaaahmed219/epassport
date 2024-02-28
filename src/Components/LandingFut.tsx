import encIcon from '../assets/landingPage/Group 2530.svg'
import setIcon from '../assets/landingPage/Group 2530 (1).svg'
import decIcon from '../assets/landingPage/Group 2530 (2).svg'

export default function LandingFut() {
  return (
    <div className="w-full bg-white text-greenAcc mt-5 mb-[100px] ">
      <h1 className="font-tinos text-center text-[40px] font-bold mb-20">Our website features</h1>
      <div className="w-5/6 m-auto grid lg:grid-cols-3 md-grid-cols-2 grid-cols-1 justify-center">
        <div className="md:w-[326px] h-[146px] bg-bg rounded-[20px] px-[20px] pt-[20px]">
          <img src={encIcon} className="mt-[-43px] ml-[10px] mb-2" />
          <h4 className="text-greenAcc text-[20px] font-tinos font-bold">Encryption technology.</h4>
          <p className="font-roboto text-[13px] text-p font-normal w-[252px]">The practice of protecting information using encrypted algorithms, hashes, and signatures.</p>
        </div>


        <div className="md:w-[326px] h-[146px] bg-bg rounded-[20px] px-[20px] pt-[20px]">
          <img src={setIcon} className="mt-[-43px] ml-[10px] mb-2" />
          <h4 className="text-greenAcc text-[20px] font-tinos font-bold">Ease of use.</h4>
          <p className="font-roboto text-[13px] text-p font-normal w-[252px]">The practice of protecting information using encrypted algorithms, hashes, and signatures.</p>
        </div>


        <div className="md:w-[326px] h-[146px] bg-bg rounded-[20px] px-[20px] pt-[20px]">
          <img src={decIcon} className="mt-[-43px] ml-[10px] mb-2" />
          <h4 className="text-greenAcc text-[20px] font-tinos font-bold">Decryption technology.</h4>
          <p className="font-roboto text-[13px] text-p font-normal w-[252px]">The practice of protecting information using encrypted algorithms, hashes, and signatures.</p>
        </div>

      </div>
    </div>
  )
}
