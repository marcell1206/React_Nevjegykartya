export default function Keszsegek() {
    const lista = {
        keszsegek: ["1. készség", "2. készség", "3. készség", "4. készség", "5. készség"]
    }
    return (
        <div class="kartya">
            <h2>Készségeim</h2>
            <ul style={{ display: 'flex', gap: 8, flexWrap: 'wrap', listStyle: 'none', placeContent: 'center'}}>
                {
                    lista.keszsegek.map((listaitemek, index) => {
                        return <li key={index}>{listaitemek}</li>
                    })
                }
            </ul>
        </div>
    )
}