package hello.service;

import hello.dao.AreaDao;
import org.springframework.stereotype.Service;

import javax.inject.Inject;
import java.util.List;

@Service
public class AreaService {
    private AreaDao areaDao;

    @Inject
    public AreaService(AreaDao areaDao) {
        this.areaDao = areaDao;
    }

    public List<String> getAreasByCityCode(String city_code){
        return areaDao.getAreaByCityCode(city_code);
    }
}
