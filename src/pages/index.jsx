import Image from "next/image";
import { Inter } from "next/font/google";
import Presente from './componentes/Presente'
import Porta from './componentes/Porta'
import Porta2 from '../pages/componentes/Porta2'
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
 <Porta2/>
 <Porta2/><Porta2/><Porta2/><Porta2/><Porta2/><Porta2/><Porta2/>
 <Porta/>
      </div>
   
  )
}
