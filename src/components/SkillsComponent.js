import React from 'react'
import SingleSkill from '../components/SingleSkillComponent';
import { skills } from '../shared';

function Skills() {
    return (
        <div>
            <h2 className='about__heading mb-5' style={{ textAlign: 'start' }}>Skills</h2>

            {skills.map(skill => (
                <div className="skill-category-container">
                    <p className='skills__category'>{skill.category}</p>
                    <div className="skill__group mb-5">
                        {skill.arr.map(s => (
                            <SingleSkill skill={s} />
                        ))}
                    </div>
                </div>
            ))}


        </div>
    )
}

export default Skills
