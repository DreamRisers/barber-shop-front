import Image from "next/image";

export default function Navbar() {
  return (
    <header className="bg-customBlue w-full h-16 fixed">
    <nav className="flex justify-between h-16 ">
      <Image
        src="/logobarber.jpeg"
        alt="Logo Barber"
        width={60}
        height={30}
        className="rounded-full p-2"
      />
    </nav>
    </header>
  );
}
