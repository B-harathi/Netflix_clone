import React from 'react'
import Text from '../../components/Text/Text'
import { Link } from 'react-router-dom';

import flixlogo from '../../../src/Asserts/netflix.svg'
import profilelogo from '../../../src/Asserts/profile.png'
import childlogo from '../../../src/Asserts/children.png'
import { FaBell, FaSearch, FaEdit, FaSmile, FaDog, FaQuestion } from 'react-icons/fa';
import './NavBar.css'


const NavBar = () => {
  return (
    <>
      <div className="nav_conatiner">
        <div id="left_nav">
          <div className="heronetflix_photo">
            <img src={flixlogo} alt="" />
          </div>
          <div className="search_netflix">
            <div className="menu_bar">
              <a href="#">Home</a>
              <a href="#">TV Shows</a>
              <a href="#">Movies</a>
              <a href="#">New & Popular</a>
              <Link to="/MyList">
              <a href="#">My List</a>
              </Link>
              <a href="#">Browse BY Languages</a>
            </div>
            <div className="search_bar">
              <FaSearch size={"22px"} />
            </div>
          </div>
        </div>
        <div className="right_nav">
          <div className="children_mode">
            <Text content={<p>Children</p>} />
          </div>
          <div className="bell">
            <FaBell />
          </div>
          <div className="profile">
            <img src={profilelogo} alt=""  className='smileemj'/>
          </div>
      
    
      <div className="chil_mode">
        <div className="child_photo">
          <div>
            <img src={childlogo} alt="" />
          </div>
          <div>
            <Text content={<p>Children</p>} />
          </div>
        </div>
        <div className="pencil">
          <FaEdit size={"25px"} /><Text content={<p>Manage Profiles</p>} />
        </div>
        <div className="profil">
          <FaSmile size={"25px"} /><Text content={<p>Transfer Profile</p>} />
        </div>
        <div className="acc">
          <FaDog size={"25px"} /><Text content={<p>Account</p>} />
        </div>
        <div className="quest">
          <FaQuestion size={"25px"} /><Text content={<p>Help Center</p>} />
        </div>
        <hr />
        <Text content={<p className='netsign_out'>Sign out of Netflix</p>} />
      </div>
        </div>
        </div>
    </>
  )
}

export default NavBar
