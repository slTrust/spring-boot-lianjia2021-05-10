package hello.service;

import hello.dao.AreaDao;
import hello.dao.StreetDao;
import hello.entity.Area;
import hello.entity.result.CommonResult;
import org.springframework.stereotype.Service;

import javax.inject.Inject;

@Service
public class AreaService {
    private AreaDao areaDao;
    private StreetDao streetDao;

    @Inject
    public AreaService(AreaDao areaDao, StreetDao streetDao) {
        this.areaDao = areaDao;
        this.streetDao = streetDao;
    }

    public CommonResult getAreas() {
        try {
            return CommonResult.newListResult(areaDao.getAreas());
        } catch (Exception e) {
            e.printStackTrace();
            return CommonResult.failure("系统异常");
        }
    }

    public CommonResult getAreasByCode(String area_code) {
        try {
            return CommonResult.newSingleResult(areaDao.getAreaByCode(area_code));
        } catch (Exception e) {
            e.printStackTrace();
            return CommonResult.failure("系统异常");
        }
    }

    public CommonResult getStreetsByAreaCode(String area_code) {
        try {
            Area area = areaDao.getAreaByCode(area_code);
            return CommonResult.newSingleResult(streetDao.getStreetsByAid(area.getId()));
        } catch (Exception e) {
            e.printStackTrace();
            return CommonResult.failure("系统异常");
        }
    }
}
