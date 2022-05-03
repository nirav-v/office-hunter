-- seeding some values in the department tables
INSERT INTO department (id, department_name)
VALUES (1, "Sales"),
        (2, "Legal"),
        (3, "Engineering");

-- seeding some values in the role table
INSERT INTO role (id, title, salary, department_id)
VALUES (1, "Sales Lead", 100000, 1),
        (2, "Sales Intern", 50000, 1),
        (3, "Lawyer", 250000, 2),
        (4, "Lead Engineer", 300000, 3);

-- seeding some values into the employee table
INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (1, "Billy", "Johnson", 3, null),
        (2, "Walter", "White",  4, null),
        (3, "Saul", "Goodman", 3, 2),
        (4, "Dan", "Derper", 2, 1),
        (5, "Jose", "Chris", 4, null),
        (6, "Barry", "Guy", 4, 2);

   
