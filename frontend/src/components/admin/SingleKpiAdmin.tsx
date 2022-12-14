import {Kpi} from "../../model/Kpi";
import '../../styling/SingleKpiAdmin.css'
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";

type SingleKpiProps = {
    kpi: Kpi,
    deleteKpiById: (id: string) => Promise<void>,
    targetValueUnitConvertToText: (stringToConvert: string) => string;
    targetValueOperatorConvertToText: (stringToConvert: string) => string;
}

export default function SingleKpiAdmin(props: SingleKpiProps) {

    const navigate = useNavigate();

    const handleClickDelete = () => {
        props.deleteKpiById(props.kpi.id).catch(() => {
            toast.error("Die Kennzahl konnte nicht gelöscht werden!")
        });
    }

    return (
        <section className={"show-single-kpi-admin"} key={props.kpi.id}>
            <p className={"description-single-kpi"}> {props.kpi.name}</p>
            <p className={"responsible-role-kpi"}>Verantwortung: {props.kpi.ownedBy}</p>
            <p className={"description-single-kpi"}> Zielwert: {props.targetValueOperatorConvertToText(props.kpi.targetForKpi.targetValueOperator)
                + " " + props.kpi.targetForKpi.targetValue + " " + props.targetValueUnitConvertToText(props.kpi.targetForKpi.targetValueUnit)}</p>
            <button className={"single-kpi-button"} onClick={() => {
                navigate(`/admin/change/${props.kpi.id}`)
            }}>Kennzahl ändern
            </button>
            <button className={"single-kpi-button"} onClick={() => {
                navigate(`/my-kpi/change/${props.kpi.id}`)
            }}>Werte ändern
            </button>
            <button className={"single-kpi-button"} onClick={handleClickDelete}>löschen</button>
        </section>
    )
}
