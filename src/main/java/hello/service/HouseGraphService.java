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
                .withPcode(null)
                .withChildren(null)
                .build();
    }

    private List<Node> buildAreasNode(City city,List<Area> areas){
        if(areas==null){ return null; }
        List<Node> areasNode = areas.stream()
                .map(area-> formatAreasDataToNode(city,area))
                .collect(Collectors.toList());
        return areasNode;
    }

    private Node formatAreasDataToNode(City city,Area area){
        List<Node> streets = buildStreetNode(area);
        return NodeBuilder
                .aNode()
                .withId(area.getId())
                .withPid(city.getId())
                .withName(area.getName())
                .withCode(area.getCode())
                .withPcode(city.getCode())
                .withChildren(streets)
                .withValue(streets.size())
                .build();
    }

    private List<Node> buildStreetNode(Area area){
        List<Street> streets = streetDao.getStreetsByAid(area.getId());
        List<Node> streetNode = streets.stream()
                .map(street-> NodeBuilder
                        .aNode()
                        .withId(street.getId())
                        .withPid(street.getAid())
                        .withName(street.getName())
                        .withCode(area.getCode() + '_'+ street.getCode())
                        .withPcode(area.getCode())
                        .withChildren(null)
                        .build())
                .collect(Collectors.toList());
        return streetNode;
    }

    public CommonResult getHouseGraphByCityCode(String city_code){
        try{
            City city = cityDao.getCityByCode(city_code);
            Node root = buildRootCityNode(city);
            List<Node> areasNode = buildAreasNode(city,areaDao.getCityAreas(city.getCode()));
            root.setChildren(areasNode);
            root.setValue(areasNode.size());
            return CommonResult.newSingleResult(root);
        }catch (Exception e){
            e.printStackTrace();
            return CommonResult.failure("查询失败");
        }

    }
}
