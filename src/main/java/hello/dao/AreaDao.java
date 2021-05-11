package hello.dao;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface AreaDao {
    @Select("select DISTINCT area from app_house where city = #{city_code}")
    List<String> getAreaByCityCode(@Param("city_code") String  city_code);
}
