import RevealWrapper from './RevealWrapper'
import ThreeDMarquee from './ui/3d-marquee'

export default function CarouselSection() {
  return (
    <section className="carousel-section" aria-labelledby="carousel-heading">
      <RevealWrapper className="carousel-header">
        <div>
          <h2 id="carousel-heading">
            Choose What Suits You<br /><em>For Every Occasion</em>
          </h2>
        </div>
        {/* Text-only link instead of ghost button — less visual competition */}
        <a href="#" className="carousel-browse-link">
          Browse All <span aria-hidden="true">→</span>
        </a>
      </RevealWrapper>

      <RevealWrapper>
        <div className="carousel-track-wrap" role="region" aria-label="Collections 3D Marquee" aria-live="off">
          <ThreeDMarquee />
        </div>
      </RevealWrapper>
    </section>
  )
}