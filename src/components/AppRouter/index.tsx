import List from "../../pages/List";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

const AppRouter = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/navigator" />}/>
          <Route path="/navigator" element={<List />} />
        </Routes>
      </BrowserRouter>
    );
  };
  
  export default AppRouter;