DROP DATABASE IF EXISTS employee_DB;

CREATE DATABASE employee_DB;

USE employee_DB;

CREATE TABLE employee(
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT(10) NOT NULL,
  manager_id INT(10),
  PRIMARY KEY (id)
);

INSERT INTO employee (first_name, last_name, role_id, manager_id )
VALUES ("Roman", "Zaikin", 1, 1);
