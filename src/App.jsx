import { useState } from "react";
import Title from "./Title";
import menu from "./data";
import Menu from "./Menu";
import Categories from "./Categories";

const allCategories = ["all", ...new Set(menu.map((item) => item.category))];

const App = () => {
  const [menuItems, setMenuItems] = useState(menu)
  const [categories, setCategories] = useState(allCategories)

  console.log(categories);
  
  return (
    <main>
      <section className="menu">
        <Title text="Our Menu"/>
        <Categories categories={categories}/>
        <Menu items={menuItems}/>
      </section>
    </main>
  )
};
export default App;
