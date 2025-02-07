import React from 'react';
import imgb1 from '/assets/blog1.png';
import imgb2 from '/assets/blog2.png';
import imgb3 from '/assets/blog3.png';

const Blog = () => {
  const blogs = [
    {
      id: 1,
      title: 'Creating Streamlined Safeguarding Processes with OneRen',
      src: imgb1
    },
    {
      id: 2,
      title: 'What are your safeguarding responsibilities and how can you manage them?',
      src: imgb2
    },
    {
      id: 3,
      title: 'Revamping the Membership Model with Triathlon Australia',
      src: imgb3
    },
  ];

  return (
    <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-12' id="blog">
      <div className='text-center md:w-1/2 mx-auto'>
        <h2 className='text-4xl text-neutralDGrey font-semibold mb-4'>Caring is the new marketing</h2>
        <p className='text-sm text-neutralGrey mb-8 md:w-3/4 mx-auto'>
          The Nextcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​
        </p>
      </div>

      {/* All Blogs */}
      <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 items-center justify-between'>
        {blogs.map(blog => (
          <div key={blog.id} className='mx-auto relative mb-12 cursor-pointer'>
            <img src={blog.src} alt={blog.title} />
            <div className='text-center px-4 py-8 bg-white shadow-lg rounded-md md:w-3/4 mx-auto absolute left-0 right-0 top-20'>
              <h3>{blog.title}</h3>
              <div className='flex items-center justify-center gap-8'>
                <a href="/" className='font-bold text-brandPrimary hover:text-neutral-700'>Read More</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
