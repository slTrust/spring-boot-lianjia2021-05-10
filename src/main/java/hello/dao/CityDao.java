package hello.dao;

import hello.entity.City;
import org.apache.ibatis.session.SqlSession;
import org.springframework.stereotype.Service;

import javax.inject.Inject;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class CityDao {
    private final SqlSession sqlSession;

    @Inject
    public CityDao(SqlSession sqlSession) {
        this.sqlSession = sqlSession;
    }

    public List<City> getCites() {
        return sqlSession.selectList("selectCites");
    }

    public City getCityByCode(String code) {
        Map<String, Object> parametersCity = new HashMap<>();
        parametersCity.put("code", code);
        return sqlSession.selectOne("selectCityIdByCode", parametersCity);
    }
}
