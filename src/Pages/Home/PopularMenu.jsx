import SectionTitle from "../../Components/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../Hooks/useMenu";
import { Link } from "react-router-dom";

const PopularMenu = () => {
  const {menu} = useMenu();
  const popular = menu.filter((item) => item.category === "popular");

  return (
    <div>
      <section className="mb-12">
        <SectionTitle
          heading={"From Our Menu"}
          subHeading={"Popular Items"}
        ></SectionTitle>

        <div className="grid grid-cols-2 gap-8 py-4 px-4">
          {popular.map((item, index) => (
            <MenuItem key={index} item={item}></MenuItem>
          ))}
        </div>
        <div className="text-center">
       <Link to={`/menu`}>
       <button className="btn btn-outline border-0 border-b-4 mt-4">
            View full menu
          </button>
       </Link>
        </div>
      </section>
    </div>
  );
};

export default PopularMenu;
