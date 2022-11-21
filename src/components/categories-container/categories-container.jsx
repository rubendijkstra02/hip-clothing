import './categories.styles.scss'

const CategoriesContainer = (props) => {
    const {
        categoriesStyling
    } = props
    return(
        <div className={categoriesStyling}>
            {props.children}
        </div>
    )
}

export default CategoriesContainer