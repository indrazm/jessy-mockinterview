import { Routes, Route } from "react-router-dom";
import { Dashboard } from "./pages/dashboard";
import { Profile } from "./pages/profile";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}
