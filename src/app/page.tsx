import Form from '@/Components/Form'
import { Roboto_Slab} from "next/font/google";
const roboto = Roboto_Slab({ 
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
 });

export default function Home() {

  return (
      <main className={roboto.className}>
        <div>          
          <Form/>
        </div>
      </main>
  )
}
  