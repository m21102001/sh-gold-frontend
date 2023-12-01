import "./StartElectronicEcommerce.scss"
import book from "../../assets/img/kenzbook.png"
const StartElectronicEcommerce = () => {
  return (
    <div className="StartElectronicEcommerce my-5 ">
      <div>
        <h2 className="text-light text-center fw-semibold my-3 pt-4">ابدأ تجارتك الالكترونية باحتراف</h2>
        <div className="Container">
          <div className="row align-items-center">
            <div className="col-md-8 col-sm-12 px-5">
              <h3 className="text-end text-light">
                ابدأ تجارتك الالكترونية باحتراف نقوم ببناء متجر متكامل لك ومصمم بشكل احترافي ويتناسب مع المنتجات المراد بيعها بالإضافة إلى إضافة عشر منتجات من الأعلى طلباً في السوق المستهدفه
              </h3>
            </div>
            <div className="col-md-4 col-sm-12">
              <img src={book} alt="Kenz book" srcSet="Kenz book" className="kenzbook" />
            </div>
          </div>
        </div>
        <div className="Container">
          <div className="row align-items-center">
            <div className="col-md-4 col-sm-12">
              <img src={book} alt="Kenz book" srcSet="Kenz book" className="kenzbook" />
            </div>
            <div className="col-md-8 col-sm-12 px-5">
              <h3 className="text-end text-light">
                ابدأ تجارتك الالكترونية باحتراف نقوم ببناء متجر متكامل لك ومصمم بشكل احترافي ويتناسب مع المنتجات المراد بيعها بالإضافة إلى إضافة عشر منتجات من الأعلى طلباً في السوق المستهدفه
              </h3>
            </div>
          </div>
        </div>
        <button className="d-flex m-auto">احصل على الباكدج مقابل 350دينار</button>
      </div>
    </div>
  )
}

export default StartElectronicEcommerce