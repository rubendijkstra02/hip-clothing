const CategoryContainer = (props) => {
    const {
        cardTitle,
        cardLink,
        cardImage
    } = props
    return (
        <div className='category-container'>
            <div className='background-image' style={{
                backgroundImage: `url(${cardImage})`
            }}/>
            <div className='category-body-container'>
                <h2>{cardTitle}</h2>
                <p>{cardLink}</p>
            </div>
        </div>
    )
}

export default CategoryContainer