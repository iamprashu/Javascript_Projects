# Digital Clock

This project is a fully functional digital clock built using JavaScript, HTML, and CSS. It displays the current time and date in a visually appealing format and includes a light/dark mode toggle for user convenience.

## Features

- **Real-Time Clock**: Displays the current time in hours, minutes, and seconds.
- **Date Display**: Shows the current day, month, and year.
- **Light/Dark Mode**: Switch between light and dark themes with a single click.
- **Responsive Design**: Works seamlessly on different screen sizes.
- **Blinking Separator**: The colon between hours and minutes blinks every second for a dynamic effect.

## Technologies Used

- **HTML**: Provides the structure of the clock.
- **CSS**: Handles the styling and layout, including animations and transitions.
- **JavaScript**: Implements the logic for real-time updates and theme switching.

## How to Use

1. Clone the repository:
   ```bash
   git clone https://github.com/iamprashu/Javascript_Projects.git
   ```
2. Navigate to the `DigitalClock` directory:
   ```bash
   cd Javascript_Projects/DigitalClock
   ```
3. Open the `index.html` file in your browser.
4. Use the buttons to toggle between light and dark modes.
5. Enjoy the real-time clock and date display.

## Editing the Project

To edit the project and recompile the Tailwind CSS:

1. Install Tailwind CSS:
   ```bash
   npm install -D tailwindcss
   ```
2. Make changes to the Tailwind configuration or source files.
3. Recompile the CSS:
   ```bash
   npx tailwindcss -i TailwindEntry.css -o TailwindCompiled.css --watch
   ```

## Project Structure

- `index.html`: The main HTML file containing the structure of the clock.
- `App.js`: JavaScript file for clock functionality and theme switching.
- `TailwindCompiled.css`: CSS file for styling, compiled from Tailwind CSS.

## License

This project is licensed under the MIT License.
