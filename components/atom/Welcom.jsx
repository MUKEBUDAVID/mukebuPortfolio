import React from 'react'

function Welcom() {
  return (
    <div className="welcom">
        <div className="presentation">
          <div className="portfolio">Welcome to my Portfolio</div>

          <h1 aria-label="Hi! I'm David Mukebu" className="name">
            Hi! I'm David Mukebu
            <span className="data-change"> web Developper</span>
          </h1>

          <p className="paragraph">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book
          </p>

          <button className="Connect">
            <p>Let's Connect</p>
            <img src="/arrow.svg" alt="fleche" />
          </button>
        </div>

        <img src="/header-img.svg" alt="svg" className="header-img" />
      </div>
  )
}

export default Welcom