import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons';
import UseJumpTopAnimation from '../hooks/UseJumpTopAnimation';

const ScrollUpBtn = () => {
    const { distance } = UseJumpTopAnimation();

    const goToTop = () => {
        window.scrollTo(0, 0);
    }

    return (
        <FontAwesomeIcon icon={faArrowAltCircleUp}
            onClick={() => goToTop()} type='button'
            className={`text-white scrollUpBtn ${distance >= 200 && 'scrollUpBtn-show'}`} />
    );
};

export default ScrollUpBtn;