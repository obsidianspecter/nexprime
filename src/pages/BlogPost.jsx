import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaTags, FaClock, FaUser, FaCalendar } from 'react-icons/fa';
import { blogPosts } from '../data/blog';

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === parseInt(id));

  if (!post) {
    return (
      <div className="min-h-screen bg-[#00031D] text-white pt-24 pb-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <p className="text-gray-400 mb-8">The article you're looking for doesn't exist.</p>
          <Link 
            to="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
          >
            <FaArrowLeft />
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#00031D] text-white pt-24 pb-16">
      {/* Hero Section */}
      <motion.div 
        className="relative h-[60vh] min-h-[400px] overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#00031D] via-[#00031D]/80 to-transparent"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm mb-4 inline-block">
                {post.category}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center gap-6 text-gray-400">
                <span className="flex items-center gap-2">
                  <FaUser className="text-purple-400" />
                  {post.author}
                </span>
                <span className="flex items-center gap-2">
                  <FaCalendar className="text-purple-400" />
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
                <span className="flex items-center gap-2">
                  <FaClock className="text-purple-400" />
                  {post.readTime}
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="prose prose-invert prose-lg max-w-none"
        >
          {post.content.split('\n\n').map((paragraph, index) => (
            <p key={index} className="text-gray-300 mb-6 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </motion.div>

        {/* Tags Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 pt-8 border-t border-gray-800"
        >
          <div className="flex items-center gap-2 mb-4">
            <FaTags className="text-purple-400" />
            <h3 className="text-lg font-semibold">Tags</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {post.tags.map(tag => (
              <span
                key={tag}
                className="px-3 py-1 bg-gray-900/50 text-gray-400 rounded-full text-sm hover:bg-purple-500/20 hover:text-purple-300 transition-colors duration-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Back to Blog Button */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-12"
        >
          <Link 
            to="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
          >
            <FaArrowLeft />
            Back to Blog
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogPost; 