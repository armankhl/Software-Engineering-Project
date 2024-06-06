import Header from "@/components/header_TAs";
import Footer from "@/components/footer_TAs";

const Layout = (props) => {
  return (
    <div
      className={"flex flex-col justify-between h-screen w-screen bg-white "}
      dir={"rtl"}
    >
      <Header />
      {props.children}
      <Footer />
    </div>
  );
};
export default Layout;
