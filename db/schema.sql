DROP DATABASE IF EXISTS department_DB;
CREATE DATABASE department_DB;

USE department_DB;

CREATE TABLE department (
  id INTEGER(2) AUTO_INCREMENT NOT NULL,
  names VARCHAR(30) NULL,
  PRIMARY KEY (id)
);

CREATE TABLE role (
  id INTEGER(2) AUTO_INCREMENT NOT NULL,
  title VARCHAR(30) NULL,
  salary DECIMAL(8,2) NULL,
  department_id INT NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE employee (
  id INTEGER(2) AUTO_INCREMENT NOT NULL,
  first_name VARCHAR(30) NULL,
  last_name VARCHAR(30) NULL,
  role_id INT NOT NULL,
  manager_id INT NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO department (name)
VALUES ("sales");

INSERT INTO department (name)
VALUES ("engineer");

INSERT INTO department (name)
VALUES ("legal");

INSERT INTO department (name)
VALUES ("finance");

INSERT INTO role (title, salary, department_id, id)
VALUES ("salesperson", 50000, 1);

INSERT INTO role (title, salary, department_id, id)
VALUES ("developer", 60000, 2);

INSERT INTO role (title, salary, department_id, id)
VALUES ("lawyer", 80000, 3);

INSERT INTO role (title, salary, department_id, id)
VALUES ("accountant", 75000, 4);

INSERT INTO role (title, salary, department_id, id)
VALUES ("salesperson", 50000, 1);

INSERT INTO employee (firstname, lastname, role_id, manager_id)
VALUES ("kim", "fields", 1, 0);

INSERT INTO employee (firstname, lastname, role_id, manager_id)
VALUES ("jim", "jones", 2, 0);

INSERT INTO employee (firstname, lastname, role_id, manager_id)
VALUES ("jake", "foster", 3, 0);

INSERT INTO employee (firstname, lastname, role_id, manager_id)
VALUES ("julie", "brown", 4, 0);

INSERT INTO employee (firstname, lastname, role_id, manager_id)
VALUES ("peter", "white", 1, 0);

INSERT INTO employee (firstname, lastname, role_id, manager_id)
VALUES ("john", "james", 2, 2);