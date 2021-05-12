package hello.controller;

import hello.entity.result.CommonResult;
import hello.service.AreaService;
import org.springframework.web.bind.annotation.*;

import javax.inject.Inject;

@RestController
@RequestMapping("areas")
public class AreaController {
    private AreaService areaService;

    @Inject
    public AreaController(AreaService areaService) {
        this.areaService = areaService;
    }

    @GetMapping("")
    public CommonResult getCityAreas() {
        return areaService.getAreas();
    }

    @GetMapping("/{area_code}")
    public CommonResult getCityAreas(@PathVariable("area_code") String area_code) {
        return areaService.getAreasByCode(area_code);
    }

    @GetMapping("/{area_code}/streets")
    public CommonResult getStreetsByAreaCode(@PathVariable("area_code") String area_code) {
        return areaService.getStreetsByAreaCode(area_code);
    }
}
