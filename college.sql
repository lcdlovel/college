SET NAMES UTF8;
DROP DATABASE IF EXISTS college;
CREATE DATABASE college CHARSET=UTF8;
USE college;

/*******创建省市级联以及学校的表*******************/

CREATE TABLE college_list(
	sid INT PRIMARY KEY AUTO_INCREMENT,
	province VARCHAR(16),						#该校所在的省份
	city VARCHAR(16),								#该校所在的城市
	sname VARCHAR(16)							  #该校的名称
);
/***************轮播图的图片表**********************/
CREATE TABLE banner(
	sid INT PRIMARY KEY AUTO_INCREMENT,
	banner1 VARCHAR(24),
	banner2 VARCHAR(24),
	banner3 VARCHAR(24),
	banner4 VARCHAR(24)
);
/********首页的学校信息表**********************/
CREATE TABLE user(
	uid   INT PRIMARY KEY AUTO_INCREMENT,
	uname VARCHAR(16),
	upwd  VARCHAR(16),
	email VARCHAR(24),
	phone VARCHAR(16)
);

/********************************
**********数据的导入*************
********************************/

/************创建省市级联以及学校的信息表********/
INSERT INTO college_list VALUES(1,"北京市","北京市","北京大学");
INSERT INTO college_list VALUES(2,"北京市","北京市","清华大学");
INSERT INTO college_list VALUES(3,"上海市","上海市","上海交通大学");
INSERT INTO college_list VALUES(4,"上海市","上海市","复旦大学");
INSERT INTO college_list VALUES(5,"重庆市","重庆市","重庆大学");
INSERT INTO college_list VALUES(6,"重庆市","重庆市","西南大学");
INSERT INTO college_list VALUES(7,"天津市","天津市","天津大学");
INSERT INTO college_list VALUES(8,"天津市","天津市","南开大学");
INSERT INTO college_list VALUES(9,"河北省","郑州","郑州大学");
INSERT INTO college_list VALUES(10,"河北省","郑州","解放军信息工程大学");
INSERT INTO college_list VALUES(11,"河北省","邯郸","邯郸大学");
INSERT INTO college_list VALUES(12,"山西省","太原","太原理工");
INSERT INTO college_list VALUES(13,"辽宁省","辽宁","辽宁大学");
INSERT INTO college_list VALUES(14,"辽宁省","大连","大连理工大学");
INSERT INTO college_list VALUES(15,"吉林省","吉林","吉林大学");
INSERT INTO college_list VALUES(16,"吉林省","长春","长春师范大学");
INSERT INTO college_list VALUES(17,"黑龙江省","哈尔滨","哈尔滨工业大学");
INSERT INTO college_list VALUES(18,"黑龙江省","哈尔滨","哈尔滨工程大学");
INSERT INTO college_list VALUES(19,"江苏省","南京","河海大学");
INSERT INTO college_list VALUES(20,"江苏省","南京","南京大学");
INSERT INTO college_list VALUES(21,"江苏省","南京","东南大学");
INSERT INTO college_list VALUES(22,"江苏省","南京","南京信息工程大学");
INSERT INTO college_list VALUES(23,"江苏省","扬州","扬州大学");
INSERT INTO college_list VALUES(24,"浙江省","杭州","浙江大学");
INSERT INTO college_list VALUES(25,"浙江省","杭州","浙江理工大学");
INSERT INTO college_list VALUES(27,"浙江省","宁波","宁波大学");
INSERT INTO college_list VALUES(28,"安徽省","合肥","中国科技大学");
INSERT INTO college_list VALUES(29,"安徽省","合肥","合肥大学");
INSERT INTO college_list VALUES(30,"安徽省","淮南","安徽理工大学");

/****************学校轮播图的信息录入*************************/

INSERT INTO banner VALUES(1,"img/01/01_ban1.jpg","img/01/01_ban2.jpg","img/01/01_ban3.jpg","img/01/01_ban4.jpg");
INSERT INTO banner VALUES(2,"img/02/02_ban1.jpg","img/02/02_ban2.jpg","img/02/02_ban3.jpg","img/02/02_ban4.jpg");
INSERT INTO banner VALUES(3,"img/03/03_ban1.jpg","img/03/03_ban2.jpg","img/03/03_ban3.jpg","img/03/03_ban4.jpg");
INSERT INTO banner VALUES(4,"img/04/04_ban1.jpg","img/04/04_ban2.jpg","img/04/04_ban3.jpg","img/04/04_ban4.jpg");
INSERT INTO banner VALUES(5,"img/05/05_ban1.jpg","img/05/05_ban2.jpg","img/05/05_ban3.jpg","img/05/05_ban4.jpg");
INSERT INTO banner VALUES(6,"img/06/06_ban1.jpg","img/06/06_ban2.jpg","img/06/06_ban3.jpg","img/06/06_ban4.jpg");
INSERT INTO banner VALUES(7,"img/07/07_ban1.jpg","img/07/07_ban2.jpg","img/07/07_ban3.jpg","img/07/07_ban4.jpg");
INSERT INTO banner VALUES(8,"img/08/08_ban1.jpg","img/08/08_ban2.jpg","img/08/08_ban3.jpg","img/08/08_ban4.jpg");



/**********************用户信息的录入*************************/
INSERT INTO user VALUES(1,"夜魅","lm324711","2433279134@qq.com",'17502532824');
INSERT INTO user VALUES(2,"lovel","ml123456","1352907520@qq.com",'18130130704');
INSERT INTO user VALUES(3,"DM","ml324711","1731847515@qq.com",'15855085694');
INSERT INTO user VALUES(4,"game","gdc123456","1532153123@qq.com",'13865262810');