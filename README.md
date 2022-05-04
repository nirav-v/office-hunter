# office-hunter

Office hunter is a command line application that allows the user to manage data on all the employees and job roles inside of their compnay. It is built with Node.js, Inquirer, and MySQL.

Link to Video Demo: https://drive.google.com/file/d/1c_k5d46oFNbnll291Y1cKkuSXlz77eQD/view?usp=sharing

Steps for use:
1. Open server.js in the integrated terminal
2. npm install all the package dependencies in the package.json file. This should include figlet, MySQL2, and the inquirer packages.
3. Log in to MySQL in the command line by typing: mysql -u root -p
4. When logged into MySQL, run the schema.sql file in the db folder by typing: source db/schema.sql;
5. Next, run the seeds.sql file in order to populate the database with some initial employees and roles data by typing: source db/seeds.sql;
6. Quit MySQL by typing: quit
7. Lastly, start running the application by typing: npm start
8. You're ready to go! Follow the command line prompts to manage your company's database!


![Screen Shot 2022-05-03 at 6 13 14 PM](https://user-images.githubusercontent.com/98481913/166611044-d3d626c7-cd4a-4079-b019-72ecd70705f8.png)
