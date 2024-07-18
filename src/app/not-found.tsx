import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <h2 className='text-5xl font-bold mb-6'>¡Oooops!</h2>
      <p>¡Extraviado! No se pudo encontrar la página solicitada.</p>
      <p>¿Dónde te has metido? Rápido, vuelve con nosotros</p>
      <Link href="/" className='underline'>Volver a 🏠</Link>
    </div>
  )
}