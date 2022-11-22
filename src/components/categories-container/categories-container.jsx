import './categories.styles.scss'
import CategoryContainer from "../category-container/category-container";

const CategoriesContainer = (props) => {
    const {
        categoriesStyling,
        categories
    } = props
    return(
        <div className={categoriesStyling}>
            {categories.map(({title, id,imageUrl}) => (
                <CategoryContainer key={id} cardTitle={title} cardImage={imageUrl} cardLink='Shop Now'/>
            ))}
        </div>
    )
}

export default CategoriesContainer