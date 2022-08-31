package capstone.kpiboard.model;

import org.springframework.data.annotation.Id;

import java.util.List;

public record Kpi(
        @Id
        String id,
        String name,
        List<Double> values,
        TargetForKpi targetForKpi) {
}
