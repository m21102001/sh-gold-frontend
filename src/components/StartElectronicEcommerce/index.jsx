
import "./StartElectronicEcommerce.scss"
import book from "../../assets/img/kenzbook.png"
import { useNavigate } from "react-router-dom"
const StartElectronicEcommerce = () => {
  const navigate = useNavigate();
  return (
    <div className="StartElectronicEcommerce my-5 ">
      <div>
        <h2 className="text-light text-center fw-semibold my-3 pt-4">افضل الكتب فى الاستثمار وبيع وشراء الذهب</h2>
        <div className="Container">
          <div className="row align-items-center">
            <div className="col-md-8 col-sm-12 px-5">
              <h2 className="mb-3 text-end text-light">كل ما تحتاجه قبل الاستثمار فى الذهب</h2>
              <h3 className="text-end text-light fs-4">
                تمّ إعداد هذا الكتاب لمُساعدة القارئ على فهم المعدن الثمين (الذهب)، واتّخاذ قرار الاستثمار به. حيثُ تمّ التطرُّق لأنواع الذهب، وعياراته المُختلفة، وأوزانه، وأسعاره، والعوامل المُؤثّرة عليه؛ ليستنّى له دراسة وفهم وضع السوق قبل اتّخاذ قرار الشراء أو البيع. كما تمّ التنويه للسبائك الذهبية وأنواعها، لنضمن إلمام القارئ بكلّ ما يتعلّق بهذا المعدن الأصفر.
              </h3>
            </div>
            <div className="col-md-4 col-sm-12">
              <img src={`${book}`} alt="Kenz book" srcSet="Kenz book" className="kenzbook" />
            </div>
          </div>
        </div>
        <div className="Container">
          <div className="row align-items-center">
            <div className="col-md-4 col-sm-12">
              <img src={book} alt="Kenz book" srcSet="Kenz book" className="kenzbook" />
            </div>
            <div className="col-md-8 col-sm-12 px-5">
              <h2 className="mb-3 text-end text-light">كل ما تحتاجه قبل الاستثمار فى الذهب</h2>
              <h3 className="text-end text-light fs-4">
                وفي نهاية الكتاب، يُقدّم الكاتب نصائح مُختصرة وواضحة للقارئ تُساعده في معرفة أفضل أوقات البيع والاستثمار والتعامل بالذهب. تمّ إعداد هذا الكتاب لمُساعدة القارئ على فهم المعدن الثمين (الذهب)، واتّخاذ قرار الاستثمار به. حيثُ تمّ التطرُّق لأنواع الذهب، وعياراته المُختلفة، وأوزانه، وأسعاره، والعوامل المُؤثّرة عليه؛ ليستنّى له دراسة وفهم وضع السوق قبل اتّخاذ قرار الشراء أو البيع. كما تمّ التنويه للسبائك الذهبية وأنواعها، لنضمن إلمام القارئ بكلّ ما يتعلّق بهذا المعدن الأصفر.
              </h3>
            </div>
          </div>
        </div>
        <button onClick={()=>navigate('/book')} className="d-flex m-auto"> احصل على الباكدج مقابل 350دينار كويتى</button>
      </div>
    </div>
  )
}

export default StartElectronicEcommerce