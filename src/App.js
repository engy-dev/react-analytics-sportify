import "./App.css";
import Header from "./ui/components/Header/Header";
import SideBar from "./ui/components/SideBar/SideBar";
import { Route, Routes } from "react-router-dom";
import Main from "./ui/pages/Main/Main";

function App() {
  return (
    <div className="App">
      <div className={"w-full"}>
        <div className={"w-full h-20"}>
          <Header />
        </div>

        <div className={"w-full flex bg-white"}>
          {/*This left SideBar*/}
          <div>
            <SideBar />
          </div>

          {/*This Main window's that appears all information*/}
          <div
            className={"w-full min-h-screen px-[5px] lg:px-[60px] pt-[28px]"}
          >
            <Routes>
              {/*Here you can add by yourself additional pages like below */}
              <Route path={"/"} element={<Main />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
