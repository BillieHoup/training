function ProductCard({img, hisName,age, description, isBeautiful = false}) {
  return (
    <div>
      <img src={img} alt="diwuc" width={260} />
      <h3>{hisName}</h3>
      <h4>{age} y.o.</h4>
      <p>{description}</p>
      {/* {isBeautiful ? <span>IM IN LOVE 🥰</span> : null} */}
      {isBeautiful && <span>🥰 IM IN LOVE🥰</span>}
      <br /><br />
      <button type="button">Add to card</button>
      <button type="button">Delete</button>
    </div>
  )
}

export default ProductCard    