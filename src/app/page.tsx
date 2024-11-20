
//1. Import area

import Header from './components/Header';
import Footer from './components/Footer';
import Aside from './components/Aside';
import Section from './components/Section';


//2. Export area
export default function Home() {

  //My Home function is returning html code/Componenet/ JSx
  return (
   <> 
      <div className="container-fluid anil_tbdr">
          <Header />
          <main className="anil_tbdr text-center">
            <div className="row h-100 m-0">
              <Aside />
              <Section />
            </div>
          </main>
          <Footer />
      </div>
   </>
  );
}
