import Form from '@/Components/Form'
import { Roboto_Slab} from "next/font/google";
import './globals.css'
const roboto = Roboto_Slab({ 
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
 });

export default function Home() {

  return (
      <main className={roboto.className}>
        <section className='FX'>
          <div className='FX TEXTWHITE'>
            <h1>This is Final Year Project of GIKI Civil Enginnering Department Students</h1>
            <h1>Title: Application of FEM and AI for Response-Based Assessment of RC Beam-Column Connections</h1>

          </div>
          <div>          
            <Form/>
          </div>
          <h1 className='text-white'>Deparment of Civil Engineering, GIK Institute, Pakistan</h1>

        </section>
      </main>
  )
}
  