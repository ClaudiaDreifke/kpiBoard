import {FormControl, TextField} from "@mui/material";
import {FormEvent, useState} from "react";
import {NewKpiOwner} from "../../model/KpiOwner";
import {toast} from "react-toastify";

type AddRoleProps = {
    addNewUserRole: (newUserRole: NewKpiOwner) => Promise<void>;
}

export default function AddKpiOwner(props: AddRoleProps) {

    const [roleName, setRoleName] = useState("");

    const onRoleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!roleName) {
            toast.error("Bitte die Rolle eintragen!")
        } else {
            const newUserRole: NewKpiOwner = {
                kpiOwnerDescription: roleName
            }
            props.addNewUserRole(newUserRole)
                .then(() => setRoleName(""))
                .catch(() => {
                        toast.error("Ihre Eingabe konnte nicht gespeichert werden! Bitte füllen Sie alle Felder korrekt aus!")
                    }
                )
        }
    }


    return (
        <div className={"add-role"}>
            <form onSubmit={onRoleSubmit}>
                <FormControl sx={{m: 1, minWidth: 300}}>
                    <TextField id="role-input" label="Rolle" variant="outlined" value={roleName}
                               onChange={event => setRoleName(event.target.value)}/>
                </FormControl>
                <button style={{maxWidth: 100, margin: 30}} type={"submit"}>hinzufügen</button>
            </form>
        </div>
    )
}