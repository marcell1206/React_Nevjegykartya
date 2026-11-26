import './App.css'
import Fejlec from './components/Fejlec'
import Nevjegy from './components/Nevjegy'
import Keszsegek from './components/Keszsegek'
import Lablec from './components/Lablec'

function App() {
    const nevjegy = {
      nev: "Bukovszky Marcell",
      osztaly: "13.C",
      kor: 2026 - 2007,
      email: "bukmar918@logiker.hu",
      bemutatkozas: "Bemutatkozó szöveg helye itt."
    }

  return (
    <>
        <Fejlec />
        <Nevjegy nev={nevjegy.nev} osztaly={nevjegy.osztaly} kor={nevjegy.kor} email={nevjegy.email} bemutatkozas={nevjegy.bemutatkozas}/>
        <Keszsegek />
        <Lablec nev={nevjegy.nev}/>
    </>
  )
}

export default App
