import  Styles from "./Header.module.css";
interface IProps {
  title : string,
  content ?: string
}

const Header: React.FC<IProps> = (props) => {
  const { title, content } = props
  return (
    <header>
    <h1>The Pulpit  Rock</h1>
  </header>
  );
};

export default Header;
