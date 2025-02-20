import Image from "next/image";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";

// Membuat tampilan Navbar menggunakan tailwind //
const Navbar = () => {
  return (
    <nav className="container m-auto p-4">
      <nav className="flex items-center justify-between">
        <Image src="/andre oval.png" alt="logo" width={100} height={50} />
        {/* Menambahkan text untuk tampilan navbar */}
        <div className="hidden items-center gap-4 md:flex">
          <p className="font-semibold">Home</p>
          <p className="font-semibold">Project</p>
          <p className="font-semibold">About me</p>
          <p className="font-semibold">Testimonials</p>
        </div>
        {/* Menambahkan Button dari shadcn/ui  */}
        <Button className="hidden border-[#002fff91] font-semibold text-[#fFFFFF] md:block">
          Contact Me
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger className="block md:hidden">
            <Menu />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Home</DropdownMenuItem>
            <DropdownMenuItem>Project</DropdownMenuItem>
            <DropdownMenuItem>About me</DropdownMenuItem>
            <DropdownMenuItem>Testimonials</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </nav>
    </nav>
  );
};

export default Navbar;
