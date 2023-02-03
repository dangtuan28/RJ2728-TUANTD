import Styles from './BlockUI1.module.css';
import CommonStyles from '../../../../untils/styles/CommonStyles.module.css';

interface IProps {
    title: string;
    bgTitle: string;
    bgProcess: string;
    percent: number;
}

const BlockUI1: React.FC<IProps> = (props) => {
    const{ title, bgTitle, bgProcess, percent } = props
    const [percentState, setPercentState] = useState<number>(percent)
    const PlusPercent = () => {
        console.log(1);
       // setPercentState(percentState + 1 )
       setPercentState((prev) => prev +1)
        
    }
    //first render
    
    return (
        <div className='d-flex w-50 m-auto border'>
            <div className={Styles.w__100} style={{backgroundColor: bgTitle}}>{title}</div>
            <div className={`${Styles.w__500} ${CommonStyles.font__16}`}>
                <div style={{width: `${percent}%`, backgroundColor: bgProcess}}>{percent}%</div>
            </div>
        </div>
    );
};

export default BlockUI1;