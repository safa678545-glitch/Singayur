import { useState } from 'react';
import { supabase } from '../lib/supabase';

const TestimonialForm: React.FC = () => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [quote, setQuote] = useState('');
  const [stars, setStars] = useState(5);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    const { error: insertError } = await supabase
      .from('testimonials')
      .insert({
        name: name.trim(),
        location: location.trim(),
        quote: quote.trim(),
        stars,
        approved: false,
      });

    if (insertError) {
      setError(insertError.message);
    } else {
      setSubmitted(true);
      setName('');
      setLocation('');
      setQuote('');
      setStars(5);
    }

    setSubmitting(false);
  };

  if (submitted) {
    return (
      <div className="testi-form-wrap" id="testimonial-form">
        <div className="testi-form-success">
          <span className="testi-form-success-icon">✦</span>
          <h3>Thank You!</h3>
          <p>Your testimonial has been submitted and is awaiting review. We appreciate your feedback!</p>
          <button
            className="btn-primary"
            onClick={() => setSubmitted(false)}
            style={{ marginTop: '1rem' }}
          >
            Submit Another
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="testi-form-wrap" id="testimonial-form">
      <div className="section-header">
        <div className="section-tag">✦ Share Your Experience</div>
        <h2 className="section-title">Leave a Testimonial</h2>
        <p className="section-sub">
          Your story inspires others to begin their healing journey
        </p>
      </div>

      <form className="testi-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="testi-name">Your Name *</label>
            <input
              id="testi-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Sarah T."
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="testi-location">Location</label>
            <input
              id="testi-location"
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="e.g. Singapore"
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="testi-quote">Your Experience *</label>
          <textarea
            id="testi-quote"
            value={quote}
            onChange={(e) => setQuote(e.target.value)}
            placeholder="Tell us about your healing journey with Dr. Ashida..."
            rows={4}
            required
          />
        </div>

        <div className="form-group">
          <label>Rating</label>
          <div className="star-picker" id="star-picker">
            {[1, 2, 3, 4, 5].map((s) => (
              <button
                key={s}
                type="button"
                className={`star-btn${s <= stars ? ' active' : ''}`}
                onClick={() => setStars(s)}
                aria-label={`Rate ${s} stars`}
              >
                ★
              </button>
            ))}
          </div>
        </div>

        {error && <p className="form-error">⚠ {error}</p>}

        <button
          type="submit"
          className="btn-primary"
          disabled={submitting}
          id="testi-submit"
          style={{ alignSelf: 'flex-start' }}
        >
          {submitting ? 'Submitting...' : 'Submit Testimonial →'}
        </button>
      </form>
    </div>
  );
};

export default TestimonialForm;
