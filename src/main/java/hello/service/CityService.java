package hello.service;

import hello.dao.AreaDao;
import hello.dao.CityDao;
import hello.entity.result.CommonResult;
import org.springframework.stereotype.Service;

import javax.inject.Inject;

@Service
public class CityService {
    private CityDao cityDao;
    private AreaDao areaDao;

    @Inject
    public CityService(CityDao cityDao, AreaDao areaDao) {
        this.cityDao = cityDao;
        this.areaDao = areaDao;
    }

    public CommonResult getCites() {
        return CommonResult.newListResult(cityDao.getCites());
    }

    public CommonResult getCityByCode(String code) {
        return CommonResult.newSingleResult(cityDao.getCityByCode(code));
    }

    public CommonResult getCityAreas(String code) {
        return CommonResult.newListResult(areaDao.getCityAreas(code));
    }
}
