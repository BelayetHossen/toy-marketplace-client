import { Outlet } from "react-router-dom";
import Header from "./Header";

const App = () => {
  return (
    <div className="bg-slate-800 text-slate-200">
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default App;
