import { BookPic } from '../assets/images';

import Button from '../components/Button';

const Book = () => {
    return (
        <div className='flex flex-col justify-between relative items-center gap-10 py-10'>

            <div className="flex items-center justify-around w-full text-center max-lg:flex-col-reverse max-lg:gap-5">

                <div className="flex-col text-center">
                    <h2 className='whitespace-pre-wrap font-normal text-4xl capitalize mb-5'>Let's Get glowing!</h2>

                    <p className="text-xl italic">Your skin, brow, & soul sanctuary</p>

                </div>

                <img src={BookPic} alt="BookPic" width={400} />
            </div>

            <Button 
            className="uppercase"
            label="book here" />
        </div>
    )
}

export default Book