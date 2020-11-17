package hello.configuration;

import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.ImportResource;

@Configuration
@ImportResource({"classpath*:applicationContext.xml"})
public class XmlConfiguration {
}

// 意思是告诉spring 我们还在使用上古时代的xml配置，就在这个文件你去看一下
// 此时 你不用写任何的new 但是所有的东西装配在一起了，控制权反转了，
// 通过用 spring 容器 对 bean 进行定义 就把所有的bean 都装配好