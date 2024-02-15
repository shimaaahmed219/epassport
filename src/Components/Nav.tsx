
import icon from '../assets/navImg/Group (1).svg'

function Nav() {
    return (

        <div className='bg-bg w-5/6 mt-3 m-auto flex flex-row justify-between '>

            <
                svg xmlns="http://www.w3.org/2000/svg" width="44" height="46" viewBox="0 0 44 46" fill="none">
                <path d="M7.33398 9.875L18.334 9.875M18.334 9.875C18.334 11.9461 19.9756 13.625 22.0007 13.625C24.0257 13.625 25.6673 11.9461 25.6673 9.875M18.334 9.875C18.334 7.80393 19.9756 6.125 22.0007 6.125C24.0257 6.125 25.6673 7.80393 25.6673 9.875M25.6673 9.875L36.6673 9.875M7.33398 23L29.334 23M29.334 23C29.334 25.0711 30.9756 26.75 33.0007 26.75C35.0257 26.75 36.6673 25.0711 36.6673 23C36.6673 20.9289 35.0257 19.25 33.0007 19.25C30.9756 19.25 29.334 20.9289 29.334 23ZM14.6673 36.125L36.6673 36.125M14.6673 36.125C14.6673 34.0539 13.0257 32.375 11.0007 32.375C8.97561 32.375 7.33399 34.0539 7.33398 36.125C7.33398 38.1961 8.97561 39.875 11.0007 39.875C13.0257 39.875 14.6673 38.1961 14.6673 36.125Z" stroke="#324134" stroke-width="1.5" stroke-linecap="round" />
            </svg>



            <div className='flex row'>
                <h1 className={` font-tinos text-[26px] text-greenAcc mt-3 mr-3  text-xl`}>
                    <span className='text-yellowAcc text-[22px]'>E-</span>passport
                </h1>




                <img src={icon} alt='enc-img'/>
            </div>
        </div>
        

    )
}

export default Nav