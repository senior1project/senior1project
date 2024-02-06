import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <li className="active"><a href=''>Home</a></li>
        <li><a href=''>Contact</a></li>
      </ul>
      <div>
       {1>2 ?  <>
          <button>Login</button>
          <button>Register</button>
        </>
:
        <>
        <button>Cart</button>
        </>}
      </div>
    </div>
  );
}

export default Navbar