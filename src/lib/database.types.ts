/* ══════════════════════════════════════
   Supabase Database Type Definitions
   ══════════════════════════════════════ */

export interface Database {
  public: {
    Tables: {
      blog_posts: {
        Row: {
          id: string;
          title: string;
          excerpt: string;
          content: string;
          icon: string;
          category: string;
          read_time: string;
          author: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          title: string;
          excerpt: string;
          content?: string;
          icon?: string;
          category?: string;
          read_time?: string;
          author?: string;
          created_at?: string;
        };
        Update: {
          id?: string;
          title?: string;
          excerpt?: string;
          content?: string;
          icon?: string;
          category?: string;
          read_time?: string;
          author?: string;
          created_at?: string;
        };
      };
      testimonials: {
        Row: {
          id: string;
          name: string;
          location: string;
          quote: string;
          stars: number;
          approved: boolean;
          created_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          location?: string;
          quote: string;
          stars?: number;
          approved?: boolean;
          created_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          location?: string;
          quote?: string;
          stars?: number;
          approved?: boolean;
          created_at?: string;
        };
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
  };
}

/** Convenience aliases */
export type BlogPostRow = Database['public']['Tables']['blog_posts']['Row'];
export type BlogPostInsert = Database['public']['Tables']['blog_posts']['Insert'];
export type BlogPostUpdate = Database['public']['Tables']['blog_posts']['Update'];

export type TestimonialRow = Database['public']['Tables']['testimonials']['Row'];
export type TestimonialInsert = Database['public']['Tables']['testimonials']['Insert'];
export type TestimonialUpdate = Database['public']['Tables']['testimonials']['Update'];
