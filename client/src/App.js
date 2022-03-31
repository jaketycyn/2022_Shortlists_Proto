import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Register, Landing, Error, ProtectedRoute } from "./pages/index.js";
import {
  AddList,
  AllLists,
  Info,
  Profile,
  SharedLayout,
} from "./pages/dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }
        >
          <Route index path="/profile" element={<Profile />} />
          <Route path="/info" element={<Info />} />
          <Route path="/all-lists" element={<AllLists />} />
          <Route path="/add-list" element={<AddList />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
