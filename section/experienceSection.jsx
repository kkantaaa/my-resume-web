import experiences from "../data/experience";
import expphoto from '../photo/expphoto.png';
import '../section/experienceSection.css';

function ExperienceSection () {
    const myExperiences = experiences;

    return(
        <div className='experiences'>
            <div className='topic'>Experiences</div>
            <div className='box'>
                <img src={expphoto}/>
                <div className='expBox'>
                {myExperiences.map((item,index) => (
                <div className='experience' key={index}>
                    <div className='aboutCompany'>
                        <div className='period'>
                            <div className='year'>{item.year}</div>
                            <div className='months'>{item.period}</div>
                            
                        </div>
                        <div className='company'>
                            <div className='companyName'>{item.companyName}</div>
                            <div className='companyDetail'>{item.companyDetail}</div>
                        </div>
                    </div>
                    <div className='myExp'>
                        <div className="position">{item.position}</div>
                        <div className="jobDescription">{item.description}</div>
                    </div>
                </div>
                ))}
                </div>
            </div>
        </div>
    )
}

export default ExperienceSection