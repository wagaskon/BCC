import Form from '@/Components/Form'
import { Roboto_Slab} from "next/font/google";
import './globals.css'
import Link from 'next/link'
const roboto = Roboto_Slab({ 
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
 });

export default function Home() {

  return (
      <main className={`${roboto.className} text-white`}>
        <section className='FX'>
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
            
              <li className='text-yellow-600 hover:text-blue-700'><Link href='https://www.linkedin.com/in/mehran-sahil/' >Mehran Sahil</Link></li>
              <li className='text-yellow-600 hover:text-blue-700'><Link href='https://www.linkedin.com/in/waqaskhandev/' >Waqas Khan</Link></li>
              <li className='text-yellow-600 hover:text-blue-700'>Abdul Wahid Anwar</li>
              <li className='text-yellow-600 hover:text-blue-700'>Muhammad Mansoor Khan</li>
            </ol>
          </div>
          <h1 className='text-white md:text-2xl'>Deparment of Civil Engineering, GIK Institute, Pakistan</h1>

        </section>
      </main>
  )
}
  