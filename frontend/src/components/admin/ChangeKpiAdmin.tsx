import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import {FormEvent, useEffect, useState} from "react";
import {toast} from "react-toastify";
import {useNavigate, useParams} from "react-router-dom";
import {Kpi} from "../../model/Kpi";
import '../../styling/ChangeKpiAdmin.css'

export type ChangeKpiAdminProps = {
    kpis: Kpi[],
    updateKpiById: (updatedKpi: Kpi) => void;
}

export default function ChangeKpiAdmin(props: ChangeKpiAdminProps) {

    const navigate = useNavigate();
    const {id} = useParams();
    const kpi: Kpi | undefined = props.kpis.find((k: Kpi) => k.id === id);

    const [responsibleRole, setResponsibleRole] = useState<string>(kpi?.responsibleRole || "")
    const [targetValueOperator, setTargetValueOperator] = useState<string>(kpi?.targetForKpi?.targetValueOperator || "")
    const [targetValue, setTargetValue] = useState<number>(kpi?.targetForKpi?.targetValue || 0)
    const [targetValueUnit, setTargetValueUnit] = useState<string>(kpi?.targetForKpi?.targetValueUnit || "")

    useEffect(() => {
        setTargetValueOperator(kpi?.responsibleRole || "")
        setTargetValueOperator(kpi?.targetForKpi?.targetValueOperator || "")
        setTargetValue(kpi?.targetForKpi?.targetValue || 0)
        setTargetValueUnit(kpi?.targetForKpi?.targetValueUnit || "")
    }, [kpi])

    const onKpiSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (kpi) {
            const updatedKpi: Kpi = {
                id: kpi.id,
                name: kpi.name,
                responsibleRole: responsibleRole,
                values: kpi.values,
                targetForKpi: {
                    targetValueOperator: targetValueOperator,
                    targetValue: targetValue,
                    targetValueUnit: targetValueUnit
                },
                currentAverageValue: kpi.currentAverageValue
            }
            props.updateKpiById(updatedKpi)
        } else {
            toast.error("Die Kennzahl konnte nicht geändert werden")
        }
        navigate("/admin")
    }

    return (
        <>
            <form className={"form-change-kpi-admin"} onSubmit={onKpiSubmit}>
                <button style={{
                    width: 20,
                    backgroundColor: "white",
                    borderColor: "white",
                    color: "black",
                    fontWeight: "bold",
                    fontSize: "large",
                    marginLeft: 460,
                }} onClick={() => navigate("/admin")}>X
                </button>
                <h3>Kennzahl ändern</h3>
                <p className={"name-change"} id="name">{kpi?.name}</p>
                <FormControl sx={{m: 1, minWidth: 300}}>
                    <InputLabel id="responsible-role-change">Verantwortlicher</InputLabel>
                    <Select
                        labelId="responsible-role-change"
                        id="responsible-role-change"
                        value={responsibleRole}
                        onChange={event => setResponsibleRole(event.target.value)}>
                        <MenuItem value={"x"}>x</MenuItem>
                        <MenuItem value={"y"}>y</MenuItem>
                        <MenuItem value={"z"}>z</MenuItem>
                    </Select>
                </FormControl>
                <FormControl sx={{m: 1, minWidth: 300}}>
                    <InputLabel id="target-value-operator-change"></InputLabel>
                    <Select
                        labelId="target-value-operator-change"
                        id="target-value-operator-change"
                        value={targetValueOperator}
                        onChange={event => setTargetValueOperator(event.target.value)}>
                        <MenuItem value={"GREATER"}>größer</MenuItem>
                        <MenuItem value={"LESS"}>kleiner</MenuItem>
                        <MenuItem value={"EQUALS"}>gleich</MenuItem>
                    </Select>
                </FormControl>
                <FormControl sx={{m: 1, minWidth: 300}}>
                    <input className={"target-value-input-change"} type={"number"}
                           value={targetValue}
                           onChange={event => setTargetValue(event.target.valueAsNumber)}/>
                </FormControl>
                <FormControl sx={{m: 1, minWidth: 300}}>
                    <InputLabel id="target-value-unit-change"></InputLabel>
                    <Select
                        labelId="target-value-unit-change"
                        id="target-value-unit-change"
                        value={targetValueUnit}
                        onChange={event => setTargetValueUnit(event.target.value)}>
                        <MenuItem value={"AMOUNT"}>Anzahl</MenuItem>
                        <MenuItem value={"PERCENTAGE"}>%</MenuItem>
                    </Select>
                </FormControl>
                <button style={{marginTop: 20, marginLeft: 300, marginBottom: 20}} type={"submit"}>speichern</button>
            </form>
        </>
    );
}
