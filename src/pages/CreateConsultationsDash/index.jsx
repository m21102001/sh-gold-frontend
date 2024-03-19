import { useState } from "react"
import { Link, useNavigate } from 'react-router-dom';
import { SidebarDashboard } from "@/layout"
import axios from "@/api/axios"
import { MdOutlineArrowBack } from "react-icons/md";

const CreateConsultationsDash = () => {
  const navigate = useNavigate();
  const [isPending, setIsPending] = useState(false)
  const [title, setTitle] = useState('')
  const [period, setPeriod] = useState('')
  const [price, setPrice] = useState('')
  const [startDate, setStartDate] = useState('')
  const [day, setDay] = useState('');


  const getInitialState = () => {
    const selectType = "online";
    return selectType;
  };
  const [type, setType] = useState(getInitialState);
  const handleChangeType = (e) => {
    setType(e.target.value);
  };

  const hanelSubmit = async (e) => {
    e.preventDefault();
    setIsPending(true);
    try {
      await axios
        .post(
          `/consultation/tickets/create`,
          {
            title: title,
            duration: period,
            startDate: startDate,
            price: price,
            day: day,
            type: type
          },
          {
            headers: {
              'Content-Type': 'application/json'
            },
          }
        )
        .then((response) => {
          // console.log('created success', response);
          alert("Ticket created successfully")
          setTitle('')
          setPeriod('')
          setStartDate('')
          setPrice('')
          setDay('')
          setType('')
        });
      setIsPending(false);
    } catch (err) {
      setIsPending(false);
      // console.log('response', err.response);
      // console.log('message', err.message);
    }
  };

  return (
    <div className="dashboard d-flex flex-row">
      <SidebarDashboard />
      <div className="container text-center">
        <div className="shadow-none p-3 mt-3 mb-5 bg-body rounded main-title">
          <h2 className='fs-1 fw-bold'>اضافة تذكرة جديدة</h2>
        </div>
        <Link to={'/dash/consultations'} className='mb-3 d-flex flex-row-reverse'>
          <button type="butto" className="fw-bold fs-5 back-details-button"
          ><MdOutlineArrowBack size={30} /></button>
        </Link>
        <form
          onSubmit={hanelSubmit}
          className="container d-flex flex-row justify-content-center align-content-center flex-wrap my-4"
        >
          <div className="label-form">ادخل  عنوان التذكرة</div>
          <input
            type="text"
            name="title"
            className="form-control  mb-4"
            id="title"
            required
            placeholder="ادخل  عنوان التذكرة*"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <div className="label-form">ادخل سعر التذكرة</div>
          <input
            type="number"
            name="title"
            className="form-control  mb-4"
            id="title"
            required
            placeholder="ادخل  سعر التذكرة*"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />

          <div className="label-form">ادخل مدة التذكرة (بالدقايق)</div>
          <input
            type="number"
            name="title"
            className="form-control  mb-4"
            id="title"
            required
            placeholder="ادخل وقت التذكرة   *"
            value={period}
            onChange={(e) => setPeriod(e.target.value)}
          />

          <div className="label-form">تحديد نوع التذكرة   *</div>
          <select
            className="form-select mb-4"
            aria-label="Default select example"
            value={type}
            onChange={handleChangeType}
          >
            <option selected value="online">هاتفية</option>
            <option value="offline">حضورية</option>
          </select>

          <div className="label-form">حدد معاد بداية الحجز</div>
          <input
            type="time"
            name="title"
            className="form-control  mb-4"
            id="title"
            required
            placeholder="حدد الوقت  *"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />

          <div className="label-form">تحديد اليوم   *</div>
          <input
            type="date"
            name="title"
            className="form-control  mb-4"
            id="title"
            required
            placeholder="حدد الوقت والتاريخ *"
            value={day}
            onChange={(e) => setDay(e.target.value)}
          />
          {!isPending && (
            <button className="d-grid col-3 py-3 fs-4 fw-bold align-content-center mx-auto btn btn-primary  mb-4">
              اضافة تذكرة جديد
            </button>
          )}
          {isPending && (
            <button className="d-grid col-3 py-3 fs-4 fw-bold align-content-center mx-auto btn btn-outline-primary mb-4">
              جاري الاضافة ...
            </button>
          )}
          <button onClick={() => navigate(`/dash/consultations`)} className="d-grid col-3 py-3 fs-4 fw-bold align-content-center mx-auto btn btn-danger mb-4">
            cancel
          </button>
        </form>
      </div>
    </div>
  )
}

export default CreateConsultationsDash