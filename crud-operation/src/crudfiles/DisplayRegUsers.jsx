import React from "react";

const DisplayRegUsers = ({ state }) => {
  return (
    <>

      <div className="regbox">
      <h2 className="regtext"  >Registered Users</h2>


      <ol>
        {state.map((element, index) => {
            return (
                <li key={index}>
              <h3>{element.email}</h3>
              <img  style={{maxHeight:'150px'}}   src={element.profpic} />
            </li>
          );
        })}
      </ol>
        </div>
    </>
  );
};

export default DisplayRegUsers;
