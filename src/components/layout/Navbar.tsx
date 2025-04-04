import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { ModeToggle } from "../mode-toggle";

const Navbar = () => {
  return (
    <nav className="max-w-7xl mx-auto h-16 flex justify-between items-center gap-3 p-4">
      <div className="flex gap-1 items-center">
        <img src={Logo} alt="Logo" className="h-12 w-12" />
        <span className="font-bold">Task</span>Master
      </div>
      <div>
        <Link to="/" className="font-medium">
          Tasks
        </Link>
        <Link to="/users" className="ml-3 font-medium">
          Users
        </Link>
      </div>
      <div>
        <ModeToggle></ModeToggle>
      </div>
    </nav>
  );
};

export default Navbar;
