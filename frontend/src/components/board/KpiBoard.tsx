import {Kpi} from "../../model/Kpi";
import SingleKpiBoard from "./SingleKpiBoard";
import '../../styling/KpiBoard.css'
import NavBar from "../shared/NavBar";

export type KpiBoardProps = {
    kpis: Kpi[],
    targetValueUnitConvertToText: (stringToConvert: string) => string,
    targetValueOperatorConvertToText: (stringToConvert: string) => string,
    logout: () => void,
}

export default function KpiBoard(props: KpiBoardProps) {

    const kpiList = props.kpis;
    kpiList.sort((a, b) => a.ownedBy.localeCompare(b.ownedBy));

    return (
        <>
            <NavBar logout={props.logout}/>
            <section className={"kpi-board-with-headline"}>
                <h2>Kennzahlen-Board</h2>
                <div className={"kpi-board"}>
                    <div className={"name"}/>
                    <div className={"month-headline1"}>Jan</div>
                    <div className={"month-headline2"}>Feb</div>
                    <div className={"month-headline3"}>Mär</div>
                    <div className={"month-headline4"}>Apr</div>
                    <div className={"month-headline5"}>Mai</div>
                    <div className={"month-headline6"}>Jun</div>
                    <div className={"month-headline7"}>Jul</div>
                    <div className={"month-headline8"}>Aug</div>
                    <div className={"month-headline9"}>Sep</div>
                    <div className={"month-headline10"}>Okt</div>
                    <div className={"month-headline11"}>Nov</div>
                    <div className={"month-headline12"}>Dez</div>
                    <div className={"target-value-headline"}>Zielwert</div>
                    <div className={"actual-target-value-headline"}>aktueller</div>
                    <div className={"actual-target-value-headline2"}>Durchschnitt</div>
                    {kpiList.map(kpi => <SingleKpiBoard key={kpi.id} kpi={kpi}
                                                        targetValueUnitConvertToText={props.targetValueUnitConvertToText}
                                                        targetValueOperatorConvertToText={props.targetValueOperatorConvertToText}/>)}
                </div>
            </section>
        </>
    )
}
