DROP DATABASE IF EXISTS department_DB;
CREATE database department_DB;

USE department_DB;

CREATE TABLE department (
  id INTEGER(2) AUTO_INCREMENT NOT NULL,
  names VARCHAR(30) NULL,
  PRIMARY KEY (id),
);

SELECT * FROM department;

DROP DATABASE IF EXISTS roleDB;
CREATE database roleDB;

USE roleDB;

CREATE TABLE role (
  id INTEGER(2) AUTO_INCREMENT NOT NULL,
  title VARCHAR(30) NULL,
  salary DECIMAL(8,2) NULL,
  department_id INT NOT NULL,
  PRIMARY KEY (id),
);

SELECT * FROM role;

DROP DATABASE IF EXISTS employeeDB;
CREATE database employeeDB;

USE employeeDB;

CREATE TABLE employee (
  id INTEGER(2) AUTO_INCREMENT NOT NULL,
  first_name VARCHAR(30) NULL,
  last_name VARCHAR(30) NULL,
  role_id INT NOT NULL,
  manager_id INT NOT NULL
  PRIMARY KEY (id),
);

SELECT * FROM employee;
