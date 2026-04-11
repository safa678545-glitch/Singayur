import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import type { TestimonialRow } from '../lib/database.types';

interface UseTestimonialsResult {
  testimonials: TestimonialRow[];
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

/**
 * Fetches approved testimonials from Supabase.
 * Pass `showAll: true` to fetch all (including unapproved) — for admin use.
 */
export function useTestimonials(showAll: boolean = false): UseTestimonialsResult {
  const [testimonials, setTestimonials] = useState<TestimonialRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchTestimonials = async () => {
    setLoading(true);
    setError(null);

    let query = supabase
      .from('testimonials')
      .select('*')
      .order('created_at', { ascending: false });

    if (!showAll) {
      query = query.eq('approved', true);
    }

    const { data, error: fetchError } = await query;

    if (fetchError) {
      setError(fetchError.message);
      setTestimonials([]);
    } else {
      setTestimonials(data || []);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchTestimonials();
  }, [showAll]);

  return { testimonials, loading, error, refetch: fetchTestimonials };
}
