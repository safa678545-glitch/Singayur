import { useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { useBlogPosts } from '../hooks/useBlogPosts';
import { useTestimonials } from '../hooks/useTestimonials';
import type { BlogPostInsert, BlogPostUpdate } from '../lib/database.types';

const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD || 'singayur2025';

const AdminPage: React.FC = () => {
  const [authed, setAuthed] = useState(false);
  const [password, setPassword] = useState('');
  const [pwError, setPwError] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setAuthed(true);
      setPwError(false);
    } else {
      setPwError(true);
    }
  };

  if (!authed) {
    return (
      <>
        <div className="page-hero">
          <div className="page-hero-inner">
            <Link to="/" className="back-link">← Back to Home</Link>
            <h1 className="page-hero-title">Admin Panel</h1>
            <p className="page-hero-sub">Enter the admin password to continue.</p>
          </div>
        </div>
        <section className="admin-section">
          <form className="admin-login-form" onSubmit={handleLogin}>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Admin password"
              className="form-input"
              id="admin-password"
            />
            <button type="submit" className="btn-primary" id="admin-login-btn">
              Login →
            </button>
            {pwError && <p className="form-error">⚠ Incorrect password.</p>}
          </form>
        </section>
      </>
    );
  }

  return (
    <>
      <div className="page-hero">
        <div className="page-hero-inner">
          <Link to="/" className="back-link">← Back to Home</Link>
          <h1 className="page-hero-title">Admin Panel</h1>
          <p className="page-hero-sub">Manage blog posts and testimonials.</p>
        </div>
      </div>
      <section className="admin-section">
        <AdminTabs />
      </section>
    </>
  );
};

/* ── Tab Switcher ── */
const AdminTabs: React.FC = () => {
  const [tab, setTab] = useState<'blog' | 'testimonials'>('blog');

  return (
    <>
      <div className="admin-tabs" id="admin-tabs">
        <button
          className={`admin-tab${tab === 'blog' ? ' active' : ''}`}
          onClick={() => setTab('blog')}
        >
          📝 Blog Posts
        </button>
        <button
          className={`admin-tab${tab === 'testimonials' ? ' active' : ''}`}
          onClick={() => setTab('testimonials')}
        >
          💬 Testimonials
        </button>
      </div>

      {tab === 'blog' ? <BlogAdmin /> : <TestimonialsAdmin />}
    </>
  );
};

/* ══════════════════════════════
   BLOG ADMIN
   ══════════════════════════════ */
const BlogAdmin: React.FC = () => {
  const { posts, loading, refetch } = useBlogPosts();
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);

  // Form state
  const [title, setTitle] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [content, setContent] = useState('');
  const [icon, setIcon] = useState('🌿');
  const [category, setCategory] = useState('');
  const [readTime, setReadTime] = useState('5 min read');
  const [saving, setSaving] = useState(false);

  const resetForm = () => {
    setTitle(''); setExcerpt(''); setContent(''); setIcon('🌿');
    setCategory(''); setReadTime('5 min read');
    setEditingId(null); setShowForm(false);
  };

  const handleEdit = (postId: string) => {
    const post = posts.find((p) => p.id === postId);
    if (!post) return;
    setTitle(post.title);
    setExcerpt(post.excerpt);
    setContent(post.content);
    setIcon(post.icon);
    setCategory(post.category);
    setReadTime(post.read_time);
    setEditingId(postId);
    setShowForm(true);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    if (editingId) {
      const updates: BlogPostUpdate = { title, excerpt, content, icon, category, read_time: readTime };
      await supabase.from('blog_posts').update(updates).eq('id', editingId);
    } else {
      const newPost: BlogPostInsert = { title, excerpt, content, icon, category, read_time: readTime };
      await supabase.from('blog_posts').insert(newPost);
    }

    setSaving(false);
    resetForm();
    refetch();
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Delete this blog post?')) return;
    await supabase.from('blog_posts').delete().eq('id', id);
    refetch();
  };

  return (
    <div className="admin-panel">
      <div className="admin-panel-header">
        <h3>Blog Posts ({posts.length})</h3>
        <button className="btn-primary btn-sm" onClick={() => { resetForm(); setShowForm(true); }}>
          + New Post
        </button>
      </div>

      {showForm && (
        <form className="admin-form" onSubmit={handleSave}>
          <h4>{editingId ? 'Edit Post' : 'New Post'}</h4>
          <div className="form-row">
            <div className="form-group" style={{ flex: 1 }}>
              <label>Title *</label>
              <input value={title} onChange={(e) => setTitle(e.target.value)} required className="form-input" />
            </div>
            <div className="form-group" style={{ width: 80 }}>
              <label>Icon</label>
              <input value={icon} onChange={(e) => setIcon(e.target.value)} className="form-input" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group" style={{ flex: 1 }}>
              <label>Category</label>
              <input value={category} onChange={(e) => setCategory(e.target.value)} className="form-input" placeholder="e.g. Ayurveda Basics" />
            </div>
            <div className="form-group" style={{ width: 140 }}>
              <label>Read Time</label>
              <input value={readTime} onChange={(e) => setReadTime(e.target.value)} className="form-input" />
            </div>
          </div>
          <div className="form-group">
            <label>Excerpt *</label>
            <textarea value={excerpt} onChange={(e) => setExcerpt(e.target.value)} required rows={2} className="form-input" />
          </div>
          <div className="form-group">
            <label>Content</label>
            <textarea value={content} onChange={(e) => setContent(e.target.value)} rows={6} className="form-input" placeholder="Full article content (optional)..." />
          </div>
          <div className="admin-form-actions">
            <button type="submit" className="btn-primary btn-sm" disabled={saving}>
              {saving ? 'Saving...' : editingId ? 'Update Post' : 'Create Post'}
            </button>
            <button type="button" className="btn-outline btn-sm" onClick={resetForm}>Cancel</button>
          </div>
        </form>
      )}

      {loading ? (
        <div className="admin-loading">Loading blog posts...</div>
      ) : posts.length === 0 ? (
        <div className="admin-empty">No blog posts yet. Create your first one!</div>
      ) : (
        <div className="admin-list">
          {posts.map((post) => (
            <div key={post.id} className="admin-item">
              <div className="admin-item-icon">{post.icon}</div>
              <div className="admin-item-content">
                <div className="admin-item-title">{post.title}</div>
                <div className="admin-item-meta">
                  {post.category} · {post.read_time} · {new Date(post.created_at).toLocaleDateString()}
                </div>
              </div>
              <div className="admin-item-actions">
                <button className="admin-btn edit" onClick={() => handleEdit(post.id)}>Edit</button>
                <button className="admin-btn delete" onClick={() => handleDelete(post.id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

/* ══════════════════════════════
   TESTIMONIALS ADMIN
   ══════════════════════════════ */
const TestimonialsAdmin: React.FC = () => {
  const { testimonials, loading, refetch } = useTestimonials(true); // showAll

  const handleApprove = async (id: string, approved: boolean) => {
    await supabase.from('testimonials').update({ approved }).eq('id', id);
    refetch();
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Delete this testimonial?')) return;
    await supabase.from('testimonials').delete().eq('id', id);
    refetch();
  };

  return (
    <div className="admin-panel">
      <div className="admin-panel-header">
        <h3>Testimonials ({testimonials.length})</h3>
      </div>

      {loading ? (
        <div className="admin-loading">Loading testimonials...</div>
      ) : testimonials.length === 0 ? (
        <div className="admin-empty">No testimonials yet.</div>
      ) : (
        <div className="admin-list">
          {testimonials.map((t) => (
            <div key={t.id} className={`admin-item${!t.approved ? ' pending' : ''}`}>
              <div className="admin-item-icon" style={{ fontSize: '0.85rem' }}>
                {'★'.repeat(t.stars)}
              </div>
              <div className="admin-item-content">
                <div className="admin-item-title">
                  {t.name}
                  {t.location && <span className="admin-item-location"> · {t.location}</span>}
                  {!t.approved && <span className="admin-badge-pending">Pending</span>}
                  {t.approved && <span className="admin-badge-approved">Approved</span>}
                </div>
                <div className="admin-item-quote">"{t.quote}"</div>
                <div className="admin-item-meta">
                  {new Date(t.created_at).toLocaleDateString()}
                </div>
              </div>
              <div className="admin-item-actions">
                {!t.approved ? (
                  <button className="admin-btn approve" onClick={() => handleApprove(t.id, true)}>
                    ✓ Approve
                  </button>
                ) : (
                  <button className="admin-btn unapprove" onClick={() => handleApprove(t.id, false)}>
                    Unapprove
                  </button>
                )}
                <button className="admin-btn delete" onClick={() => handleDelete(t.id)}>
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminPage;
