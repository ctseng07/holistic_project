import Button from "../components/Button";

import { AboutPic } from "../assets/images";

const About = () => {
    return (
        <div className='flex flex-col justify-center items-center max-container'>

            <h2 className='text-4xl text-center whitespace-pre-wra my-4 mx-0'>
                A <a className='text-pink italic'>mindful</a> approach to <a className='text-pink italic'>beauty</a>, guiding you towards <a className='text-pink italic'>skin & soul</a> healing
            </h2>

            <div className="flex justify-between relative items-center gap-5 py-7 sm:text-center max-lg:flex-col max-xl:px-6">
                <img src={AboutPic} alt="about" width={600} />

                <div className="flex flex-col text-center gap-10">
                    <h2 className="text-4xl">Meet Katey</h2>

                    <p className="text-xl font-bodani italic leading-loose ">"I want to compassionately empower women to heal and understand their skin so they can feel extra confident and glowy, stepping out of the shadows - into the light.</p>
                </div>
            </div>

            <Button label='About Mindful Beauty' id='about' />

            
        </div>
    )
}

export default About
