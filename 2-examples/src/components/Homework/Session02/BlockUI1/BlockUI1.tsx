import Styles from "./BlockUI1.module.css";
interface Ipros {
  title: string;
  bgTitle: string;
  percent: number;
  bgProcess: string;
}
const BlockUI1: React.FC<Ipros> = (props) => {
  const { title, bgTitle, percent, bgProcess } = props;
  return (
    <div className="d-flex w-50 m-auto border">
      <div className={Styles.w__100} style={{ backgroundColor: bgTitle }}>
        {title}
      </div>
      <div className={Styles.w__500}>
        <div style={{ width: `${percent}%`, backgroundColor: bgProcess }}>
          {percent}%
        </div>
      </div>
    </div>
  );
};
export default BlockUI1;