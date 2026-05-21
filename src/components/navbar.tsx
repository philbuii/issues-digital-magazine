import { Link } from "@tanstack/react-router";

export default function Navbar() {    
    return (
    <div className="sticky top-0 p-0">
      <div className="flex flex-row justify-between px-6 py-4 font-pixel-square backdrop-blur-lg items-center">
        <Link to="/" className="hover:text-lime-500 text-3xl">issues_?!</Link>
        <a href="/login" className="bg-foreground text-background hover:bg-lime-500 px-3 py-2 rounded-md" >Login</a>
      </div>
    </div>
  );
}
