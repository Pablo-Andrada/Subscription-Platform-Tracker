import SingleItem from "./SingleItem";

const Displayitems = ({subs,eliminarItem,editItem}) => {
    
    return (
        <>
            <h2>Suscripciones</h2>
            {
                subs.map(item => (
                    <SingleItem
                        key={item.id}
                        id={item.id}
                        price={item.price}
                        type={item.type}
                        eliminarItem={eliminarItem}
                        editItem={editItem}
                    />
                ))
            }
        </>
    );

}

export default Displayitems;