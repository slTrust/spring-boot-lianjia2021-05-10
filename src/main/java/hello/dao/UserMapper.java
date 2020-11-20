package hello.dao;

import hello.entity.User;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

@Mapper
public interface UserMapper {
    @Select("SELECT * FROM user WHERE username = #{username}")
    User findUserByUsername(@Param("username") String username);

    @Insert("insert into user(username,encrypted_password,created_at,updated_at) " +
            "values(#{username},#{encrypted_password},now(),now())")
    void save(@Param("username") String username,@Param("encrypted_password")  String encrypted_password );


    @Select("SELECT * FROM user WHERE id = #{id}")
    User getUserById(@Param("id")Integer id);
}