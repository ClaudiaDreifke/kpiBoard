package capstone.kpiboard.service.role;

import capstone.kpiboard.model.role.NewRole;
import capstone.kpiboard.model.role.Role;
import org.springframework.stereotype.Service;

@Service
public class RoleService {

    private final RoleRepo roleRepo;

    public RoleService(RoleRepo roleRepo) {
        this.roleRepo = roleRepo;
    }

    public Role addNewRole(NewRole newRole) {
        return roleRepo.save(newRole.withRandomId());
    }
}

