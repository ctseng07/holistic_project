import { rightArrowBlack } from "../assets/icons"

const BlogCard = ({ imgURL, title, content, action }) => {
    return (
        <div className="flex flex-1 flex-col w-full max-sm:w-full capitalize">
            <img src={imgURL} alt={title}
                className="w-full h-[280px]"
                />
            <h3 className='mt-2 text-xl leading-normal font-thin
            '>{title}</h3>

            <p className="mt-2 font-thin capitalize text-sm leading-normal">{content}</p>

            <button className='mt-2 font-thin capitalize text-sm leading-normal flex items-end gap-1'>{action} 
            <img src={rightArrowBlack} 
            alt="rightArrow" 
            width={20}
            height={20}/></button>

        </div>
    )
}

export default BlogCard