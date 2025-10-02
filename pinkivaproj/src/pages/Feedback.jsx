import React, { useState } from 'react';

const Feedback = () => {
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can later connect this to backend API
    console.log('Feedback submitted:', feedback);
    setSubmitted(true);
    setFeedback('');
  };

  return (
    <div className="container mt-5" style={{ maxWidth: '600px' }}>
      <h2 className="mb-4 text-center">We value your feedback!</h2>
      {submitted ? (
        <div className="alert alert-success text-center">
          Thank you for your feedback!
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <textarea
              className="form-control"
              rows="5"
              placeholder="Write your feedback here..."
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-danger">
              Submit Feedback
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Feedback;
