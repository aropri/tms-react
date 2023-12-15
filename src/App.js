import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css';
import Login from './screens/Login';
import UserRegister from './screens/UserRegister';
import ClientRegister from './screens/ClientRegister';
import ChangePassword from './screens/ChangePassword';
import TruckRegister from './screens/TruckRegister';
import EmpRegister from './screens/EmpRegister';
import EmpRegister1 from './screens/EmpRegister1';
import Menu from './screens/menu';
import Register from './screens/Register';
import Inventory from './screens/Inventory';
import DeliveryOrder from './screens/DeliveryOrder';
import DeliveryOrder1 from './screens/DeliveryOrder1';
import SubconDo from './screens/SubconDo';
import SubconDo1 from './screens/SubconDo1';
import Reports from './screens/Reports';
import Miscellaneous from './screens/Miscellaneous';
import SpareParts from './screens/SpareParts';
import Expenses from './screens/Expenses';
import EmployeeOT from './screens/EmployeeOT';
import InventoryReport from './screens/InventoryReport';

function App() {
  return (
    <Router>
    <div className="App">
    <div className="auth-inner">
            <Routes>
              <Route exact path="/" element={<Login />} />
              <Route path="/sign-in" element={<Login />} />
              <Route path="/UserRegister" element={<UserRegister />} />
              <Route path="/ClientRegister" element={<ClientRegister />} />
              <Route path="/ChangePassword" element={<ChangePassword/>}/>
              <Route path="/TruckRegister" element={<TruckRegister/>}/>
              <Route path="/EmpRegister" element={<EmpRegister/>}/>
              <Route path="/EmpRegister1" element={<EmpRegister1/>}/>
              <Route path="/Menu" element={<Menu/>}/>
              <Route path="/Expenses" element={<Expenses/>}/>
              <Route path="/EmployeeOT" element={<EmployeeOT/>}/>
              <Route path="/Register" element={<Register/>}/>
              <Route path="/Inventory" element={<Inventory/>}/>
              <Route path="/DeliveryOrder" element={<DeliveryOrder/>}/>
              <Route path="/DeliveryOrder1" element={<DeliveryOrder1/>}/>
              <Route path="/SubconDo" element={<SubconDo/>}/>
              <Route path="/SubconDo1" element={<SubconDo1/>}/>
              <Route path="/Reports" element={<Reports/>}/>
              <Route path="/Miscellaneous" element={<Miscellaneous/>}/>
              <Route path="/SpareParts" element={<SpareParts/>}/>
              <Route path="/InventoryReport" element={<InventoryReport/>}/>
            </Routes>
          </div>
    </div>
    </Router>
  );
}

export default App;
