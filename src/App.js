import './App.css';
import Menu from './Components/Main/Menu';
import { Outlet, Route, Routes } from 'react-router-dom';
import { CenetredDiv } from './GlobalStyles';
import OptionSelector from './ComponentsLibrary/Input/OptionSelector';
import Input from './ComponentsLibrary/Input/Input';
import TimePickerInput from './ComponentsLibrary/Input/TimePickerInput';
import DatePickerInput from './ComponentsLibrary/Input/DatePickerInput';




function App() {
  return (
    <Routes>
      <Route path="" element={<ComponentsApp/>}>
        <Route path="input">
          <Route path="option-selector" element={<OptionSelector label={"Option Selector"}></OptionSelector>} />
          <Route path="input" element={<Input label={"Input"}></Input>} />
          <Route path="time-picker" element={<TimePickerInput></TimePickerInput>} />
          <Route path="date-picker" element={<DatePickerInput></DatePickerInput>} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;


const ComponentsApp = () => {
  return(
    <div style={{display:"flex", height:"100vh"}}>
    <Menu></Menu>
    <CenetredDiv>
      <Outlet></Outlet>
    </CenetredDiv>
    </div>
  )
}



