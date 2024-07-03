import React from 'react';

const Info=()=>{
    return(
        <div className="about__info grid">
            <div className="about__box">
                <i className='bx bx-code-block about__icon'></i>
                <h3 className="about__title">Programming</h3>
                <span className="about__subtitle">since 4 years</span>
            </div>

            <div className="about__box">
                <i className='bx bx-git-branch about__icon'></i>
                <h3 className="about__title">Completed</h3>
                <span className="about__subtitle">10+ Projects</span>
            </div>

            <div className="about__box">
                <i className='bx bxs-user-detail about__icon'></i>
                <h3 className="about__title">Age</h3>
                <span className="about__subtitle">20</span>
            </div>

        </div>
    )
}

export default Info