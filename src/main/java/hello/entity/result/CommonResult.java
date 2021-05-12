package hello.entity.result;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class CommonResult extends Result<Object> {
    protected CommonResult(String status, String msg, Object data) {
        super(status, msg, data);
    }

    public static CommonResult newListResult(List data) {
        Map<String, Object> map = new HashMap<>();
        map.put("list", data);
        map.put("total", data.size());
        return new CommonResult("ok", "获取成功", map);
    }

    public static CommonResult newSingleResult(Object data) {
        return new CommonResult("ok", "获取成功", data);
    }

    public static CommonResult failure(String message) {
        return new CommonResult("fail", message, null);
    }
}