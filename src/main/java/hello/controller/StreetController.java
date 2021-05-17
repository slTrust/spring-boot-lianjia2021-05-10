package hello.controller;

import hello.entity.result.CommonResult;
import hello.service.StreetService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.inject.Inject;

@RestController
@RequestMapping("streets")
public class StreetController {
    private StreetService streetService;

    @Inject
    public StreetController(StreetService streetService) {
        this.streetService = streetService;
    }

    // 获取所有街道 几乎用不到
    @GetMapping("")
    public CommonResult getStreets() {
        return streetService.getStreets();
    }
}
