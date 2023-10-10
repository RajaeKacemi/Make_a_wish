import image from '../images/R.png';

const Description = () => {
    const parag = "description";
    const imgChildren = "image";
    const container = "container";
    return (
        <div className={container}>
        <p className={parag}>
        SaveChildren is a dedicated charity organization committed to protecting 
        and improving the lives of vulnerable children worldwide. We work tirelessly to provide essential healthcare,
        education, and humanitarian assistance to children in need, ensuring they have a brighter future filled with hope, 
        opportunity, and the chance to thrive despite adversity. Join us in our mission to create a world where every child is safe,
        healthy, and empowered to reach their full potential
        </p>
        <div className={imgChildren}>
            <img src={image} alt="save_children" ></img>
        </div>
        </div>
    )
}

export default Description;