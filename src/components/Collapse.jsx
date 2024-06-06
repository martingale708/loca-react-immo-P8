
// import React, { useState } from 'react';
// import classNames from 'classnames';
// import chevronUp from "../assets/chevron-up.png";
// import chevronDown from "../assets/chevron-down.png";
// import "../styles/collapse.css";

// const Collapse = ({ title, content }) => {
//     const [isOpen, setIsOpen] = useState(false);
//     const toggleCollapse = () => {
//         setIsOpen(!isOpen);
//     };

//     return (
//         <div className="collapse">
//             <div className="collapse__header" onClick={toggleCollapse}>
//                 <span>{title}</span>
//                 <div className="chevronValue">
//                     <img 
//                         className={classNames("chevron", { "rotate": isOpen })} 
//                         src={isOpen ? chevronDown : chevronUp} 
//                         alt="chevron icon" 
//                     />
//                 </div>
//             </div>
//             <div className={`collapse__content ${isOpen ? 'visible' : 'hidden'}`}>
//                 <p>{content}</p>
//             </div>
//         </div>
//     );
// };

// export default Collapse;
import React, { useState } from 'react';
import classNames from 'classnames';
import chevronUp from "../assets/chevron-up.png";
// import chevronDown from "../assets/chevron-down.png";
import "../styles/collapse.css";

const Collapse = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="collapse">
            <div className="collapse__header" onClick={toggleCollapse}>
                <span>{title}</span>
                <div className="chevronValue">
                    <img 
                        className={classNames("chevron", { "rotate": isOpen })} 
                        src={chevronUp} 
                        alt="chevron icon" 
                    />
                </div>
            </div>
            <div className={`collapse__content ${isOpen ? 'visible' : 'hidden'}`}>
                <p>{content}</p>
            </div>
        </div>
    );
};

export default Collapse;