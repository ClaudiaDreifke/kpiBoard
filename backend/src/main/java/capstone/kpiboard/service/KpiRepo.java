package capstone.kpiboard.service;


import capstone.kpiboard.model.Kpi;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface KpiRepo extends MongoRepository <Kpi, String>{
}