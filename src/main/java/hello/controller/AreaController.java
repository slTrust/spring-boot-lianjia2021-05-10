package hello.controller;

import hello.entity.Result;
import hello.service.AreaService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.inject.Inject;
import java.util.List;

@RestController
@RequestMapping("areas")
public class AreaController {
    private AreaService areaService;

    @Inject
    public AreaController(AreaService areaService) {
        this.areaService = areaService;
    }

    @GetMapping("/{city_code}")
    public Object getCityAreas(@PathVariable("city_code") String city_code) {
        List<String> data =areaService.getAreasByCityCode(city_code);
        return data;
    }
}
