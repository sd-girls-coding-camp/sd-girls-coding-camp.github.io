# sd-girls-coding-camp.github.io
Camp website

# Build Instructions
There is a file (`src/build.py`) that combines `src/header.include` and `src/footer.include` with all of the `*.html` files in `src`.

DO NOT EDIT HTML FILES OUTSIDE OF `src`! They will be overwritten.

## Step 1: Editing
Edit the HTML files in `src`.  If you need to edit the CSS or JS files, you can do so outside of the `src` directory.

## Step 2: Building
Run `src/build.py` to generate the complete HTML pages.  Please note that JS and CSS file paths are relative to the *generated* HTML.

## Step 3: Testing
As there is no serverside scripting, you can open any of the generated HTML files (NOT the files in `src`) in your web browser to test locally.

## Step 4: Push
Commit and push the changes when you're done.

# Resources
If you are new to webdev, the [slides](http://www.math.ucla.edu/~virtanen/40a.1.15f/schedule/schedule.php) explain basics of building a website well. 
You can also google specific attributes and find more information on them at the [w3schools](http://www.w3schools.com) website. 
