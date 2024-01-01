import './DigitalMarkting.scss'
import book from "../../assets/img/kenzbook.png"
const DigitalMarkting = () => {
  return (
    <div className="StartElectronicEcommerce my-5 ">
      <div>
        <div className="Container">
          <div className="row align-items-start">
            <div className="col-md-8 col-sm-12 px-5">
              <h2 className="text-light text-end fw-semibold my-3 pt-4 digitalMarkting">ما هي التجارة الالكترونية؟ </h2>
              <h3 className="text-end text-light">
                ابدأ تجارتك الالكترونية باحتراف نقوم ببناء متجر متكامل لك ومصمم بشكل احترافي ويتناسب مع المنتجات المراد بيعها بالإضافة إلى إضافة عشر منتجات من الأعلى طلباً في السوق المستهدفه
              </h3>
            </div>
            <div className="col-md-4 col-sm-12">
              <LazyLoadImage src={book} alt="Kenz book" srcSet="Kenz book" className="kenzbook" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DigitalMarkting