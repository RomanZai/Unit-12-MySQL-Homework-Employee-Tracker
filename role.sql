USE employee_DB;

CREATE TABLE role(
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL(10,4) NOT NULL,
  department_id INT (10) NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO role (department, salary, department_id )
VALUES ("Software Developer", 80000.00, 1);

INSERT INTO role (department, salary, department_id )
VALUES ("UX/UI", 60000.00, 1);

INSERT INTO role (department, salary, department_id )
VALUES ("Tester", 50000.00, 1);