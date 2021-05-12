package hello.service;

import hello.dao.HouseDao;
import hello.dao.StreetDao;
import hello.entity.result.CommonResult;
import org.springframework.stereotype.Service;

import javax.inject.Inject;

@Service
public class StreetService {
    private StreetDao streetDao;
    private HouseDao houseDao;

    @Inject
    public StreetService(StreetDao streetDao, HouseDao houseDao) {
        this.streetDao = streetDao;
        this.houseDao = houseDao;
    }

    public CommonResult getStreets() {
        return CommonResult.newListResult(streetDao.getStreets());
    }

    public CommonResult getStreetDistricts(String street_code) {
        try {
            return CommonResult.newListResult(houseDao.getStreetDistricts(street_code));
        } catch (Exception e) {
            e.printStackTrace();
            return CommonResult.failure("系统异常");
        }
    }

}
