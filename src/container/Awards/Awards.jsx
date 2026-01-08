import React from 'react';
import './Awards.css';
import { images, data } from '../../constants';
import { SubHeading} from '../../components';

const AwardCard = ({award: {imgUrl, title, subtitle}}) => (
    <div className="app__awards_award-card">
        <img src={imgUrl} alt="award"/>
        <div className="app__awards_award-card_content">
            <p className="p__cormorant" style={{color: '#DCCA87'}}>{title}</p>
            <p className="p__cormorant" >{subtitle}</p>
        </div>
    </div>
)

const Awards = () => (
    <div className="app__bg app__wrapper section___padding" id="awards">
        <div className="app__wrapper_info">
            <SubHeading title="Awards & Recognition"/>
            <h1 className="headtext__cormorant">Our Laurels</h1>
            <div className="app__awards">
                {data.awards.map((award) => <AwardCard award={award} key={award.title} />)}
            </div>
        </div>
        <div className="app__wrapper_img">
            <img src={images.awards} alt="awards img"/>
        </div>
    </div>
);

export default Awards;