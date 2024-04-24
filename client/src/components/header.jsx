import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="mx-auto w-full p-4 md:border-b md:border-b-[#e4e4e4]">
      <Link
        to="/"
        className="max-md:hidden"
      >
        <img
          src="/images/Logo.png"
          alt="First republic"
          width={150}
        />
      </Link>
      <div className="md:hidden flex items-center justify-center relative">
        <Link
          to="/"
          className="md:hidden"
        >
          <img
            src="/images/Logo.png"
            alt="First republic"
            width={100}
          />
        </Link>
      </div>
    </div>
  );
};

export default Header;
