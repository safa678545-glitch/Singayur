import { Link } from 'react-router-dom';
import { useFadeUp } from '../hooks/useFadeUp';

interface BlogPost {
  id: string;
  icon: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
}

const BLOG_POSTS: BlogPost[] = [
  {
    id: 'understanding-prakriti',
    icon: '🌿',
    title: 'Understanding Your Prakriti: The Foundation of Ayurvedic Healing',
    excerpt:
      'Discover how your unique constitutional type — Vata, Pitta, or Kapha — shapes your health, personality, and the ideal path to wellness.',
    date: 'Apr 5, 2025',
    readTime: '6 min read',
    category: 'Ayurveda Basics',
  },
  {
    id: 'panchakarma-guide',
    icon: '💆',
    title: 'Panchakarma: A Complete Guide to Ayurvedic Detoxification',
    excerpt:
      'Everything you need to know about the five sacred cleansing therapies — from Abhyanga to Shirodhara — and how they restore balance.',
    date: 'Mar 28, 2025',
    readTime: '8 min read',
    category: 'Therapies',
  },
  {
    id: 'gut-health-ayurveda',
    icon: '🍃',
    title: 'Healing Your Gut Naturally: An Ayurvedic Approach to Digestive Health',
    excerpt:
      'Learn why Ayurveda considers the gut the seat of all disease, and simple dietary shifts that can transform your digestion.',
    date: 'Mar 15, 2025',
    readTime: '5 min read',
    category: 'Digestive Health',
  },
  {
    id: 'pcos-holistic',
    icon: '🌸',
    title: "Managing PCOS Holistically: Beyond Conventional Medicine",
    excerpt:
      'How Ayurvedic herbs, lifestyle changes, and personalised treatment plans offer lasting relief for women with polycystic ovary syndrome.',
    date: 'Mar 2, 2025',
    readTime: '7 min read',
    category: "Women's Health",
  },
  {
    id: 'stress-management',
    icon: '🧘',
    title: 'Ayurvedic Stress Management: Finding Calm in a Modern World',
    excerpt:
      'From adaptogenic herbs to daily routines (dinacharya), explore time-tested Ayurvedic tools for managing stress and anxiety naturally.',
    date: 'Feb 18, 2025',
    readTime: '6 min read',
    category: 'Lifestyle',
  },
  {
    id: 'seasonal-eating',
    icon: '🥗',
    title: 'Eating with the Seasons: The Ayurvedic Ritucharya Guide',
    excerpt:
      'Why aligning your diet with seasonal rhythms is one of the most powerful — and simplest — things you can do for your health.',
    date: 'Feb 5, 2025',
    readTime: '5 min read',
    category: 'Nutrition',
  },
];

const BlogPage: React.FC = () => {
  const headerFade = useFadeUp<HTMLDivElement>();

  return (
    <>
      <div className="page-hero">
        <div className="page-hero-inner">
          <Link to="/" className="back-link" id="blog-back">
            ← Back to Home
          </Link>
          <div className="section-tag">✦ Insights & Wellness</div>
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

        <div className="blog-grid">
          {BLOG_POSTS.map((post, i) => (
            <BlogCard key={post.id} post={post} index={i} />
          ))}
        </div>
      </section>
    </>
  );
};

interface BlogCardProps {
  post: BlogPost;
  index: number;
}

const BlogCard: React.FC<BlogCardProps> = ({ post, index }) => {
  const fade = useFadeUp<HTMLElement>(0.12, `${index * 0.06}s`);

  return (
    <article className="blog-card fade-up" ref={fade.ref} style={fade.style}>
      <div className="blog-card-header">
        <span className="blog-card-icon">{post.icon}</span>
        <span className="blog-card-category">{post.category}</span>
      </div>
      <h3 className="blog-card-title">{post.title}</h3>
      <p className="blog-card-excerpt">{post.excerpt}</p>
      <div className="blog-card-meta">
        <span>{post.date}</span>
        <span className="blog-meta-dot">·</span>
        <span>{post.readTime}</span>
      </div>
    </article>
  );
};

export default BlogPage;
