import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className='flex justify-between items-center p-4 bg-blue-500 text-white'>
      <h1 className='text-lg font-bold'>Alabanzas Cristianas</h1>
      <div className='flex gap-4'>
        <a href='/' className='hover:underline'>
          Inicio
        </a>
        <a href='/alabanzas' className='hover:underline'>
          Alabanzas
        </a>
        <a href='/calendario' className='hover:underline'>
          Calendario
        </a>
        <a href='/contacto' className='hover:underline text'>
          Contacto
        </a>
      </div>
    </nav>
  );
}
