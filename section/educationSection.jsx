import education from '../data/education'
import educationphoto from '../photo/educationphoto.jpg'
import '../section/educationSection.css'

function EducationSection () {
    const myEducations = education;

    return (
        <div className='educations'>
            <div className='photoHeader'>
                <img src={educationphoto} />
                <div className='shadow'/>
            </div>
            <div className='educationBox'>
                <div className='shadow'/>
                <div className='topic'>Educations</div>
                {myEducations.map((item,index) => (
                <div className='education' key={index}>
                    <div className='year'>{item.year}</div>
                    <div className='description'>{item.description}</div>
                </div>
                ))}
            </div>
        </div>
    )
}
export default EducationSection;