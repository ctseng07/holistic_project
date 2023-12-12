import { leftArrow, rightArrow} from '../assets/icons';

const Hero = () => {
  return (
    <div className="relative overflow-hidden cursor-grab min-h-screen flex items-center justify-between">

<button className="flex items-center justify-center rounded-full bg-pink w-16 h-16 mx-8 opacity-70">
<img src={leftArrow} alt="leftArrow" width={35} height={35} />
</button>

<button className="flex items-center justify-center rounded-full bg-pink w-16 h-16 mx-8 opacity-70">
<img src={rightArrow} alt="rightArrow" width={35} height={35} />
</button>

    </div>
  )
}

export default Hero