create table user(
  id bigint primary key auto_increment,
  username varchar(10) unique ,
  encrypted_password varchar(100),
  avatar varchar(100),
  created_at datetime,
  updated_at datetime
)ENGINE=InnoDB  DEFAULT CHARSET=utf8mb4 AUTO_INCREMENT=1;
