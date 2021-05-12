package hello.entity.result;

import hello.entity.User;

public class LoginResult extends Result<User> {
    boolean isLogin;

    protected LoginResult(String status, String msg, User user, boolean isLogin) {
        super(status, msg, user);
        this.isLogin = isLogin;
    }

    public static LoginResult success(String msg, boolean isLogin) {
        return new LoginResult("ok", msg, null, isLogin);
    }

    public static LoginResult success(String msg, boolean isLogin, User user) {
        return new LoginResult("ok", msg, user, isLogin);
    }

    public static LoginResult failure(String msg) {
        return new LoginResult("fail", msg, null, false);
    }


    public boolean getIsLogin() {
        return isLogin;
    }
}
