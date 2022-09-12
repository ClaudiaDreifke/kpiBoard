import {Route, Routes} from "react-router-dom";
import ChangeKpiAdmin from "../admin/ChangeKpiAdmin";
import useKpi from "../../hooks/useKpi";
import ChangeKpiUser from "../user/ChangeKpiUser";
import KpiBoard from "../board/KpiBoard";
import useRole from "../../hooks/useRole";
import RoleGalleryAdmin from "../admin/RoleGalleryAdmin";
import useUser from "../../hooks/useUser";
import LoginPage from "./LoginPage";
import MyKpi from "./MyKpi";

export default function AllRoutes() {

    const {
        kpis,
        addNewKpi,
        deleteKpiById,
        updateKpiById,
        targetValueUnitConvertToText,
        targetValueOperatorConvertToText
    } = useKpi();

    const {
        kpiOwners,
        addNewKpiOwner,
        deleteKpiOwnerById,
    } = useRole();

    const {
        addNewUser,
        login,
        loggedInUserDetails,
    } = useUser();

    return (
        <>
            <Routes>
                <Route path={"/kpi-board"}
                       element={<KpiBoard kpis={kpis} targetValueUnitConvertToText={targetValueUnitConvertToText}
                                          targetValueOperatorConvertToText={targetValueOperatorConvertToText}/>}/>
                <Route path={"/admin/roles"}
                       element={<RoleGalleryAdmin kpiOwners={kpiOwners} deleteKpiOwnerById={deleteKpiOwnerById}/>}/>
                <Route path={"/admin/change/:id"}
                       element={<ChangeKpiAdmin kpis={kpis} kpiOwners={kpiOwners} updateKpiById={updateKpiById}/>}/>
                <Route path={"/my-kpi"}
                       element={<MyKpi kpis={kpis} kpiOwners={kpiOwners} addNewKpi={addNewKpi}
                                       deleteKpiById={deleteKpiById} addNewKpiOwner={addNewKpiOwner}
                                       addNewUser={addNewUser} loggedInUserDetails={loggedInUserDetails}
                                       targetValueUnitConvertToText={targetValueUnitConvertToText}
                                       targetValueOperatorConvertToText={targetValueOperatorConvertToText}/>}/>
                <Route path={"/my-kpi/change/:id"}
                       element={<ChangeKpiUser kpis={kpis} updateKpiById={updateKpiById}
                                               targetValueUnitConvertToText={targetValueUnitConvertToText}
                                               targetValueOperatorConvertToText={targetValueOperatorConvertToText}/>}/>
                <Route path={"/"}
                       element={<LoginPage login={login} loggedInUserDetails={loggedInUserDetails}/>}/>
            </Routes>
        </>
    )
}
