import {Kpi} from "../../model/Kpi";
import {useNavigate} from "react-router-dom";
import '../../styling/SingleKpiUser.css'
import EditIcon from '@mui/icons-material/Edit';

type SingleKpiUserProps = {
    kpi: Kpi,
}

export default function SingleKpiUser(props: SingleKpiUserProps) {

    const navigate = useNavigate();

    const targetValueOperatorConvertToText = () => {
        if (props.kpi.targetForKpi.targetValueOperator === "LESS") return <>kleiner</>;
        if (props.kpi.targetForKpi.targetValueOperator === "GREATER") return <>größer</>;
        else return <>gleich</>;
    }

    const targetValueUnitConvertToText = () => {
        if (props.kpi.targetForKpi.targetValueUnit === "AMOUNT") return <> Stk.</>;
        else return <>%</>;
    }

    return (
        <section className={"show-single-kpi"} key={props.kpi.id}>
            <p className={"description-single-kpi"}> {props.kpi.name}</p>
            <p className={"description-single-kpi"}> Zielwert: {targetValueOperatorConvertToText()} {props.kpi.targetForKpi.targetValue} {targetValueUnitConvertToText()}</p>
            <EditIcon style={{margin: 15}} onClick={() => {
                navigate(`/my-kpi/change/${props.kpi.id}`)
            }}/>
        </section>
    )
}
