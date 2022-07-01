import './App.css';
import Menu from './Components/Main/Menu';
import { Outlet, Route, Routes } from 'react-router-dom';
import { CenetredDiv } from './GlobalStyles';
import OptionSelector from './ComponentsLibrary/Input/OptionSelector';
import Input from './ComponentsLibrary/Input/Input';
import TimePickerInput from './ComponentsLibrary/Input/TimePickerInput';
import DatePickerInput from './ComponentsLibrary/Input/DatePickerInput';
import RadioButtons from './ComponentsLibrary/Input/RadioButtons';
import Checkbox from './ComponentsLibrary/Input/Checkbox';
import ButtonPage from './Pages/Buttons/ButtonPage';
import SnackbarPage from './Pages/Feedback/SnackbarPage';
import CollapsePage from './Pages/Utilities/CollapsePage';
import SliderHeaderPage from './Pages/Navigation/SliderHeaderPage';
import StepperPage from './Pages/Navigation/StepperPage';
import ModalPage from './Pages/Navigation/ModalPage';
import ImageTextPage from './Pages/Display/ImageTextPage';
import PricePlansPage from './Pages/Ecommerce/PricePlansPage';




function App() {
  return (
    <Routes>
      <Route path="" element={<ComponentsApp/>}>
        <Route path="input">
          <Route path="option-selector" element={<OptionSelector label={"Option Selector"}></OptionSelector>} />
          <Route path="input" element={<Input label={"Input"}></Input>} />
          <Route path="time-picker" element={<TimePickerInput></TimePickerInput>} />
          <Route path="date-picker" element={<DatePickerInput></DatePickerInput>} />
          <Route path="radio-buttons" element={<RadioButtons></RadioButtons>} />
          <Route path="checkbox" element={<Checkbox></Checkbox>} />
        </Route>
        <Route path="buttons">
          <Route path="button" element={<ButtonPage></ButtonPage>}></Route>
        </Route>
        <Route path="utilities">
          <Route path="collapse" element={<CollapsePage></CollapsePage>}></Route>
        </Route>
        <Route path="feedback">
          <Route path="snackbar" element={<SnackbarPage></SnackbarPage>}></Route>
        </Route>
        <Route path="navigation">
          <Route path="slider-header" element={<SliderHeaderPage></SliderHeaderPage>}></Route>
          <Route path="stepper" element={<StepperPage></StepperPage>}></Route>
          <Route path="modal" element={<ModalPage></ModalPage>}></Route>
        </Route>
        <Route path="display">
          <Route path="image-text" element={<ImageTextPage></ImageTextPage>}></Route>
        </Route>
        <Route path="e-commerce">
          <Route path="price-plans" element={<PricePlansPage></PricePlansPage>}></Route>
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



