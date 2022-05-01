    SELECT department.id, department.department_name, role.title, role.salary
    FROM role 
    JOIN department  ON role.department_id = department.id; 