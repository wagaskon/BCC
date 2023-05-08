import Form from '@/Components/Form'
import { Roboto_Slab} from "next/font/google";
import './globals.css'
import Image from 'next/image'
import Link from 'next/link'
const roboto = Roboto_Slab({ 
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
 });

export default function Home() {

  return (
      <main className={`${roboto.className} text-white `}>
        <section className='FX'>
          <Image src='https://giki.edu.pk/wp-content/uploads/2023/03/cropped-giki-logo-updated.png' width={100} height={100} alt='GIKI Logo' className='my-5' />
          <div className='FX TEXTWHITE text-sm md:text-lg text-center'>
            <p>This is Final Year Project of GIKI Civil Enginnering Department Students</p>
            <p>Title: Application of FEM and AI for Response-Based Assessment of RC Beam-Column Connections</p>

          </div>
          <div>          
            <Form/>
          </div>
          <div className='m-5'>
            <h1>Contributors</h1>
            <ol className='list-decimal pl-7  '>
            
              <li ><Link href='https://www.linkedin.com/in/mehran-sahil/' className='text-yellow-600 hover:text-blue-700'>Mehran Sahil</Link></li>
              <li ><Link href='https://www.linkedin.com/in/waqaskhandev/'  className='text-yellow-600 hover:text-blue-700' >Waqas Khan</Link></li>
              <li ><Link href='#'  className='text-yellow-600 hover:text-blue-700' >Abdul Wahid Anwar</Link></li>
              <li ><Link href='#'  className='text-yellow-600 hover:text-blue-700' >Muhammad Mansoor Khan</Link></li>
              
            </ol>
          </div>
          <div className='text-center'>

          <h1 className='text-white md:text-2xl'>Deparment of Civil Engineering, GIK Institute, Pakistan</h1>
          </div>

        </section>
      </main>
  )
}
  