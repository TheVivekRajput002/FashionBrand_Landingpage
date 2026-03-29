import RevealWrapper from './RevealWrapper'
import ThreeDMarquee from './ui/3d-marquee'

export default function CarouselSection() {
  return (
    <section className="carousel-section" aria-labelledby="carousel-heading">
      <RevealWrapper className="carousel-header">
        <div>
          <p className="section-tag">Collections</p>
          <h2 id="carousel-heading">
            Choose What Suits You<br /><em>For Every Occasion</em>
          </h2>
        </div>
        <a href="#" className="btn-ghost">Browse All</a>
      </RevealWrapper>

      <RevealWrapper>
        <div className="carousel-track-wrap mt-8" role="region" aria-label="Collections 3D Marquee" aria-live="off">
          <ThreeDMarquee />
        </div>
      </RevealWrapper>
    </section>
  )
}