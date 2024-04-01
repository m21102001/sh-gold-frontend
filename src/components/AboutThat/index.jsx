
import { LazyLoadImage } from "react-lazy-load-image-component";
import "./about.scss"
import { aboutthats } from "@/db/data";
const AboutThat = () => {

  return (
    <div className="StartElectronicEcommerce mt-5" id="about-us">
      <div>
        <div className="Container">
          <div className="row align-items-start">
            <div className="col-lg-8 col-md-12 px-5">
              <h2 className="text-light text-end fw-semibold my-3 pt-4 digitalMarkting">من نحن ! </h2>
              <h4 className="text-end text-light mb-4">
                أهلاً بك في مؤسسة كامبردج تايم! كامبردج تايم مؤسسة متخصصة في تقديم خدمات الاستشارات الفنيـة فـي الاستثمار في قطاع المعـادن
                الثمينة وبيع وشـراء سبائك الذهب وتقديم إرشـادات وتحليلات يوميـة عـن سـوق الذهب
                والفضة، كمـا يقـدم النـادي استشارات فـي عـالم المـال والاستثمار وكـل مـا يخـص مجتمع
                ريادة الاعمال
              </h4>
            </div>
            <div className="d-flex justify-content-around mt-5 card-style">
              {aboutthats?.map((item, index) => (
                <div key={index} className="card mx-3 mb-3 card-border">
                  <LazyLoadImage
                    src={item?.image}
                    className="card-img-top image-card "
                    alt={item.title}
                  />
                  <div className="card-body">
                    <h5 className="card-title text-center">{item?.title}</h5>
                    <p className="card-text text-end fw-light">{item?.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutThat