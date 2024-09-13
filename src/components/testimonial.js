import React from 'react'

import PropTypes from 'prop-types'

import './testimonial.css'

const Testimonial = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="testimonial-max-width thq-section-max-width">
        <div className="testimonial-container10">
          <h2 className="thq-heading-2">{props.heading1}</h2>
          <span className="testimonial-text11 thq-body-small">
            {props.content1}
          </span>
        </div>
        <div className="thq-grid-2">
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card1">
                <div className="testimonial-container12">
                  <img
                    alt={props.author1Alt}
                    src={props.author1Src}
                    className="testimonial-image1"
                  />
                  <div className="testimonial-container13">
                    <strong className="thq-body-large">
                      {props.author1Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author1Position}
                    </span>
                  </div>
                </div>
                <span className="thq-body-small">{props.review1}</span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card2">
                <div className="testimonial-container14">
                  <img
                    alt={props.author2Alt}
                    src={props.author2Src}
                    className="testimonial-image2"
                  />
                  <div className="testimonial-container15">
                    <strong className="thq-body-large">
                      {props.author2Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author2Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text17 thq-body-small">
                  {props.review2}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card3">
                <div className="testimonial-container16">
                  <img
                    alt={props.author3Alt}
                    src={props.author3Src}
                    className="testimonial-image3"
                  />
                  <div className="testimonial-container17">
                    <strong className="thq-body-large">
                      {props.author3Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author3Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text20 thq-body-small">
                  {props.review3}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card4">
                <div className="testimonial-container18">
                  <img
                    alt={props.author4Alt}
                    src={props.author4Src}
                    className="testimonial-image4"
                  />
                  <div className="testimonial-container19">
                    <strong className="thq-body-large">
                      {props.author4Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author4Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text23 thq-body-small">
                  {props.review4}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Testimonial.defaultProps = {
  author3Position: 'Pet Lover',
  author1Position: 'Dog Owner',
  review2:
    'Great experience with the adoption process here. The staff was helpful and made sure I found the right match for my family.',
  review4:
    "I have used the babysitting service multiple times and have always been satisfied. It's great to have a reliable place to leave my pets when needed.",
  author3Alt: 'Emily with her pets',
  author2Alt: "Michael's cat",
  author1Alt: "Jessica's dog",
  author2Position: 'Cat Owner',
  author4Alt: 'David with his pets',
  review1:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.',
  author4Src:
    'https://images.unsplash.com/photo-1499229694635-fc626e0d9c01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNjIzMDMxN3w&ixlib=rb-4.0.3&q=80&w=1080',
  author3Name: 'Emily Davis',
  author4Position: 'Animal Enthusiast',
  author2Name: 'Michael Johnson',
  author3Src:
    'https://images.unsplash.com/photo-1615433886063-57c17bbfb989?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNjIzMDMxOHw&ixlib=rb-4.0.3&q=80&w=1080',
  author1Name: 'Jessica Smith',
  author1Src:
    'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNjIzMDMxN3w&ixlib=rb-4.0.3&q=80&w=1080',
  content1:
    'I found the perfect pet sitter for my furry friend through this website. The process was easy and my dog was well taken care of. Highly recommend!',
  review3:
    "I love the tips and advice provided on this website. It has helped me become a better pet owner and understand my pets' needs better.",
  author4Name: 'David Brown',
  heading1: 'Testimonials',
  author2Src:
    'https://images.unsplash.com/photo-1533685635527-9132968f1af1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNjIzMDMxN3w&ixlib=rb-4.0.3&q=80&w=1080',
}

Testimonial.propTypes = {
  author3Position: PropTypes.string,
  author1Position: PropTypes.string,
  review2: PropTypes.string,
  review4: PropTypes.string,
  author3Alt: PropTypes.string,
  author2Alt: PropTypes.string,
  author1Alt: PropTypes.string,
  author2Position: PropTypes.string,
  author4Alt: PropTypes.string,
  review1: PropTypes.string,
  author4Src: PropTypes.string,
  author3Name: PropTypes.string,
  author4Position: PropTypes.string,
  author2Name: PropTypes.string,
  author3Src: PropTypes.string,
  author1Name: PropTypes.string,
  author1Src: PropTypes.string,
  content1: PropTypes.string,
  review3: PropTypes.string,
  author4Name: PropTypes.string,
  heading1: PropTypes.string,
  author2Src: PropTypes.string,
}

export default Testimonial
