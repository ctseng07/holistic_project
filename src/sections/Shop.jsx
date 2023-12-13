import { ShopPic } from '../assets/images';

import Button from '../components/Button';

const Shop = () => {
  return (
    <div className='max-container flex justify-between items-center'>
      <img src={ShopPic} alt="Shop" width={600}/>

      <div className="flex-col flex items-center justify-center text-center w-1/2 gap-10">
        <p className='uppercase text-xs font-thin'>Shop</p>

        <h2 className='whitespace-pre-wrap text-4xl'>Restore Your Skin's Natural Balance</h2>

        <Button label="Visit the mindful shop" />
      </div>
    </div>
  )
}

export default Shop
