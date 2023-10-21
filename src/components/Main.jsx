import { Card } from "./Card"

export const Main = ({ mascotas, filtroTexto }) => {

    const mascotasFiltro = mascotas.filter(mascota => mascota.name.toLowerCase().includes(filtroTexto.toLowerCase()));

    return (
        <main className="main contenedor">
            <h1 className="main__titulo">Listado de Mascotas</h1>
            {
                mascotasFiltro.length ? 
                (
                    <div className="main__listado">
                        {mascotasFiltro.map(mascota => <Card key={mascota.id} mascota={mascota} /> )}
                    </div>
                ) :
                (
                    <p className="main__validacionfiltro">No existe la mascota filtrada.</p>
                )
            }
            
        </main>
    )
}
