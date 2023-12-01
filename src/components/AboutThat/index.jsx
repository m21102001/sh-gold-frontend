import brainstorming from "../../assets/brainstorming.webp"
import income from "../../assets/income.webp"
import investor from "../../assets/investor.webp"
import { LazyLoadImage } from "react-lazy-load-image-component";
import "./about.scss"
const AboutThat = () => {
  return (
    <div className="StartElectronicEcommerce my-5 ">
      <div>
        <div className="Container">
          <div className="row align-items-start">
            <div className="col-lg-8 col-md-12 px-5">
              <h2 className="text-light text-end fw-semibold my-3 pt-4 digitalMarkting">من نحن ! </h2>
              <h3 className="text-end text-light">
                أهلاً بك في موقعنا! نحن هنا لمساعدتك في تحقيق نجاحك في عالم الأعمال والتجارة الإلكترونية. نحن نقدم برامج تدريبية فريدة واستشارات مبتكرة لمساعدتك على بناء مهاراتك وتحقيق أهدافك
              </h3>
              <h3 className="text-end text-light">
                نحن نؤمن بقوة العلم والتعلم المستمر، ونضمن لك تجربة تعليمية مثيرة ومفيدة. ستحصل على المعرفة والأدوات العملية التي تحتاجها لتحسين أعمالك وزيادة ربحيتك في عالم التجارة الإلكترونية
              </h3>
            </div>
            <div className="d-flex justify-content-around">
              <div className="card" >
                <LazyLoadImage src={brainstorming} className="card-img-top image-card " alt={"..."} />
                <div className="card-body">
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the content.</p>
                </div>
              </div>
              <div className="card" >
                <LazyLoadImage src={income} className="card-img-top image-card" alt={"..."} />
                <div className="card-body">
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the content.</p>
                </div>
              </div>
              <div className="card" >
                <LazyLoadImage src={investor} className="card-img-top image-card" alt={"..."} />
                <div className="card-body">
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the content.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutThat