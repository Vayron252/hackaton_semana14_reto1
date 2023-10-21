//import imgprueba from '../img/imgprueba.jpg'
import imgnodisponible from '../img/imgnodisponible.png'

export const Card = ({mascota}) => {
    const {id, name, telefono, pais, descripcion, img} = mascota;

    //console.log(img);

    // const func = (e) => {
    //     e.onerror = null; // prevents looping
    //     currentTarget.src="image_path_here";
    // }

    return (
        <div className="contenedor__card">
            <div className="card">
                <div className="card__contenedor__imagen">
                    <img src={img} alt="imagen mascota" />
                </div>
                <div className="card__contenedor__informacion">
                    <div className="card__informacion">
                        <p className="informacion__nombre"><span>Nombre: </span>{name}</p>
                        <p className="informacion__telefono"><span>Teléfono: </span> {telefono}</p>
                        <p className="informacion__pais"><span>País: </span>{pais}</p>
                        <p className="informacion__descripcion"><span>Descripción: </span>{descripcion}</p>
                    </div>
                    <button className="card__boton">Ver Información</button>
                </div>
            </div>
        </div>
    )
}