import menuImg from "../../../src/assets/menu/banner3.jpg";
import soupImg from "../../../src/assets/menu/soup-bg.jpg";
import saladImg from "../../../src/assets/menu/salad-bg.jpg";
import pizzaImg from "../../../src/assets/menu/pizza-bg.jpg";
import dessertImg from "../../../src/assets/menu/dessert-bg.jpeg";
import Cover from "../../Shared/Cover/Cover";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import useMenu from "../../hooks/useMenu";
import MenuCategoryy from "../Home/Menu/MenuCategoryy";

const Menu = () => {
    const [menu] = useMenu();
    const desserts = menu.filter((item) => item.category === "dessert");
    const soup = menu.filter((item) => item.category === "soup");
    const salad = menu.filter((item) => item.category === "salad");
    const pizza = menu.filter((item) => item.category === "pizza");
    const offered = menu.filter((item) => item.category === "offered");
    return (
        <div>
            <Cover img={menuImg} title="our menu"></Cover>
            {/* main cover */}
            <SectionTitle
                subHeading="Don't Miss"
                heading="Today's Offer"></SectionTitle>
            {/* offered menu items */}
            <MenuCategoryy items={offered}></MenuCategoryy>
            {/* dessert menu items  */}
            <MenuCategoryy
                items={desserts}
                title="dessert"
                img={dessertImg}></MenuCategoryy>
            <MenuCategoryy
                items={pizza}
                title={"pizza"}
                img={pizzaImg}></MenuCategoryy>
            <MenuCategoryy
                items={salad}
                title={"salad"}
                img={saladImg}></MenuCategoryy>
            <MenuCategoryy
                items={soup}
                title={"soup"}
                img={soupImg}></MenuCategoryy>
        </div>
    );
};

export default Menu;
