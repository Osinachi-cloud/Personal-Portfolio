import React from 'react';
import './Skill.css'

import { Proficient, Familiar } from './SkillData'
const Skill = () => {
  return (
    <div className="skill" id="Skill">
    <section className='my-28  px-5'>
      <header className='text-2xl font-bold pt-10 mb-5'>
        
        <div className="divider__topic">
            <span className="about"> My Skills</span>
        </div>
        <div className="div"></div>
    
        {/* <br/> */}




      </header>
      {Proficient?.length > 0 &&
        <div className='pl-3'>
          {/* <h2 className='text-xl'> Proficient </h2> */}
          <div className='my-7 grid gap-5 grid-cols-3 md:grid-cols-6 content-center'>
            {Proficient.map((x, index) =>
              <div className='flex flex-col items-center' tabIndex='0' role='img' aria-label={x.skill} key={index}>
                <img src={x.logo} alt={x.skill} loading='lazy' className='w-16 mb-1 imgbx'  width='64px' height='64px' />
                <p style={{fontSize: '12px', textAlign: 'center', color:'white', marginTop:'10px', marginLeft:'-35px'}}>{x.skill}</p>
                
              </div>

            )}


          </div>
        </div>
      }
      {Familiar?.length > 0 &&
        <div className='pl-3'>
          {/* <h2 className='text-xl'> Familiar </h2> */}
        <div className='my-7 grid gap-5 grid-cols-3 md:grid-cols-6 content-center'>
          {Familiar.map((x, index) =>
            <div className='flex flex-col items-center' tabIndex='0' role='img' aria-label={x.skill} key={index}>
              <img src={x.logo} alt='' loading='lazy' className='w-16 mb-1' width='64px' height='64px' />
              {x.skill}
            </div>
          )}


        </div>

        </div>
      }
      
      {/* </div> */}
      </section>
    </div>
  );
};

export default Skill;