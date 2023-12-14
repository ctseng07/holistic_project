import Button from "../components/Button";

import { VirtualWorkshopPic, banner } from "../assets/images";

const VirtualWorkshop = () => {
    return (
        <div className='flex flex-col justify-center items-center max-container '>

            <div className="flex justify-between relative items-center gap-10 py-7 sm:text-center max-lg:flex-col max-xl:px-6">

                <img src={VirtualWorkshopPic} alt="virtualWorkshop" width={600} />

                <div className="flex flex-col text-center gap-5 sm:text-center">
                    <h2 className="text-5xl font-medium">Personalized Gua Sha Workshops</h2>

                    <p className="text-xl font-bodani">Learn how to confidentially practice facial gua sha for glowing long-term results!</p>

                    <p className="text-xl font-thin leading-loose italic">An interactive workshop with Katey where you can ask questions and follow along to a gua sha tutorial tailored to your skin’s specific needs.</p>
                </div>
            </div>


            <Button label='Learn More' id='#' />

            <img src={banner}
            className="mt-20"
                alt="banner" />
        </div>
    )
}

export default VirtualWorkshop
