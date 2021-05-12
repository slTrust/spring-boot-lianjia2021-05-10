package hello.dao;

import hello.entity.Area;
import hello.entity.City;
import hello.entity.Street;
import org.apache.ibatis.session.SqlSession;
import org.springframework.stereotype.Service;

import javax.inject.Inject;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class StreetDao {
    private SqlSession sqlSession;

    @Inject
    public StreetDao(SqlSession sqlSession) {
        this.sqlSession = sqlSession;
    }

    public List<Street> getStreetsByAid(long aid){
        Map<String,Object> parametersArea = new HashMap<>();
        parametersArea.put("aid",aid);
        return sqlSession.selectList("selectStreetsByAid",parametersArea);
    }

    public List<Street> getStreets(){
        return sqlSession.selectList("selectStreets");
    }
}
