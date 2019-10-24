USE employee_DB;

CREATE TABLE department(
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO department (name)
VALUES ("Software Engineer");
