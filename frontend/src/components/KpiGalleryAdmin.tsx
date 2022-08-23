import {Kpi} from "../model/Kpi";
import SingleKpi from "./SingleKpi";
import '../styling/KpiGalleryAdmin.css'
import AddKpi from "./AddKpi";

type KpiGalleryAdminProps = {
    kpis: Kpi[],
    addNewKpi: (name: string, targetForKpi: { targetValueOperator: string, targetValue: number, targetValueUnit: string }) => Promise<void>;
}

export default function KpiGalleryAdmin(props: KpiGalleryAdminProps) {

    return (
        <>
            <AddKpi addNewKpi={props.addNewKpi}/>
            <h3> Kennzahlen-Übersicht</h3>
            <ul className={"kpi-gallery-view"}>
                {props.kpis.map(kpi => <SingleKpi key={kpi.id} kpi={kpi}/>)}
            </ul>
        </>
    )
}
