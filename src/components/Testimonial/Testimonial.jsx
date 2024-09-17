import React, { useState } from "react";
import "./Testimonial.css";
import images from "../../assets/images";

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Array of all reviews
  const reviews = [
    {
      img: images.user1,
      name: "Emily Williams",
      location: "Edusity, USA",
      text: "Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.",
    },
    {
      img: images.user2,
      name: "William Jackson",
      location: "Edusity, USA",
      text: "The facilities at Edusity are incredible, and the faculty is highly supportive. My experience here has been transformative.",
    },
    {
      img: images.user3,
      name: "Sophia Brown",
      location: "Edusity, Canada",
      text: "The best decision I made was joining Edusity. The opportunities I've had here are unmatched, and the support is wonderful.",
    },
    {
      img: images.user4,
      name: "James Smith",
      location: "Edusity, UK",
      text: "Edusity provided me with an amazing learning environment and all the resources I needed to excel.",
    },
  ];

  // Calculate the maximum index based on the number of reviews displayed at once (e.g., 2)
  const reviewsPerPage = 2;
  const maxIndex = reviews.length - reviewsPerPage;

  // Go to next reviews
  const handleNext = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + reviewsPerPage);
    }
  };

  // Go to previous reviews
  const handleBack = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - reviewsPerPage);
    }
  };

  return (
    <div className="testimonial-wrapper">
      {/* Back Button */}
      <img
        src={images.backIcon}
        className={`back-btn ${currentIndex === 0 ? "disabled" : ""}`}
        alt="Back"
        onClick={handleBack}
      />

      {/* Reviews Carousel */}
      <div className="testimonial-container">
        <div
          className="reviews-carousel"
          style={{
            transform: `translateX(-${currentIndex * (400 + 20)}px)`, // Move by 420px (400px width + 20px gap)
          }}
        >
          {reviews.map((review, index) => (
            <div key={index} className="review-card">
              <div className="review-header">
                <img src={review.img} alt={review.name} />
                <div className="reviewer-info">
                  <h4>{review.name}</h4>
                  <p>{review.location}</p>
                </div>
              </div>
              <p className="review-text">{review.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Next Button */}
      <img
        src={images.nextIcon}
        className={`next-btn ${currentIndex >= maxIndex ? "disabled" : ""}`}
        alt="Next"
        onClick={handleNext}
      />
    </div>
  );
};

export default Testimonial;
