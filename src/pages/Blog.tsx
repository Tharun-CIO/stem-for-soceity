
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GridBackground from '@/components/GridBackground';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of STEM Education",
      excerpt: "Exploring how technology is transforming the way we learn science, technology, engineering, and mathematics.",
      author: "Dr. Sarah Johnson",
      date: "2024-01-15",
      readTime: "5 min read",
      category: "Education",
      image: "/placeholder.svg"
    },
    {
      id: 2,
      title: "Career Opportunities in Biotechnology",
      excerpt: "A comprehensive guide to the growing field of biotechnology and its career prospects.",
      author: "Prof. Michael Chen",
      date: "2024-01-10",
      readTime: "7 min read",
      category: "Career",
      image: "/placeholder.svg"
    },
    {
      id: 3,
      title: "Research Methodologies in Modern Science",
      excerpt: "Understanding the latest research methodologies that are shaping scientific discoveries.",
      author: "Dr. Emily Rodriguez",
      date: "2024-01-05",
      readTime: "6 min read",
      category: "Research",
      image: "/placeholder.svg"
    },
    {
      id: 4,
      title: "Artificial Intelligence in Healthcare",
      excerpt: "How AI is revolutionizing medical diagnosis, treatment planning, and patient care.",
      author: "Dr. Alex Kumar",
      date: "2024-01-20",
      readTime: "8 min read",
      category: "Technology",
      image: "/placeholder.svg"
    },
    {
      id: 5,
      title: "Sustainable Engineering Solutions",
      excerpt: "Innovative engineering approaches to address climate change and environmental challenges.",
      author: "Prof. Lisa Wang",
      date: "2024-01-25",
      readTime: "6 min read",
      category: "Innovation",
      image: "/placeholder.svg"
    },
    {
      id: 6,
      title: "Quantum Computing Breakthroughs",
      excerpt: "Latest developments in quantum computing and their potential impact on various industries.",
      author: "Dr. James Miller",
      date: "2024-01-30",
      readTime: "9 min read",
      category: "Technology",
      image: "/placeholder.svg"
    }
  ];

  const categories = ["All", "Education", "Career", "Research", "Technology", "Innovation"];

  return (
    <div className="min-h-screen bg-white">
      <GridBackground>
        <Header />
        
        <div className="pt-8 pb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header Section */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                STEM <span className="text-yellow-400">Blog</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Stay updated with the latest insights, research, and trends in science, technology, engineering, and mathematics.
              </p>
            </div>
          </div>
        </div>
      </GridBackground>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        {/* Search and Create Article Section */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              placeholder="Search articles..."
              className="pl-10 h-12 bg-gray-50 border-0 rounded-full"
            />
          </div>
          <Link to="/blog-article">
            <Button className="bg-blue-600 hover:bg-blue-700 h-12 px-8 rounded-full">
              <Plus className="w-5 h-5 mr-2" />
              Create Article
            </Button>
          </Link>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === "All" ? "default" : "outline"}
              className={`rounded-full ${
                category === "All" 
                  ? "bg-blue-600 hover:bg-blue-700 text-white" 
                  : "bg-white hover:bg-gray-50 text-gray-700 border-gray-300"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link key={post.id} to={`/blog/${post.id}`}>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer">
                <div className="h-48 bg-gray-200 relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-2">
                      <span>{post.author}</span>
                      <span>•</span>
                      <span>{post.date}</span>
                    </div>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <Button variant="outline" className="bg-white hover:bg-gray-50 border-gray-300 px-8 py-3">
            Load More Articles
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Blog;
