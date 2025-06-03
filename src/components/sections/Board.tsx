'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MessageSquare, Calendar, User, Eye } from 'lucide-react';

let getPosts: () => Promise<BoardPost[]>;
let getPostById: (id: number) => Promise<BoardPost | null>;

try {
  const supabaseModule = require('../../../lib/supabase');
  getPosts = supabaseModule.getPosts;
  getPostById = supabaseModule.getPostById;
} catch (error) {
  getPosts = async () => dummyPosts;
  getPostById = async (id: number) => dummyPosts.find(p => p.id === id) || null;
}

interface BoardPost {
  id: number;
  title: string;
  content: string;
  author: string;
  created_at?: string;
  date?: string;
  views: number;
  category: string;
}

const dummyPosts: BoardPost[] = [
  {
    id: 1,
    title: "Next.js 포트폴리오 제작 후기",
    content: "Next.js 14와 TypeScript를 활용하여 포트폴리오를 제작하면서 겪었던 경험들을 공유합니다. App Router와 Server Components의 활용법, 그리고 성능 최적화 방법들에 대해 다룹니다.",
    author: "개발자",
    date: "2024-01-15",
    views: 156,
    category: "개발"
  },
  {
    id: 2,
    title: "프론트엔드 개발자의 성장 여정",
    content: "주니어 개발자에서 시니어로 성장하기까지의 과정과 배운 점들을 정리했습니다. 기술적인 성장뿐만 아니라 소프트 스킬의 중요성에 대해서도 이야기합니다.",
    author: "개발자",
    date: "2024-01-10",
    views: 203,
    category: "커리어"
  },
  {
    id: 3,
    title: "React 상태 관리 라이브러리 비교",
    content: "Redux, Zustand, Jotai 등 다양한 상태 관리 라이브러리들의 특징과 사용 사례를 비교 분석했습니다. 각각의 장단점과 프로젝트에 맞는 선택 기준을 제시합니다.",
    author: "개발자",
    date: "2024-01-05",
    views: 89,
    category: "기술"
  }
];

const Board = () => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: false });
  const [selectedPost, setSelectedPost] = useState<BoardPost | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [posts, setPosts] = useState<BoardPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const fetchedPosts = await getPosts();
        setPosts(fetchedPosts);
      } catch (error) {
        console.error('Failed to load posts:', error);
        setPosts(dummyPosts);
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, []);

  const openModal = async (post: BoardPost) => {
    try {
      const fullPost = await getPostById(post.id);
      if (fullPost) {
        setSelectedPost(fullPost);
        setPosts(prev => prev.map(p => 
          p.id === post.id ? { ...p, views: fullPost.views } : p
        ));
      } else {
        setSelectedPost(post);
        setPosts(prev => prev.map(p => 
          p.id === post.id ? { ...p, views: p.views + 1 } : p
        ));
      }
    } catch (error) {
      console.error('Failed to load post details:', error);
      setSelectedPost(post);
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPost(null);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case '개발': return 'bg-blue-100 text-blue-800';
      case '커리어': return 'bg-green-100 text-green-800';
      case '기술': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  if (loading) {
    return (
      <div className="w-full bg-white py-16 px-8 md:px-10">
        <div className="max-w-6xl mx-auto flex items-center justify-center">
          <div className="text-black/60">게시글을 불러오는 중...</div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="w-full bg-white py-16 px-8 md:px-10">
        <div ref={ref} className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, ease: [0.4, 0.0, 0.2, 1] }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-4">
              <MessageSquare className="w-8 h-8 text-black" />
              <h2 className="font-display text-black font-bold text-4xl md:text-5xl tracking-tight">
                BOARD
              </h2>
            </div>
            <p className="text-black/70 text-lg font-medium">
              개발 경험과 인사이트를 공유하는 공간입니다
            </p>
          </motion.div>

          <div className="space-y-4">
            {posts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: [0.4, 0.0, 0.2, 1] 
                }}
                className="bg-white border border-black/10 hover:border-black/20 transition-all duration-300 cursor-pointer group"
                onClick={() => openModal(post)}
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="font-bold text-xl text-black group-hover:text-black/80 transition-colors mb-2">
                        {post.title}
                      </h3>
                      <p className="text-black/60 text-sm leading-relaxed" 
                        style={{
                          display: '-webkit-box',
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden'
                        }}>
                        {post.content}
                      </p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(post.category)} ml-4 whitespace-nowrap`}>
                      {post.category}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-black/50">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(post.created_at || post.date || '')}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      <span>{post.views}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {isModalOpen && selectedPost && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3 }}
            className="bg-white max-w-4xl w-full max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-8">
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getCategoryColor(selectedPost.category)}`}>
                      {selectedPost.category}
                    </span>
                  </div>
                  <h1 className="font-bold text-3xl text-black mb-4">
                    {selectedPost.title}
                  </h1>
                  <div className="flex items-center gap-6 text-sm text-black/60 mb-6">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>{selectedPost.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{formatDate(selectedPost.created_at || selectedPost.date || '')}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      <span>{selectedPost.views}</span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={closeModal}
                  className="text-black/40 hover:text-black transition-colors text-2xl font-light"
                >
                  ×
                </button>
              </div>
              
              <div className="prose prose-lg max-w-none">
                <div className="text-black/80 leading-relaxed whitespace-pre-wrap">
                  {selectedPost.content}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default Board; 