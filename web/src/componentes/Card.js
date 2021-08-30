import React from 'react'

const Card = () => {
  return (
    <div>
      <div class="card" style={{ width: 300, height: 300 }}>
        <div class="card-image">
          <figure class="image is-4by3">
            <img src="https://starsgab.com/wp-content/uploads/2020/11/14719721_316429742064926_6542378825634807808_n.jpg"  alt="Placeholder image" />
          </figure>
        </div>
        <div class="card-content">
          <p class="title">
            titulo
    </p>
          <p class="subtitle">
            descripcion
    </p>
        </div>
      </div>
    </div>
  )
}

export default Card
