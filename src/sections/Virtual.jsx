import Button from "../components/Button";

import { VirtualPic } from "../assets/images";

const Virtual = () => {
  return (
    <div className='flex flex-col justify-center items-center max-container'>

    <div className="flex justify-between relative items-center gap-5 py-7 sm:text-center max-lg:flex-col max-xl:px-6">

        <div className="flex flex-col text-center gap-5 sm:text-center">
            <h2 className="text-4xl font-medium">Holistic Skin Consultation</h2>

            <p className="text-2xl font-bold">Are you looking for results you haven't seen from conventional skincare?</p>

            <p className="text-2xl font-light leading-loose italic">Katey offers one-on-one virtual skin consultations + personalized holistic skin protocols and treatment plans</p>
        </div>

        <img src={VirtualPic} alt="virtual" width={600} />

    </div>
        

    <Button label='Learn More' id='about' />

    
</div>
  )
}

export default Virtual
