import './StartDigitalMarkting.scss'
import book from "../../assets/img/kenzbook.png"
import { LazyLoadImage } from 'react-lazy-load-image-component'
const StartDigitalMarkting = () => {
  return (
    <div className="StartElectronicEcommerce bg-light">
      <div className="Container">
        <div className="row align-items-center">
          <div className="col-lg-4 col-sm-12 m-auto d-flex">
            <LazyLoadImage src={book} alt="Kenz book" className="kenzbook" />
          </div>
          <div className="col-lg-8 col-sm-12 px-5">
          <h2 className="text-dark text-end fw-semibold my-3 pt-4 digitalMarkting">ابدأ التجارة الالكترونية اليوم ولا تضيع الوقت</h2>
            <h3 className="text-end fw-semibold fs-4 nevermind">
            بغض النظر عما إذا كنت مبتدئًا يسعى لاكتساب المهارات الأساسية أو متخصصًا يرغب في تطوير استراتيجياتك المتقدمة، فإن دوراتنا المصممة خصيصًا تلبي احتياجات جميع المستويات. ستحصل على محتوى تعليمي متميز وجلسات تدريبية مفيدة تمكنك من فهم أعمق لعالم الأعمال والتجارة الإلكترونية
            </h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StartDigitalMarkting