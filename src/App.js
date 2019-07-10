import React from 'react';
import logo from './logo.svg';
import './App.css';

// ========================= Functional Component Start========================

// ======== One Method ===============
// import MyComponent from './components/Greet'

// function App() {
//   return (
//     <div className="App">
//       <MyComponent />
//     </div>
//   );
// }

// ============================================================================

// ========= 2nd Method ===============
import { Greet } from './components/Greet'

// function App() {
//   return (
//     <div className="App">
//       <Greet />
//     </div>
//   );
// }
// ========================= Functional Component end=========================
// ===========================================================================

// ========================= Class Component Start============================
import Welcome from './components/Welcome'

// ===========================================================================
// ===========================================================================

// ========================= functionaal Component Start with jsx=============

import Hello from './components/Hello'

// ========================= functionaal Component using props ===============

import {Greet_props} from './components/Greet_props'

// ========================= class Component using State ===============

import Message_state from './components/Message_state'

// ========================= class Component using SetState ===============

import Counter from './components/Counter'

// ========================= functional destructuring props and states ===============

import Functional_destructuring_props_and_states from './components/Functional_destructuring_props_and_states'

// ========================= class destructuring props and states ===============

import Class_destructuring_props_and_states from './components/Class_destructuring_props_and_states'

// ========================= Click event function and class===============

import Functionclick from './components/Functionclick'
import ClassClick from './components/ClassClick'

// ========================= click event bind handling class===============
import EventBind from './components/EventBind'


// ========================= method props ===============
import ParentComponent from './components/ParentComponent'

// ========================= conditional Rendering ===============
import UserGreeting from './components/UserGreeting'

// ========================= List Rendering ===============
import NameList from './components/NameList'


// ========================= Style with css ===============
import Stylesheet from './components/Stylesheet'

import Inline from './components/Inline'

import './appStyles.css'

import style from './appStyles.module.css'


// ========================= Basic Form Handling ===============

import Form from './components/Form'

// ========================= Basic Form Handling ===============

import FragmentDemo from './components/FragmentDemo'
import Table from './components/Table'

// ========================= Pure Component ===============

import ParentComp from './components/ParentComp'

// ========================= Refs ===============

import RefsDemo from './components/RefsDemo'

import FocusInput from './components/FocusInput'

// ===================== Fwd Refs ===============
import FRParentInput from './components/FRParentInput'

// ===================== Portal ===============
import PortalDemo from './components/PortalDemo'

// ===================== Error Boundry ===============
import Hero from './components/Hero'
import ErrorBoundary from './components/ErrorBoundary'

// ===================== High Order COmponent ===============
import ClickCounter from './components/ClickCounter'
import HoverCounter from './components/HoverCounter'

// ===================== Props Renderd ===============
import ClickCounterTwo from './components/ClickCounterTwo'
import HoverCounterTwo from './components/HoverCounterTwo'

import User from './components/User'
import CounterPropsRendering from './components/CounterPropsRendering'

// ===================== Context ===============
import ComponentC from './components/ComponentC'

import {UserProvider} from './components/UserContext'

// ===================== Data get through rest Api  ===============
import PostList from './components/PostList'

// ===================== Data post  ===============
import PostForm from './components/PostForm'



// ======================== Main Function=====================================
function App() {

  return (
    <div className="App">
      <Greet />
      <Welcome />
      <Hello />
      <Greet_props name = "Bruce" heroname = "Batman">
        <p> child 1</p>
        <p> child 2</p>

      </Greet_props>
      <Greet_props name = "Clark" heroname = "superman" />
      <Greet_props name = "Diana" heroname = "Wonder Women" />

      <Message_state />
      <Counter />
      <Functional_destructuring_props_and_states name = "Diana" heroname = "Wonder Women" />
      <Class_destructuring_props_and_states name = "Clark" heroname = "superman" />
      <Functionclick />
      <ClassClick />

      <EventBind />

      <ParentComponent />
      <UserGreeting />

      <NameList />

      <Stylesheet primary = {true}/>
      <Inline />

      <h1 className = "error"> Error </h1>
      <h1 className = {style.success}> Success </h1>

      <Form />

      <FragmentDemo />

      <Table />

      <ParentComp />

      <RefsDemo />
      <br />
      <FocusInput />

      <br />
      <FRParentInput />

      <br />
      <PortalDemo />

      <br />
      <ErrorBoundary>
        <Hero HeroName = "BatMan" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero HeroName = "SuperMan" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero HeroName = "Joker" />
      </ErrorBoundary>

      <br />
      <ClickCounter name = "hanzila" />
      <br />
      <HoverCounter />

      <hr />

      <br />
      <CounterPropsRendering>
        {(count, incrementCount) => (
      <ClickCounterTwo count = {count} incrementCount = {incrementCount} /> )} 
      </CounterPropsRendering>
      <CounterPropsRendering>
        {(count, incrementCount) => 
        (<HoverCounterTwo count = {count} incrementCount = {incrementCount} /> )} 
      </CounterPropsRendering>

      <br />
      <User name = {(isLoggedin) => isLoggedin ? 'Hanzila' : 'javeed' }/>

      <br />

      <UserProvider value="Hanzila">
        <ComponentC />
      </UserProvider>
      <br />
      <hr />
      <hr />

      <PostList />

      <br />
      <hr />
      <hr />
      <PostForm />



      


    </div>
  );
}

export default App;
