import {hard, soft} from '../data/skills';
import '../section/skillSection.css';
function SkillsSection () {
    const { hard: hardSkills, soft: softSkills } = { hard, soft };

    return(
        <div className='skills'>
        <div className='topic'>Skills</div>
        <div className='softSkills'>
          <div className='subTopic'>Soft Skills</div>
          <div className='softSkillBox'>
          {softSkills.map((item,index) => (
            <div className='softSkill' key={index}>
              <div className='gerne'>{item.genre}</div>
              <div className='description'>{item.description}</div>
            </div>
          ))}
          </div>
        </div>
        <div className='hardSkills'>
          <div className='subTopic'>Hard Skills</div>
          <div className='hardSkillBox'>
          {hardSkills.map((item,index) => (
            <div className='hardSkill' key={index}>
              <div className='gerne'>{item.genre}</div>
              <div className='layerBox'>
              {item.topic.map((topicItem,index) => (
                <div className='layer' key={index}>
                    <li>{topicItem.item}</li>
                </div>
              ))}
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
    )
}
export default SkillsSection;