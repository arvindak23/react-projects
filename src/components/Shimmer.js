const Shimmer = () => {
  return (
    <div className="shimmer-wrapper">
      {/* Filter Buttons Shimmer */}
      <div className="shimmer-filters">
        <div className="shimmer-filter-btn"></div>
        <div className="shimmer-filter-btn"></div>
        <div className="shimmer-filter-btn"></div>
        <div className="shimmer-filter-btn"></div>
        <div className="shimmer-filter-btn"></div>
      </div>
      
      {/* Restaurant Cards Grid Shimmer */}
      <div className="shimmer-container">
        {[...Array(8)].map((_, index) => (
          <div key={index} className="shimmer-card">
            <div className="shimmer-img"></div>
            <div className="shimmer-content">
              <div className="shimmer-line shimmer-title"></div>
              <div className="shimmer-line shimmer-cuisine"></div>
              <div className="shimmer-info">
                <div className="shimmer-line shimmer-rating"></div>
                <div className="shimmer-line shimmer-delivery"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shimmer;