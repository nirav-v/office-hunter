-- this file is just for testing my queries in the terminal beforehand

SELECT * FROM department;

-- example query for showing all roles
    SELECT role.id, role.title, department.department_name, role.salary
    FROM role 
    JOIN department  
    ON role.department_id = department.id;

-- example query for showing all employees, 

SELECT employee.id, employee.first_name, employee.last_name, role.title, role.salary, department.department_name, employee.manager_id
FROM employee 
JOIN role 
ON employee.role_id = role.id
JOIN department 
ON role.department_id = department.id;

-- -- example query to add a department 
-- INSERT INTO department (department_name)
-- VALUES (answers.department)
