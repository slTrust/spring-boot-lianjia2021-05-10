package hello.entity;

public abstract class Result<T> {
    String status;
    String msg;
    T data;

//    public static Result failure(String message){
//        return new Result("fail",message,false);
//    }

    protected Result(String status, String msg) {
        this(status,msg,null);
    }

    protected Result(String status, String msg, T data) {
        this.status = status;
        this.msg = msg;
        this.data = data;
    }

    public String getStatus() {
        return status;
    }

    public String getMsg() {
        return msg;
    }

    public T getData() {
        return data;
    }
}

