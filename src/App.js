import logo from './logo.svg';
import './App.css';
import Greet from './Components/Greet';
import Welcome from './Components/Welcome';
import Hello from './Components/Hello';
import Message from './Components/Message';
import Counter from './Components/Counter';
import FunctionClick from './Components/FunctionClick';
import ClassCLick from './Components/classCLick';
import EventBind from './Components/EventBind';
import ParentComponent from './Components/ParentComponent';
import UserGreeting from './Components/UserGreeting';
import NameList from './Components/NameList';
import Stylesheet from './Components/Stylesheet';
import Inline from './Components/Inline';
import './appStyles.css'
import styles from './appStyles.module.css'
import Form from './Components/Form';
import LifecycleA from './Components/LifecycleA';
import FragmentDemo from './Components/FragmentDemo';
import Table from './Components/Table';
import PureComp from './Components/PureComp';
import ParentComp from './Components/ParentComp';
import RefDemo from './Components/RefDemo';
import FocusInput from './Components/FocusInput';
import ParentFRIref from './Components/ParentFRIref';
import PortalDemo from './Components/PortalDemo';
import Hero from './Components/Hero';
import ErrorBoundary from './ErrorBoundary';
import ClickCounter from './Components/ClickCounter';
import HoverCounter from './Components/HoverCounter';
import ClickCounterTwo from './Components/ClickCounterTwo';
import HoverCounterTwo from './Components/HoverCounterTwo';
import User from './Components/User';
import Render from './Components/Render';
import ComponentC from './Components/ComponentC';
import { UserProvider } from './Components/userContext';






function App() {
  return (
    <div className="App">

          {/* <Render>
                {
                     (count, increamentCount) =>(
                        <ClickCounterTwo count={count} increamentCount={increamentCount} />)  
                }
          </Render>

     

          
        <Render>
          { 
                 (count, increamentCount) =>(
                 <HoverCounterTwo count={count} increamentCount={increamentCount} />)
          }
        </Render> */}

        {/* <UserProvider value={'Allahnana'}> */}
            <ComponentC/>
        {/* </UserProvider> */}

       

        
{/* 
          <ClickCounterTwo/>

          <HoverCounterTwo/>

          <User render = {(isLoggedIn) => isLoggedIn ? 'Allahnana' : 'Guest'}/>
 */}

        
{/* 
      <ClickCounter  name = {'Allahnana'}/>

      <HoverCounter/> */}
      
      {/* <ErrorBoundary>
         <Hero heroName="Superman"/>
      </ErrorBoundary> */}

{/* 
      <ErrorBoundary>
         <Hero heroName="Batman"/>
      </ErrorBoundary> */}

{/* 
      <ErrorBoundary>
         <Hero heroName="Jocker"/> 
      </ErrorBoundary> */}
      

      {/* <PortalDemo/> */}

      {/* <ParentFRIref/> */}

     {/* <FocusInput/> */}
      {/* <RefDemo/> */}

      {/* <ParentComp/> */}
{/* 
      <Table/> */}

      {/* <FragmentDemo/> */}

      {/* <LifecycleA/> */}

      {/* <Form/> */}
      {/* <Stylesheet primary ={false}/>
      <Inline/>

      <h1 className='error'>Error</h1>

      <h1 className={styles.success}>Success</h1> */}


       {/* <NameList/> */}
      {/* <UserGreeting/> */}
     

      {/* <ParentComponent/> */}

      {/* <Counter/> */}

      {/* <FunctionClick/> */}
      {/* <ClassCLick/> */}
      {/* <EventBind/> */}
      {/* <Message/> */}
       {/* <Greet name= "Abdulhadi" lastName= "Usman">
        <p>This is a children props</p>
        </Greet>
      <Greet name= "Ahusa" lastName= "Allahnana">
        <button>Read More</button> */}
{/* 
      </Greet>
      <Greet name= "Allahnana" lastName= " Suleiman"/>

      <br/> */}

{/* 
      <Welcome name= "Abdulhadi" lastName= "Usman"/>
      <Welcome name= "Ahusa" lastName= "Allahnana"/>
      <Welcome  name= "Allahnana" lastName= " Suleiman"/>   */}

      {/* <Hello/> */}
    </div>
  );
}

export default App;
