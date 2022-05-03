-- this file is just for testing my queries in the terminal beforehand

SELECT * FROM department;

-- example query for showing all roles
    SELECT role.id, role.title, department.department_name, role.salary
    FROM role 
    JOIN department  
    ON role.department_id = department.id;

-- example query for showing manager names 
SELECT employee.id, employee.first_name, employee.last_name, concat(manager.first_name, " ", manager.last_name) AS manager
FROM employee as employee
LEFT JOIN employee as manager
ON employee.manager_id = manager.id;

-- ALL EMPLOYESS TABLE QUERY
SELECT employee.id, employee.first_name, employee.last_name, role.title, department.department_name AS department, role.salary, concat(manager.first_name, " ", manager.last_name) AS manager
FROM employee 
JOIN role 
ON employee.role_id = role.id
JOIN department 
ON role.department_id = department.id
LEFT JOIN employee as manager
ON employee.manager_id = manager.id;


-- -- example query to add a department 
INSERT INTO department (department_name)
VALUES ("Finance");

SELECT * FROM department;

INSERT INTO role (title, salary, department_id)
VALUES ("Lead Chemist", 95000, 3);

SELECT * FROM role;

SELECT (department_name) from department;

