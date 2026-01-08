import React from 'react';
import './FindUs.css';
import { images } from '../../constants';
import { SubHeading} from '../../components';

const FindUs = () => (
    <div className="app__bg app__wrapper section__padding" id="contact">
        <div className="app__wrapper_info">
            <SubHeading title="Contact"/>
            <h1 className="headtext__cormorant" style={{marginBottom: '3rem'}}>Find Us</h1>
            <div className="app__wrapper-contant">
                <p className="p__opensans">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quo, blanditiis enim aperiam voluptates culpa quos quod quibusdam nam inventore, quam facere atque illo quis, et eligendi qui autem. Alias!</p> 
                <p className="p__cormorant" style={{ color: '#DCA87', margin: '2rem 0'}}>Opening Hours</p>
                <p className="p__opensans">Mon - Fri: 10:00 am - 02:00 am</p>
                <p className="p__opensans">Sat - Sun: 10:00 am - 03:00 am</p>
            </div>
            <button className="custom__button">Visit Us</button>
        </div>
        <div className="app__wrapper_img">
            <img src={images.findus} alt="findus"/>
        </div>
    </div>
);

export default FindUs;