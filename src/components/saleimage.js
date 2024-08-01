import sale from "../assets/images/sale image.jpg"

//sale image

function Saleimage() {
    return (
      <div class="sale-image">
        <img src={sale} alt="sale-image" />
        <div class="sale-image__offer">
          <h2>Udemy Flash Sale! 24 Hours To Save</h2>
          <p>Get The Top Course For Just 499.Just One Day To Save But a Life To
            Learn</p>
        </div>
      </div>
    )
  }

  export default Saleimage