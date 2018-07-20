import React from 'react';
import './Person.css';

const Person = ({ name, age, children, click, changed }) => {
      
      return (
            <div className="Person">
                  <p onClick={click}>
                        I'm {name} and I'm {age} years old {children}
                  </p>
                  <input onChange={changed} type="text" value={name} />
            </div>
      );
};

export default Person;
