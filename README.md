OOP SVG DESIGNER

Description
This command-line application allows freelance web developers to generate simple logos for their projects without needing a graphic designer. Users can specify text, text color, shape, and shape color to create an SVG file that meets their criteria.

User Story
As a freelance web developer,
I want to generate a simple logo for my projects
so that I don't have to pay a graphic designer.

Acceptance Criteria
Given a command-line application that accepts user input,
When prompted for text, the user can enter up to three characters.
When prompted for text color, the user can enter a color keyword or a hexadecimal number.
When prompted for a shape, the user is presented with a choice of circle, triangle, or square.
When prompted for the shape's color, the user can enter a color keyword or a hexadecimal number.
Once all prompts are answered, an SVG file named logo.svg is created.
The command line displays the message "Generated logo.svg".
When the logo.svg file is opened in a browser, a 300x200 pixel image matching the specified criteria is displayed.

Installation
Clone the repository and navigate to the project directory.


git clone https://github.com/KimCBNS/oop-svg-designer

Install dependencies using npm:

npm install

Usage
To run the application, use the following command:

node index.js
Follow the prompts to enter text, text color, shape, and shape color. Once all inputs are provided, check the project directory for the generated logo.svg file.

Technologies Used
Node.js
Inquirer (for command-line prompts)

ISSUES
The tests with Jest are not operational at this time. They will be added at a later date.

License
This project is licensed under the MIT License - see the LICENSE file for details.

Contact
For questions, reach out to Kim via email: desveaux.kim@gmail.com

URL of video walkthrough: 
