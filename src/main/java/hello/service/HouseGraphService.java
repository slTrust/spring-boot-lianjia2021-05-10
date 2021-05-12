package hello.service;

import hello.dao.AreaDao;
import hello.dao.CityDao;
import hello.dao.HouseDao;
import hello.dao.StreetDao;
import hello.entity.*;
import hello.entity.result.CommonResult;
import org.springframework.stereotype.Service;

import javax.inject.Inject;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class HouseGraphService {
    private CityDao cityDao;
    private AreaDao areaDao;
    private StreetDao streetDao;
    private HouseDao houseDao;

    @Inject
    public HouseGraphService(CityDao cityDao, AreaDao areaDao, StreetDao streetDao, HouseDao houseDao) {
        this.cityDao = cityDao;
        this.areaDao = areaDao;
        this.streetDao = streetDao;
        this.houseDao = houseDao;
    }

    private Node buildRootCityNode(City city){
        return NodeBuilder.aNode()
                .withId(city.getId())
                .withName(city.getName())
                .withCode(city.getCode())
                .withChildren(null)
                .build();
    }
    private List<Node> buildAreasNode(Long pid,List<Area> areas){
        if(areas==null){ return null; }
        List<Node> areasNode = areas.stream()
                .map(area-> NodeBuilder
                        .aNode()
                        .withId(area.getId())
                        .withPid(pid)
                        .withName(area.getName())
                        .withCode(area.getCode())
                        .withChildren(buildStreetNode(area))
                        .build())
                .collect(Collectors.toList());
        return areasNode;
    }

    private List<Node> buildStreetNode(Area area){
        List<Street> streets = streetDao.getStreetsByAid(area.getId());
        List<Node> streetNode = streets.stream()
                .map(street-> NodeBuilder
                        .aNode()
                        .withId(street.getId())
                        .withPid(street.getAid())
                        .withName(street.getName())
                        .withCode(street.getCode())
                        .withChildren(buildDistrictNode(street))
                        .build())
                .collect(Collectors.toList());
        return streetNode;
    }
    private List<Node> buildDistrictNode(Street street){
        List<String> districts = houseDao.getStreetDistricts(street.getCode());
        List<Node> districtsNode = districts.stream()
                .map(district-> NodeBuilder
                        .aNode()
                        .withId(null)
                        .withPid(street.getId())
                        .withName(district)
                        .withCode(null)
                        .withChildren(null)
                        .build())
                .collect(Collectors.toList());
        return districtsNode;
    }



    public CommonResult getHouseGraphByCityCode(String city_code){
        try{
            City city = cityDao.getCityByCode(city_code);
            Node root = buildRootCityNode(city);
            List<Node> areasNode = buildAreasNode(city.getId(),areaDao.getCityAreas(city_code));
            root.setChildren(areasNode);
            return CommonResult.newSingleResult(root);
        }catch (Exception e){
            e.printStackTrace();
            return CommonResult.failure("查询失败");
        }

    }
}
