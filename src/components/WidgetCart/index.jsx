import { AiFillHome, AiOutlineSearch, AiFillHeart } from "react-icons/ai";
const WidgetCart = () => {
  return (
    // <div className="shadow-lg p-3 mb-5 bg-body rounded">
    <div className="">
      <div className="row row-cols-1 my-1 row-cols-lg-5 g-2 g-lg-3">
        <div className="col card mx-3 text-end">
          <div className="p-3 bg-light">
            <h5 className="card-title"> <AiFillHome/> الارباح</h5>
            <p className="card-text">51 </p>
          </div>
        </div>
        <div className="col card mx-3 text-end">
          <div className="p-3 bg-light">
            <h5 className="card-title"> <AiOutlineSearch/> عدد الزيارات </h5>
            <p className="card-text">51 </p>
          </div>
        </div>
        <div className="col card mx-3 text-end">
          <div className="p-3 bg-light">
            <h5 className="card-title"> <AiFillHome/> عمليات البيع</h5>
            <p className="card-text">51 </p>
          </div>
        </div>
        <div className="col card mx-3 text-end">
          <div className="p-3 bg-light">
            <h5 className="card-title"> <AiFillHeart/> عدد المشتركين</h5>
            <p className="card-text">51 </p>
          </div>
        </div>
      </div>
    </div>
    // </div>
  )
}

export default WidgetCart
