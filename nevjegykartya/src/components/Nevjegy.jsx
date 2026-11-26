export default function Nevjegy({nev, osztaly, kor, bemutatkozas, email}) {
    /*const nevjegy = {
      nev: "Bukovszky Marcell",
      osztaly: "13.C",
      kor: 2026 - 2007,
      email: "bukmar918@logiker.hu",
      bemutatkozas: "Bemutatkozó szöveg helye itt."
    }*/

    console.log(nev, osztaly, kor, bemutatkozas, email);
    return (
        <div class="kartya">
            <p style={{ width: 80, height: 80, borderRadius: '50%', display: 'grid', placeItems: 'center', backgroundColor: "blue", color: "white" }}>{nev.split(' ').map(r => r[0]).join('')}</p>
            <p>Név: {nev}</p>
            <p>Osztály: {osztaly}</p>
            <p>Kor: {kor} éves</p>
            <p>Bemutatkozás: {bemutatkozas}</p>
            <p>Email: <a href={"mailto:" + email}>{email}</a></p>
      </div>
    )
}