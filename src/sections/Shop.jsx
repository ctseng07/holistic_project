import { ShopPic } from '../assets/images';

import Button from '../components/Button';

const Shop = () => {
  return (
    <div className='max-container flex justify-between items-center max-lg:flex-col max-lg:gap-3 max-lg:py-10 max-lg:px-6'>
      <img src={ShopPic} alt="Shop" width={600}/>

      <div className="flex-col flex items-center justify-center text-center w-1/2 gap-5">
        <p className='uppercase text-xs font-thin'>Shop</p>

        <h2 className='whitespace-pre-wrap text-4xl max-lg:text-2xl'>Restore Your Skin's Natural Balance</h2>

        <Button label="Visit the mindful shop" />
      </div>
    </div>
  )
}

export default Shop
