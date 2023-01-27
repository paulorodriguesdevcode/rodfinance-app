import "./style.scss";

import { NavTop } from "../../components/NavTop";
import { NavMenu } from "../../components/NavMenu";

export function Settings() {

  return (
     <>
      <NavTop/>      
      <div className="content">
        <NavMenu/>
        <main>
          <form action="">
            <div className="inputWithLabel">
              <span>Name</span>
              <input type="text" name="name" id="name" />
            </div>

            <div className="inputWithLabel">
              <span>Email</span>
              <input type="email" name="email" id="email" />
            </div>

            <div className="inputWithLabel">
              <span>Password</span>
              <input type="password" name="password" id="password" />
            </div>

            <div className="inputWithLabel">
              <span>Confirm password</span>
              <input type="password" name="password" id="password" />
            </div> 

            <button type="submit">
              Save
            </button>
          </form>
        </main>
      </div>
    </>
  );
}