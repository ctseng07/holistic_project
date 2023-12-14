import { blogs } from "../constants";
import BlogCard from "../components/BlogCard";
import { shiftLeft, shiftRight } from "../assets/icons";

const Blog = () => {
  return (
    <section id='blogs'
      className="max-container
max-sm:mt-12">
      <div className="flex justify-between">
        <h6 className="font-proxima font-thin uppercase text-sm">blog</h6>
        <button className="flex gap-3">
          <img src={shiftLeft}
            alt="shift-left"
            height={20}
            width={20} />
          <img src={shiftRight}
            alt="shift-right"
            height={20}
            width={20} />
        </button>
      </div>

      <div className="mt-5 grid md:grid-cols-3 
  sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
        {blogs.map((blog) => (
          <BlogCard key={blog.title} {...blog} />
        ))}
      </div>
    </section>
  )
}

export default Blog