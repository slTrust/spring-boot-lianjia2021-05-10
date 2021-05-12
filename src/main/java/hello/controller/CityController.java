package hello.controller;

import hello.entity.result.CommonResult;
import hello.service.CityService;
import org.springframework.web.bind.annotation.*;

import javax.inject.Inject;

@RestController
@RequestMapping("cities")
public class CityController {
    private CityService cityService;

    @Inject
    public CityController(CityService cityService) {
        this.cityService = cityService;
    }

    @GetMapping("")
    public CommonResult getCitys(){
        return cityService.getCites();
    }

    @GetMapping("/{code}")
    public CommonResult getCityByCode(@PathVariable("code") String code) {
        return cityService.getCityByCode(code);
    }

    @GetMapping("/{code}/areas")
    public CommonResult getCityAreas(@PathVariable("code") String code) {
        return cityService.getCityAreas(code);
    }
}
