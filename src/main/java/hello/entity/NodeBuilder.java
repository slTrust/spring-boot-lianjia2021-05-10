package hello.entity;

import java.util.List;

public final class NodeBuilder {
    private Long id;
    private Long pid;
    private String name;
    private String code;
    private List<Node> children;

    private NodeBuilder() {
    }

    public static NodeBuilder aNode() {
        return new NodeBuilder();
    }

    public NodeBuilder withId(Long id) {
        this.id = id;
        return this;
    }

    public NodeBuilder withPid(Long pid) {
        this.pid = pid;
        return this;
    }

    public NodeBuilder withName(String name) {
        this.name = name;
        return this;
    }

    public NodeBuilder withCode(String code) {
        this.code = code;
        return this;
    }

    public NodeBuilder withChildren(List<Node> children) {
        this.children = children;
        return this;
    }

    public Node build() {
        Node node = new Node();
        node.setId(id);
        node.setPid(pid);
        node.setName(name);
        node.setCode(code);
        node.setChildren(children);
        return node;
    }
}
