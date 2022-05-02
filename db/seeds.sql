-- seeding some values in the department tables
INSERT INTO department (department_name)
VALUES ("Sales"),
        ("Legal"),
        ("Engineering");

-- seeding some values in the role table
INSERT INTO role (title, salary, department_id)
VALUES ("Sales Lead", 100000, 1),
        ("Sales Intern", 50000, 1),
        ("Lawyer", 250000, 2);

-- seeding some values into the employee table
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Billy", "Johnson", 2, null),
        ("Walter", "White", 1, null),
        ("Saul", "Goodman", 2, 1);
   
