import React from 'react'
import { BrowserRouter ,Route, Routes} from 'react-router-dom'
import Page1 from '../Pages/Public/Landingpage/Page1';
import Signin from '../Pages/Auth/Signin/Signin';
import x from '../Asserts/netflix.svg';
import y from '../Asserts/netflix.svg';
import Signout from '../Pages/Auth/Signout/Signout';
import Signup from '../Pages/Auth/Signup/Signup';
import SignUp2 from '../Pages/Auth/SignUp2/SignUp2';
import SignUp3 from '../Pages/Auth/SignUp3/SignUp3';
import Planform from '../Pages/Auth/Planform/Planform';
import Payment from '../Pages/Auth/Payment/Payment';
import Creaditoption from '../Pages/Auth/Creditoption/Creaditoption';
import UpiMethod from '../Pages/Auth/UpiMethod/UpiMethod';
import j from '../Asserts/upim.png';
import k from '../Asserts/paytm.png';
import l from '../Asserts/phonepe.png';
import o from '../Asserts/amazonpay.jpg';
import p from '../Asserts/gpay.png';
import q from '../Asserts/other.png';
// import Home from '../Pages/portal/Home/Home'
// import Browse from '../Pages/portal/Home/Browse/Browse'
// import i from '../../../my-app/src/Asserts/netflix_logo_N.png'
import MainHome from '../Pages/portal/MainHome/MainHome'
import MyList from '../Pages/portal/MyList/MyList'
// import WishList from '../components/WishList/WishList'
// import t from '../../../my-app/src/Asserts/'
const AppRoute = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route
        path="/page"
        element={<Page1/>}
        />
    </Routes>
    <Routes>
        <Route
        path='/'
        element={<Signin signin={x} />}
        />
    </Routes>
    <Routes>
        <Route
        path='/signout'
        element={<Signout signout={y}/>}
        />
    </Routes>
    <Routes>
        <Route
        path='/signup'
        element={<Signup/>}/>
    </Routes>
    <Routes>
        <Route
        path='/SignUp2'
        element={<SignUp2/>}/>
    </Routes>
    <Routes>
        <Route
        path='/SignUp3'
        element={<SignUp3/>}/>
    </Routes>
    <Routes>
        <Route
        path='/Planform'
        element={<Planform/>}/>
    </Routes>
    <Routes>
        <Route
        path='/Payment'
        element={<Payment/>}/>
    </Routes>
    <Routes>
        <Route
        path='/Creaditoption'
        element={<Creaditoption />}/>
    </Routes>
    <Routes>
        <Route
        path='/UpiMethod'
        element={<UpiMethod bhim={j} paytm={k} phone={l} amazon={o} google={p} other={q}/>}/>
    </Routes>
    <Routes>
        <Route
        path='/MainHome'
        element={<MainHome/>}/>
    </Routes>
    <Routes>
        <Route
        path='/MyList'
        element={<MyList/>}/>
    </Routes>
    
    
   
    
    </BrowserRouter>
  )
}

export default AppRoute
