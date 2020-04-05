import React from 'react';
import AuthComponent from '../util/AuthComponent';
import ProtectedComponent from '../util/ProtectedComponent';
import AccDropLogged from './AccDropLogged';
import AccDropNotLogged from './AccDropNotLogged';


const AccDropDown= () => {
  return (
    <main className="acc-drop-down-main">
      <div>
        <i className="far fa-user-circle acc-drop-btn"></i>
      </div>
      <div>
        <ProtectedComponent component={AccDropLogged}/>
        <AuthComponent component={AccDropNotLogged}/>
      </div>

    </main>
  )
}
export default AccDropDown;