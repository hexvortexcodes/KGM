import { Link } from "react-router";
import Announce from "./Announcement";

export default function Header() {
  return (
    <div className="sticky top-0 bg-white">
      <Announce />
      <div className="flex align-center justify-between border">
        <div className="border-r py-3 px-7">KGM</div>
        <div className="flex align-center">
          <div className="flex align-center">
            <Link className="hover:bg-[#C0FF02] py-3 px-7" to="/">
              home
            </Link>
            <Link className="hover:bg-[#C0FF02] py-3 px-7" to="/about">
              about
            </Link>
            <Link className="hover:bg-[#C0FF02] py-3 px-7" to="/product">
              products
            </Link>
            <Link className="hover:bg-[#C0FF02] py-3 px-7" to="/contacts">
              contacts
            </Link>
          </div>
          <div className="flex align-center">
            <Link to="/cart" className="flex align-center  py-3 px-7 border-l">
              <span>cart</span>
              <span>(0)</span>
            </Link>
            <Link
              className="flex align-center py-3 px-7  bg-[#000] text-[#f5f5f5]"
              to="/account"
            >
              <span>sign up</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
