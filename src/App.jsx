import { useState } from "react";
import Title from "./Title";
import menu from "./data";
import Menu from "./Menu";

const tempSet = new Set(menu.map((item) => item.category));
const categories = [...tempSet];
console.log(categories);


const App = () => {
  const [menuItems, setMenuItems] = useState(menu)
  
  return (
    <main>
      <section className="menu">
        <Title text="Our Menu"/>
        <Menu items={menuItems}/>
      </section>
    </main>
  )
};
export default App;
