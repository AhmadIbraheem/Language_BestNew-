import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import HomeMain from './Components/Home/HomeMain/HomeMain';
import Levels from './Components/Levels/Levels';
import Form from './Components/Form/Form';
import QuestionAudio from './Components/Questions/QuestionAudio/QuestionAudio';
import QuestionImage from './Components/Questions/QuestionImage/QuestionImage';
import QuestionText from './Components/Questions/QuestionText/QuestionText';
import Profile from './Components/Profile/Profile'
import Result from './Components/Result/Result';
import { useEffect, useState } from 'react';
import firebase from './service/firebase';
import LoginGo from './Components/Login/LoginGo';
import LevelsRFC from './Components/Levels/LevelsRFC';

import useGlobaleSatte from './Store/useGlobaleState';
import Context from './Store/Context';
import useGlobalState from './Store/useGlobaleState';
import List from './Store/list';
import Form1 from './Store/form1'
import Login from './Components/Login/Login';
import NavigationBar from './Components/NavigationBar/NavigationBar';
import ProfileNew from './Components/Profile/ProfileNew';
import Qqqq from './Components/Questions/QuestionAudio/Qqqq';
function App() {

  const store = useGlobalState();

  // const [user, setUser] = useState(null);

  // useEffect(() => {
  //   firebase.auth().onAuthStateChanged(user => {
  //     setUser(user);
  //   })
  // }, [])
  // console.log(user);
  return (

    <Context.Provider value={store}>
      <div className="App">
        {/* <List /> */}
        {/* <List />
        <Form1 /> */}
        {/* <LoginGo /> */}
        {/* <ProfileNew/> */}


        {/* <Qqqq /> */}



        <Router>
          <NavigationBar />
          <Route path="/" exact component={HomeMain} />
          <Route path="/list" component={List} />
          <Route to="/form1" component={Form1} />
          <Route path="/levels" component={Levels} />
          <Route path="/levelsrfc" component={LevelsRFC} />
          <Route path="/login" component={Login} />
          <Route path="/form" component={Form} handler={Form} />
          <Route path="/questionAudio" component={QuestionAudio} />
          <Route path="/questionImage" component={QuestionImage} />
          <Route path="/questionText" component={QuestionText} />
          <Route path="/profile" component={Profile} />
          <Route path="/result" component={Result} />
        </Router>

      </div>
    </Context.Provider>
  );
}

export default App;
