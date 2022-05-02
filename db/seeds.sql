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
INSERT INTO employee (id, first_name, last_name, manager_id)
VALUES (1, "Billy", "Johnson", null),
        (2, "Walter", "White", null),
        (3, "Saul", "Goodman", 2),
        (4, "Dan", "Derper", 1),
        (5, "Jose", "Chris", null),
        (6, "Barry", "Guy", 2);

   
