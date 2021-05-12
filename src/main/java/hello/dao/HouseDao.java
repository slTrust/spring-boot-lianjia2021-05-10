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

    public List<String> getStreetDistricts(String street_code){
        Map<String,Object> parameters = new HashMap<>();
        parameters.put("street",street_code);
        return sqlSession.selectList("selectHouseDistrictsByStreetCode",parameters);
    }

    public List<Street> getStreets(){
        return sqlSession.selectList("selectStreets");
    }
}
