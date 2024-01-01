import { Button, ButtonGroup } from "react-bootstrap"
import { useState, useEffect } from "react"

import axios from "axios"
import { LazyLoadImage } from "react-lazy-load-image-component"
const LastestPacks = () => {

  const [images, setImages] = useState([])
  const [selectedCategory, setSelectedCategory] = useState("all");
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then((res) => {
        setImages(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  })
  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
  };

  const filteredImages =
    selectedCategory === "all"
      ? images
      : images.filter((image) => image.category === selectedCategory);

  return (

    <div className="content">
      <div className="container">
        <div className="head">
          <h1>LATEST PICKS</h1>
          <p>check our latest news project</p>
        </div>
        <div className="header">
          <ButtonGroup>
            <ul>
              <li>
                <Button className='buttonGroup btn-light' active onClick={() => handleCategoryFilter("all")}>All</Button>

              </li>
              <li>
                <Button className='buttonGroup btn-light' onClick={() => handleCategoryFilter("men's clothing")}>
                  Marketing
                </Button>
              </li>
              <li>

                <Button className='buttonGroup btn-light' onClick={() => handleCategoryFilter("jewelery")}>
                  Business
                </Button>



              </li>
              <li>
                <Button className='buttonGroup btn-light' onClick={() => handleCategoryFilter("electronics")}>
                  Development
                </Button>
              </li>
              <li>
                <Button className='buttonGroup btn-light' onClick={() => handleCategoryFilter("women's clothing")}>
                  Art & Design
                </Button>

              </li>
            </ul>
          </ButtonGroup>
        </div>
        <div className="image">
          {filteredImages.map((data) => {
            return (
              <div className="image-data" key={data.id}>
                <LazyLoadImage
                 src={data.image}
                  alt={data?.id} />
              </div>
            );
          })}

        </div>

      </div>
    </div>
  )
}

export default LastestPacks