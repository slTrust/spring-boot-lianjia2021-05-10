package hello.controller;

import hello.entity.result.CommonResult;
import hello.service.HouseGraphService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.inject.Inject;

@RestController
@RequestMapping("house_graph")
public class HouseGraphController {
    private HouseGraphService houseGraphService;

    @Inject
    public HouseGraphController(HouseGraphService houseGraphService) {
        this.houseGraphService = houseGraphService;
    }

    @GetMapping("/{city_code}/graph")
    public CommonResult x(@PathVariable("city_code") String city_code){
        return houseGraphService.getHouseGraphByCityCode(city_code);
    }

    @GetMapping("/{city_code}/pie_area_house")
    public CommonResult getCityAreaHouseAvgPrice(@PathVariable("city_code") String city_code){
        return houseGraphService.getCityAreaHouseAvgMaxMinCount(city_code);
    }

}
