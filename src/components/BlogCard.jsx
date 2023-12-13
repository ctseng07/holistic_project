const BlogCard = ({ imgURL, title, content, action }) => {
    return (
        <div className="flex flex-1 flex-col w-full max-sm:w-full capitalize">
            <img src={imgURL} alt={title}
                className="w-[280px] h-[280px]"
            />
            <h3 className='mt-2 text-xl leading-normal font-thin
            '>{title}</h3>
            <button className='mt-2 font-thin capitalize text-sm leading-normal'>{action}</button>
        </div>
    )
}

export default BlogCard