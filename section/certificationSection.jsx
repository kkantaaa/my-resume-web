import certifications from '../data/certification'
import '../section/certificationSection.css'
function CertificationsSection (){
    const myCertificate = certifications

    return (
      <div className='certifications'>
        <div className='topic'>Certifications & Awards</div>
        {myCertificate.map((item,index) => (
          <div className='certification' key={index}>
            <div className='time'>{item.time}</div>
            <div className='description'>{item.description}</div>
          </div>
        ))}
      </div>
    )
}
export default CertificationsSection;