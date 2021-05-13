package hello.service;

import hello.dao.AreaDao;
import hello.dao.CityDao;
import hello.dao.HouseDao;
import hello.dao.StreetDao;
import hello.entity.*;
import hello.entity.result.CommonResult;
import org.springframework.stereotype.Service;

import javax.inject.Inject;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.concurrent.atomic.AtomicInteger;
import java.util.stream.Collectors;

@Service
public class HouseGraphService {
    private CityDao cityDao;
    private AreaDao areaDao;
    private StreetDao streetDao;
    private HouseDao houseDao;
    /*
       cityDistrictMap = {
                            "tj":[
                                {
                                "district":"",
                                "city":"",
                                "area":"",
                                "street":""
                                }
                            ]
       }
    */
    private static Map<String,List<Map<String,Object>>> cityDistrictMap = new HashMap<>();

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
                .withRaw(city)
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
        streets.forEach(street->street.setValue(getCityAreaStreetDistrictCount(city,area,street)));
        return NodeBuilder
                .aNode()
                .withId(area.getId())
                .withPid(city.getId())
                .withName(area.getName())
                .withCode(area.getCode())
                .withPcode(city.getCode())
                .withChildren(streets)
                .withValue(streets.size())
                .withRaw(area)
                .build();
    }

    private int getCityAreaStreetDistrictCount(City city, Area area, Node street) {
        List<Map<String,Object>> currentCityDistricts = cityDistrictMap.get(city.getCode());
        AtomicInteger count = new AtomicInteger();
        currentCityDistricts.forEach(item->{
            if(  Objects.equals(item.get("city"),city.getCode())
                    && Objects.equals(item.get("area"),area.getCode())
                    && Objects.equals(
                            item.get("street")
                            ,((Street)street.getRaw()).getCode())){
                count.getAndIncrement();
            }
        });
        return count.get();
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
                        .withRaw(street)
                        .build())
                .collect(Collectors.toList());
        return streetNode;
    }

    private List<Map<String,Object>> getAllCityAreaStreetDistrictMapInfo(City city){
        return houseDao.getCityAreaStreetDistrictMapInfo(city.getCode());
    }

    private Node setNodeData(City city){
        Node root = buildRootCityNode(city);
        List<Node> areasNode = buildAreasNode(city,areaDao.getCityAreas(city.getCode()));
        root.setChildren(areasNode);
        root.setValue(areasNode.size());
        return root;
    }
    public CommonResult getHouseGraphByCityCode(String city_code){
        try{
            City city = cityDao.getCityByCode(city_code);
            cityDistrictMap.put(city_code,getAllCityAreaStreetDistrictMapInfo(city));
            Node root = setNodeData(city);
            return CommonResult.newSingleResult(root);
        }catch (Exception e){
            e.printStackTrace();
            return CommonResult.failure("查询失败");
        }
    }

    public CommonResult getCityAreaHouseAvgMaxMinCount(String city_code){
        try{
            return CommonResult.newSingleResult(houseDao.getCityAreaHouseAvgMaxMinCount(city_code));
        }catch (Exception e){
            e.printStackTrace();
            return CommonResult.failure("查询失败");
        }
    }




}
