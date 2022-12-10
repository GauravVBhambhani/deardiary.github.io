import React from 'react'
import "./Dashboard.css";
import Doc1 from '../images/Rectangle 3.png';
// import Doc2 from '../images/Rectangle 4.png';
import { useNavigate } from 'react-router-dom'
import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/fontawesome-free-solid';
import Navbar from '../layout/Navbar';
import UserAccount from '../userAccount/UserAccount';
// import Footer from '../footer/Footer';
import { v4 as uuidv4 } from 'uuid';
// import Dashboard from './Dashboard';


function Dashboard() {

  const navigate = useNavigate();

  // const current = new Date();
  // const dt = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

  const d4 = uuidv4();
  const handleAdd = (event) => {
      navigate(`/NewDoc/${d4}`);
  };

    return (
    <div className='HomePage'>
      <Navbar />
      {/* <UserAccount /> */}
      <div className="documents">
      <img className="img1" alt="diary1" src={Doc1} onClick={event => handleAdd(event)}/>
      <FontAwesomeIcon className="add" icon={faPencilAlt} transform="grow-60"/>
      {/* <i class="fa-solid fa-plus"></i> */}
      </div>
    </div>
  );
}

export default Dashboard;

/*const list = [document id1, document id2];

  const handleAdd = (doc id) => {
    navigate(`/NewDoc/doc id`);
  };

    return (
    <div className='HomePage'>
      <div className='deardiaryimg'>
        <img className="deardiaryimg" src={DearDiary}/>
      </div>

      <div className="documents">
      <img className="img-add" src={Doc1} onClick={handleAdd doc id}/>
      <FontAwesomeIcon className="add" icon={faPlus} transform="grow-60"/>
      {/* <i class="fa-solid fa-plus"></i> */
