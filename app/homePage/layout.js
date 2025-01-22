import Navigations from "../_components/Navigations";
import UserInfo from "../_components/UserInfo";
//i use Navigation.js in this layout instead of the root layout beacause in my design the Navigation to be  inside /hompage , so if i used the Navigation with the root layout, and keep the Navigation inside /homepage , when i navigate to

// /udemy i wont have Navigation because its just in / homePage
function layout({ children }) {
  return (
    <div
      className="relative grid grid-rows-[auto,1fr]  min-h-svh 
    max-[600px]:grid-cols-[auto,1fr]  max-[600px]:text-sm "
    >
      <Navigations>
        <UserInfo />
      </Navigations>
      {children}
    </div>
  );
}

export default layout;
