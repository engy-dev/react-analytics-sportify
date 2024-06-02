import './App.css';
import Header from "./components/Header/Header";
import SideBar from "./components/SideBar/SideBar";
import {Route, Routes} from "react-router-dom";
import Main from "./pages/Main/Main";

function App() {
    return (
        <div className="App">
          <div className={'w-full h-screen overflow-hidden flex flex-col items-center '}>
              <div className={'w-full h-20'}>
                  <Header/>
              </div>

              <div className={'w-full h-[100%] overflow-clip flex items-start bg-white  '}>

                  {/*This left SideBar*/}
                  <div className={'h-full w-28'}>
                      <SideBar/>
                  </div>

                  {/*This Main window's that appears all information*/}
                  <div className={'w-full h-full overflow-y-scroll pl-[60px] pt-[28px] pr-[50px]'}>
                      <Routes>

                          {/*Here you can add by yourself additional pages like below */}

                          <Route path={'/'} element={<Main/>} />

                      </Routes>
                  </div>


              </div>

          </div>
        </div>
    );
}

export default App;
