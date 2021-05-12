package hello.dao;

import hello.entity.Area;
import hello.entity.City;
import org.apache.ibatis.session.SqlSession;
import org.springframework.stereotype.Service;

import javax.inject.Inject;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class AreaDao {
    private final SqlSession sqlSession;

    @Inject
    public AreaDao(SqlSession sqlSession) {
        this.sqlSession = sqlSession;
    }

    public List<Area> getCityAreas(String city_code){
        Map<String,Object> parametersCity = new HashMap<>();
        parametersCity.put("code",city_code);
        City city = sqlSession.selectOne("selectCityIdByCode",parametersCity);
        Map<String,Object> parametersArea = new HashMap<>();
        parametersArea.put("cid",city.getId());
        return sqlSession.selectList("selectAreasByCid",parametersArea);
    }

    public List<Area> getAreas(){
        return sqlSession.selectList("selectAreas");
    }

    public Area getAreaByCode(String area_code){
        Map<String,Object> parametersCity = new HashMap<>();
        parametersCity.put("code",area_code);
        Area area = sqlSession.selectOne("selectAreaByCode",parametersCity);
        return area;
    }
}
