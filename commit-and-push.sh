git add .
echo "Adding current files to our git repository"
echo

echo "kindly add your git message: "
read varname
git commit -m "$varname"
echo "files currently commited to the stage area"
echo

git push
echo "pushing  files to the repository..."
echo "files pushed successfully!!"


