import { prototype } from 'postcss/lib/previous-map';
import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';

const Blog = ({ blog, handelAddToBookmark }) => {
    const { title, cover, posted_date, reading_time, author, author_img, hashtag } = blog;
    return (
        <div className='mb-20'>
            <img src={cover} alt="" />
            <div className='flex justify-between mb-8'>
                <div className='flex gap-4 '>
                    <img src={author_img} alt="" />
                    <div className=''>
                        <h3 className='text-2xl'>{author} </h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className='mb-3'>
                    <span>{reading_time} min read</span>
                    <button
                        onClick={() => handelAddToBookmark(blog)}
                        className='ml-2 mt-2 text-2xl text-red-600'><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h2 className="text-4xl">{title}</h2>
            <p>
                {
                    hashtag.map((hash, idx) => <span key={idx}> <a href="">#{hash}</a></span>)
                }
            </p>
        </div>
    );
};
Blog.PropTypes = {
    blog: PropTypes.object.isRequired,
    
    
}
export default Blog;