import NavbarSearch from "./components/NavbarSearch";

type Props = {
  children: React.ReactNode;
};

const layout = ({ children }: Props) => {
  return (
    <div>
      <div>
        <NavbarSearch />
      </div>
      <main>{children}</main>
    </div>
  );
};

export default layout;
