import { useState } from "react";

const FormAddSubs = ({ setType, setPrice, type, price }) => {
    const [error, setError] = useState(false);


    const handleSubs = e => {
        e.preventDefault();
        if (price === "" || Number(price) < 0 || type === "") {
            setError(true);
            return;
        }
        setError(false);
        //console.log(type);
        //console.log(price);

    }

    return (
        <div className="add-subscription">
            <h3>Agregar suscripciones</h3>
            <form onSubmit={handleSubs}>
                <p>Servicio</p>
                <select onChange={e => setType(e.target.value)}>
                    <option value="">-- Elegir --</option>
                    <option value="netflix">Netflix</option>
                    <option value="disneyPlus">Disney Plus</option>
                    <option value="hboMax">HBO Max</option>
                    <option value="starPlus">Star Plus</option>
                    <option value="primeVideos">Prime Videos</option>
                    <option value="spotify">Spotify</option>
                    <option value="apletv">Aple tv</option>

                </select>
                <p>Cantidad</p>
                <input type="number" placeholder="20$" onChange={e => setPrice(e.target.value)} />
                <input type="submit" value="Agregar" />
            </form>
            {error ? <p className="error">Campos invalidos</p> : null}
        </div>
    );

}

export default FormAddSubs;