const Categories = ({categories}) => {
    return (
        <div className="btn-container">
            {categories.map((category, index) => {
                return (
                    <button type="button" className="filter-btn" key={index}>
                        {category}
                    </button>
                )
            })}
        </div>
    )
}
export default Categories;