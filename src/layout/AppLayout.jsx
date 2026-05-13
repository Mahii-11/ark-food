import { Outlet } from "react-router";
import  Navbar  from "../components/Navbar";
import ScrollProgressBar from "../components/ScrollProgressBar";


export default function AppLayout() {
  return (
     <div className="min-h-screen font-body text-slate-800 bg-white overflow-x-hidden">

          <ScrollProgressBar />
          <Navbar />
          <main>
            <Outlet />
          </main>
        </div>
  )
}
