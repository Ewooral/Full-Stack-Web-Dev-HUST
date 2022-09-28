# Install Tailwind CSS
Install tailwindcss via npm, and create
your tailwind.config.js file.

    npm install -D tailwindcss
    npx tailwindcss init

# Configure your template paths
Add the paths to all of your template files in your
`tailwind.config.js` file.

    module.exports = {
       content: ["./src/**/*.{html,js}"],
       theme: {
         extend: {},
       },
       plugins: [],
    }  

# Add the Tailwind directives to your CSS
* Add the @tailwind directives for each of 
  Tailwind’s layers to your main CSS file.

	@tailwind base;
	@tailwind components;
	@tailwind utilities;

# Start the Tailwind CLI build process
* Run the CLI tool to scan your template files
  for classes and build your CSS.
	npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
