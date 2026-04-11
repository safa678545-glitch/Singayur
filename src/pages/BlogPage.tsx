import { Link } from 'react-router-dom';
import { useFadeUp } from '../hooks/useFadeUp';
import { useBlogPosts } from '../hooks/useBlogPosts';
import type { BlogPostRow } from '../lib/database.types';

const BlogPage: React.FC = () => {
  const headerFade = useFadeUp<HTMLDivElement>();
  const { posts, loading, error } = useBlogPosts();

  return (
    <>
      <div className="page-hero">
        <div className="page-hero-inner">
          <Link to="/" className="back-link" id="blog-back">
            ← Back to Home
          </Link>
          <div className="section-tag">✦ Insights &amp; Wellness</div>
          <h1 className="page-hero-title">Blog</h1>
          <p className="page-hero-sub">
            Explore Ayurvedic wisdom, wellness tips, and holistic health insights from Dr. Ashida Hussain.
          </p>
        </div>
      </div>

      <section className="blog-section">
        <div className="section-header fade-up" ref={headerFade.ref} style={headerFade.style}>
          <h2 className="section-title">Latest Articles</h2>
          <p className="section-sub">
            Deep dives into Ayurvedic healing, nutrition, and mindful living
          </p>
        </div>

        {loading ? (
          <div className="skeleton-grid">
            {[1, 2, 3].map((i) => (
              <div key={i} className="skeleton-card">
                <div className="skeleton-line skeleton-icon" />
                <div className="skeleton-line skeleton-title" />
                <div className="skeleton-line skeleton-text" />
                <div className="skeleton-line skeleton-text short" />
              </div>
            ))}
          </div>
        ) : error ? (
          <div className="data-message">
            <p>⚠ Unable to load blog posts. Please check your Supabase connection.</p>
            <p className="data-message-sub">{error}</p>
          </div>
        ) : posts.length === 0 ? (
          <div className="data-message">
            <p>No blog posts yet. Check back soon!</p>
          </div>
        ) : (
          <div className="blog-grid">
            {posts.map((post, i) => (
              <BlogCard key={post.id} post={post} index={i} />
            ))}
          </div>
        )}
      </section>
    </>
  );
};

interface BlogCardProps {
  post: BlogPostRow;
  index: number;
}

const BlogCard: React.FC<BlogCardProps> = ({ post, index }) => {
  const fade = useFadeUp<HTMLElement>(0.12, `${index * 0.06}s`);
  const formattedDate = new Date(post.created_at).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <article className="blog-card fade-up" ref={fade.ref} style={fade.style}>
      <div className="blog-card-header">
        <span className="blog-card-icon">{post.icon}</span>
        <span className="blog-card-category">{post.category}</span>
      </div>
      <h3 className="blog-card-title">{post.title}</h3>
      <p className="blog-card-excerpt">{post.excerpt}</p>
      <div className="blog-card-meta">
        <span>{formattedDate}</span>
        <span className="blog-meta-dot">·</span>
        <span>{post.read_time}</span>
      </div>
    </article>
  );
};

export default BlogPage;
