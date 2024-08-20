import SingleItem from "./SingleItem";

const Displayitems = ({subs}) => {
    
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
                    />
                ))
            }
        </>
    );

}

export default Displayitems;