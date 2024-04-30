const Categories = ({categories, filterItems}) => {
    // const filterItems = (category) => {
    //     console.log(category);
    // }
    return (
        <div className="btn-container">
            {categories.map((category) => {
                return (
                    <button type="button" className="btn" key={category} onClick={() => filterItems(category)}>
                        {category}
                    </button>
                )
            })}
        </div>
    )
}
export default Categories;