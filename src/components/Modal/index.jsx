import { useState } from "react";
import { useParams } from "react-router";
import axios from "@/api/axios";
import './modal.scss'

export default function Modal() {
  const [modal, setModal] = useState(false);
  const [isPending, setIsPending] = useState(false)
  const [name, setName] = useState('');
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('');
  const [cover, setCover] = useState('');
  const [description, setDescription] = useState('');
  const [pdf, setPdf] = useState('');

  const { empid } = useParams()

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }
  const handelSubmit = (e) => {
    e.preventDefault();
    setIsPending(true)
    axios.post('/invest/', {
      name: name,
      email: email,
      phone: phone,
      cover: cover,
      description: description,
      pdf: pdf
    })
  }

  return (
    <>
      <button
        onClick={toggleModal}
        data-modal-target="authentication-modal"
        data-modal-toggle="authentication-modal"
        className="block text-white bg-[#155293] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
        type="button"
        style={{
          padding: '10px 20px',
          display: "block",
          margin: 'auto 0',
          fontSize: '18px'
        }}
      >
        تغيير ف البيانات
      </button>

      {modal && (
        <div
          className="modal"
          // style={{ width: '100vw', height: '100%', top: '0', left: '0', right: '0', bottom: '0', position: 'fixed' }}
        >
          <div
            onClick={toggleModal}
            className="overlay"
            // style={{ width: '100vw', height: '100%', top: '0', left: '0', right: '0', bottom: '0', position: 'fixed', background: 'rgba(49,49,49,0.8)' }}
            ></div>
          <div className="modal-content "
            // style={{
            //   position: 'absolute',
            //   top: '40%',
            //   left: '50%',
            //   transform: ' translate(-50%, -50%)',
            //   lineHeight: '1.4',
            //   background: '#f1f1f1',
            //   padding: '14px 28px',
            //   borderRadius: '5px',
            //   maxWidth: '600px',
            //   minWidth: '300px',
            //   textAlign: 'center'
            // }}
          >
            <form onSubmit={handelSubmit}>
              <input
                required
                id="fullName"
                type="text"
                placeholder="الاسم بالكامل"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border border-gray-300 rounded-md p-2 my-2 w-2/4 mx-3"
                // style={{ width: '25rem', maxWidth: '30rem' }}
              />
              <input
                required
                id="email"
                type="email"
                placeholder="ادخل البريد الالكترونى"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="border border-gray-300 rounded-md p-2 my-2 w-2/4 mx-3"
                // style={{ width: '25rem', maxWidth: '30rem' }}
              />
              <input
                required
                id="phone"
                type="number"
                placeholder="اكتب رقم الجوال"
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
                className="border border-gray-300 rounded-md p-2 my-2 w-2/4 mx-3"
                // style={{ width: '25rem', maxWidth: '30rem' }}
              />
              <input
                required
                id="cover"
                type="file"
                placeholder="ارفع غلاف للمشروع"
                onChange={(e) => setCover(e.target.files[0])}
                // value={cover}
                className="border border-gray-300 rounded-md p-2 my-2 w-2/4 mx-3"
                // style={{ width: '25rem', maxWidth: '30rem' }}
              />
              <input
                required
                id="pdf"
                type="file"
                placeholder="ارفع ملف لتفاصيل المشروع"
                onChange={(e) => setPdf(e.target.files[0])}
                // value={}
                className="border border-gray-300 rounded-md p-2 my-2 w-2/4 mx-3"
                // style={{ width: '25rem', maxWidth: '30rem' }}
              />
              <textarea
                required
                id="description"
                type="text"
                placeholder="اكتب وصف مختصر للمشروع"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                className="border border-gray-300 rounded-md p-2 my-2 w-2/4 mx-3"
                // style={{ width: '25rem', maxWidth: '30rem' }}
              />
              {!isPending && <button
                className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                style={{
                  margin: 'auto',
                  marginTop: '1rem',
                  width: '-webkit-fill-available'
                }}
              >اضافه </button>}
              {isPending && <button
                className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                style={{
                  margin: 'auto',
                  marginTop: '1rem',
                  width: '-webkit-fill-available'
                }}
                disabled
              >جاري الاضافه ...</button>}
            </form>
            <button
              onClick={toggleModal}
              data-modal-target="authentication-modal"
              data-modal-toggle="authentication-modal"
              className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              style={{
                margin: 'auto',
                marginTop: '1rem',
                width: '-webkit-fill-available'
              }}
              type="button">
              CLOSE
            </button>
          </div>
        </div>
      )}
    </>
  );
}