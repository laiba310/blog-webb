

import { CardDemo } from "@/components/card";
import Footer from "@/components/footer";
import Header from "@/components/header";
import HeroSection from "@/components/hero-sec";
import SearchBar from "@/components/searchbar";


export default function Home() {
  return (
    <main>
    
        <Header />
        <HeroSection />
        <SearchBar />
               
                  
                      
                      <CardDemo/>
      
        
<Footer />                      

              </main>
  
  );
}