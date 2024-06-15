import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="p-8 border-b border-slate-200 shadow-xl shadow-slate-100  bg-slate-50 flex justify-between">
      <div className="font-bold">Jessy.</div>
      <nav className="flex items-center gap-4 font-medium text-sm tracking-tight">
        <Link to="/">Dashboard</Link>
        <Link to="/profile">Profile</Link>
        <div className="flex gap-2 items-center border rounded-lg px-3 py-2 bg-slate-100 border-slate-300 hover:shadow-lg hover:shadow-slate-300/20 transition cursor-pointer">
          <div>@jessyhanifiah</div>
          <div className="w-6 h-6 bg-indigo-600 text-white rounded-full flex justify-center items-center text-xs">JX</div>
        </div>
      </nav>
    </header>
  );
};
