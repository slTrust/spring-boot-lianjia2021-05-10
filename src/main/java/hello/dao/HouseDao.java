package hello.dao;

import hello.entity.Street;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.session.SqlSession;
import org.springframework.stereotype.Service;

import javax.inject.Inject;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class HouseDao {
    private SqlSession sqlSession;

    @Inject
    public HouseDao(SqlSession sqlSession) {
        this.sqlSession = sqlSession;
    }

    public List<Street> getStreets(){
        return sqlSession.selectList("selectStreets");
    }

    public List<Map<String,Object>> getCityAreaStreetDistrictMapInfo(String city_code){
        Map<String,Object> parameters = new HashMap<>();
        parameters.put("city_code",city_code);
        return sqlSession.selectList("selectHouseDistrictsInfoMapByCityCode",parameters);
    }

    public List<Map<String,Object>> getCityAreaHouseAvgMaxMinCount(String city_code){
        Map<String,Object> parameters = new HashMap<>();
        parameters.put("city_code",city_code);
        return sqlSession.selectList("selectHouse_CityAreaHouseAvgMaxMinCount",parameters);
    }

    public List<Map<String,Object>> getCityAreaStreetHouseAvgMaxMinCount(String city_code,String area_code){
        Map<String,Object> parameters = new HashMap<>();
        parameters.put("city_code",city_code);
        parameters.put("area_code",area_code);
        return sqlSession.selectList("selectHouse_CityAreaStreetHouseAvgMaxMinCount",parameters);
    }

    public List<Map<String,Object>> getCityAreaStreetDistrictHouseAvgMaxMinCount(String city_code,String area_code,String street_code){
        Map<String,Object> parameters = new HashMap<>();
        parameters.put("city_code",city_code);
        parameters.put("area_code",area_code);
        parameters.put("street_code",street_code);
        return sqlSession.selectList("selectHouse_CityAreaStreetDistrictHouseAvgMaxMinCount",parameters);
    }






}
