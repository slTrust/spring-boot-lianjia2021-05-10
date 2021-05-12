package hello.entity;

import java.util.List;

public class Node {
    private Long id;
    private Long pid;
    private String name;
    private String code;
    private List<Node> children;

    public Node() {
    }

    public Node(Long id, Long pid, String name, String code, List<Node> children) {
        this.id = id;
        this.pid = pid;
        this.name = name;
        this.code = code;
        this.children = children;
    }


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getPid() {
        return pid;
    }

    public void setPid(Long pid) {
        this.pid = pid;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public List<Node> getChildren() {
        return children;
    }

    public void setChildren(List<Node> children) {
        this.children = children;
    }
}
