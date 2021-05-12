package hello.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import java.time.Instant;

public class Area {
    private long id;
    private long cid;
    private String name;
    private String code;
    @JsonIgnore
    private Instant updatedAt;
    @JsonIgnore
    private Instant createdAt;

    public Area(long id, long cid, String name, String code, Instant updatedAt, Instant createdAt) {
        this.id = id;
        this.cid = cid;
        this.name = name;
        this.code = code;
        this.updatedAt = updatedAt;
        this.createdAt = createdAt;
    }

    public long getCid() {
        return cid;
    }

    public void setCid(long cid) {
        this.cid = cid;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
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

    public Instant getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(Instant updatedAt) {
        this.updatedAt = updatedAt;
    }

    public Instant getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Instant createdAt) {
        this.createdAt = createdAt;
    }
}