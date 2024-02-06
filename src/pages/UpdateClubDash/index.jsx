import { useState } from "react";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { SidebarDashboard } from "@/layout"
import axios from "@/api/axios"
import { MdOutlineArrowBack } from "react-icons/md";

const UpdateClubDash = () => {
  const item = useLocation()?.state?.item
  const navigate = useNavigate();
  const [isPending, setIsPending] = useState(false)
  const [title, setTitle] = useState(item?.title)
  const [message, setMessage] = useState(item?.description)

  const hanelSubmit = async (e) => {
    e.preventDefault();
    setIsPending(true);
    try {
      await axios
        .put(
          `/club/${item?._id}`,
          {
            title: title,
            description: message,
          },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        )
        .then((response) => {
          // console.log('created success', response);
          if (response?.status == 201) {
            setIsPending(false);
            alert('created successfully')
            return navigate('/dash/club')
          }

        });
    } catch (err) {
      setIsPending(false);
      // console.log('response', err.response);
      console.log('message', err);
    }
  };

  return (
    <div className="dashboard d-flex flex-row">
      <SidebarDashboard />
      <div className="container text-center">
        <div className="shadow-none p-3 mt-3 mb-5 bg-body rounded main-title">
          <h2 className='fs-1 fw-bold'> تعديل نصيحة النادى</h2>
        </div>
        <Link to={'/dash/club'} className='mb-3 d-flex flex-row-reverse'>
          <button type="butto" className="fw-bold fs-5 back-details-button"
          ><MdOutlineArrowBack size={30} /></button>
        </Link>
        <form
          onSubmit={hanelSubmit}
          className="container d-flex flex-row justify-content-center align-content-center flex-wrap my-4"
        >
          <div className="label-form">غير ف عنوان الرسالة *</div>
          <textarea
            type="text"
            name="title"
            className="form-control  mb-4"
            id="title"
            required
            placeholder="غير ف عنوان الرسالة*"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <div className="label-form">اكتب وصفا دقيقا للرساله*</div>
          <textarea
            type="text"
            name="message"
            className="form-control  mb-4"
            id="message"
            required
            placeholder="اكتب وصفا دقيقا للرساله*"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          {!isPending && (
            <button className="d-grid col-3 py-3 fs-4 fw-bold align-content-center mx-auto btn btn-primary  mb-4">
              تعديل
            </button>
          )}
          {isPending && (
            <button className="d-grid col-3 py-3 fs-4 fw-bold align-content-center mx-auto btn btn-outline-primary mb-4">
              جاري التعديل ...
            </button>
          )}
          <button onClick={() => navigate('/dash/club')} className="d-grid col-3 py-3 fs-4 fw-bold align-content-center mx-auto btn btn-danger mb-4">
            cancel
          </button>
        </form>
      </div>
    </div>
  )
}

export default UpdateClubDash