package capstone.kpiboard.controller;

import capstone.kpiboard.model.Kpi;
import capstone.kpiboard.model.NewKpi;
import capstone.kpiboard.service.KpiService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class KpiController {
    private final KpiService kpiService;

    public KpiController(KpiService kpiService) {
        this.kpiService = kpiService;
    }

    @PostMapping("/kpis")
    @ResponseStatus(code = HttpStatus.CREATED)
    public Kpi addNewKpi(@RequestBody NewKpi newKpi) {
        return kpiService.addNewKpi(newKpi);
    }

    @GetMapping("/kpis")
    public List<Kpi> getAllKpis() {
        return kpiService.getAllKpis();
    }

    @DeleteMapping("/kpis/{id}")
    @ResponseStatus(code = HttpStatus.NO_CONTENT)
    public void deleteKpi(@PathVariable String id) {
        kpiService.deleteKpi(id);
    }

}
