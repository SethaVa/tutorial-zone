import { Navbar } from "./_components/navbar";
import { Sidebar } from "./_components/sidebar";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <div className="md:pl-56 h-[80px] fixed z-50 inset-y-0 w-full">
        <Navbar />
      </div>
      <div className=" hidden md:flex fixed z-50 inset-y-0 w-56 h-full bg-slate-500">
        <Sidebar />
      </div>
      <main className="md:pl-56 h-full pt-[80px]">{children}</main>
    </div>
  );
};

export default AuthLayout;
