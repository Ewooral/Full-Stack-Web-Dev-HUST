# Install Tailwind CSS

Install tailwindcss via npm, and create
your tailwind.config.js file.

    npm install -D tailwindcss
    npx tailwindcss init

- Installing Tailwind CSS as a PostCSS plugin is the most seamless
  way to integrate it with build tools like `webpack, Rollup, Vite, and Parcel`.

        npm install -D tailwindcss postcss autoprefixer
        npx tailwindcss init -p

# Configure your template paths

Add the paths to all of your template files in your
`tailwind.config.js` file.

    module.exports = {
       content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
       theme: {
         extend: {},
       },
       plugins: [],
    }

# Add the Tailwind directives to your CSS

- Add the @tailwind directives for each of
  Tailwind’s layers to your main CSS file.

  @tailwind base;
  @tailwind components;
  @tailwind utilities;

# Start the Tailwind CLI build process(this is not for react or other frameworks that use webpack)

- Run the CLI tool to scan your template files
  for classes and build your CSS.
  npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch

## Bonus

- Enable VScode autocomplete for CSS files

If you have PostCSS Language Support
installed add the following config
in your settings.

    "emmet.includeLanguages": {
        "postcss": "css"
      }
