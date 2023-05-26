import List from "../../pages/List";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const AppRouter = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/navigator" element={<>Nothing here yet</>} />
        </Routes>
      </BrowserRouter>
    );
  };
  
  export default AppRouter;