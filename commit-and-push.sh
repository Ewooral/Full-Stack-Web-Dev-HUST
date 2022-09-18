git add .
echo "Adding current files to git repository"
echo

echo "kindly add your git commit message: "
read varname
git commit -m "$varname"
echo "files currently commited to the stage area"
echo

git push
echo "pushing  files to the repository..."
echo "files pushed successfully!!"


