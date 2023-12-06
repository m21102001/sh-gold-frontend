import brainstorming from "../../assets/brainstorming.webp"
import income from "../../assets/income.webp"
import investor from "../../assets/investor.webp"
import { LazyLoadImage } from "react-lazy-load-image-component";
import "./about.scss"
const AboutThat = () => {
  const card = [
    {
      id: 1,
      image: brainstorming,
      body: "نحن نؤمن بقوة العلم والتعلم المستمر، ونضمن لك تجربة تعليمية مثيرة ومفيدة. ستحصل على المعرفة والأدوات العملية التي  الإلكترونية",
    },
    {
      id: 2,
      image: income,
      body: "نحن نؤمن بقوة العلم والتعلم المستمر، ونضمن لك تجربة تعليمية مثيرة ومفيدة.العملية التي  الإلكترونية",
    },
    {
      id: 1,
      image: investor,
      body: "نحن نؤمن بقوة العلم والتعلم المستمر،  ستحصل على المعرفة والأدوات العملية التي  الإلكترونية",
    },
  ]
  return (
    <div className="StartElectronicEcommerce mt-5 ">
      <div>
        <div className="Container">
          <div className="row align-items-start">
            <div className="col-lg-8 col-md-12 px-5">
              <h2 className="text-light text-end fw-semibold my-3 pt-4 digitalMarkting">من نحن ! </h2>
              <h3 className="text-end text-light mb-4">
                أهلاً بك في موقعنا! نحن هنا لمساعدتك في تحقيق نجاحك في عالم الأعمال والتجارة الإلكترونية. نحن نقدم برامج تدريبية فريدة واستشارات مبتكرة لمساعدتك على بناء مهاراتك وتحقيق أهدافك
              </h3>
              <h3 className="text-end text-light">
                نحن نؤمن بقوة العلم والتعلم المستمر، ونضمن لك تجربة تعليمية مثيرة ومفيدة. ستحصل على المعرفة والأدوات العملية التي تحتاجها لتحسين أعمالك وزيادة ربحيتك في عالم التجارة الإلكترونية
              </h3>
            </div>
            <div className="d-flex justify-content-around mt-5 card-style">
              {card?.map((item, index) => (
                <div key={index} className="card mx-3 mb-3 card-border">
                  <LazyLoadImage src={item?.image} className="card-img-top image-card " />
                  <div className="card-body">
                    <p className="card-text text-end fw-semibold">{item?.body}</p>
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