
* revert back to older or previous commits

         git checkout <commit> <file>
* revert back to older or previous commits

         git checkout <commit> <file>
* revert back to older or previous commits

         git checkout <commit> <file># Some Global Configuration for Git

	Open a cmd window or terminal on your computer.

* Check to make sure that Git is installed and available on the command line, by typing the
  following at the command prompt:

         git --version

* To configure your user name to be used by Git, type the following at the prompt:

         git config --global user.name "Your Name"

* To configure your email to be used by Git, type the following at the prompt:
 
         git config --global user.email <your email address>

* You can check your default Git global configuration, you can type the following at the prompt:
	
	 git config --list

* See a brief log of commits you've made

	 git log --oneline

* revert back to older or previous commits or version of a file

         git checkout <commit> <file>

* undo checking out into older commits

	 git reset HEAD <file>
	 git checkout -- <file>


* Setting up an Online Git repository

	Sign up for an account either at Bitbucket (https://bitbucket.org) or GitHub (https://github.com).

	Then set up an online Git repository named git-test. Note the URL of your online Git repository. Note that private repositories on GitHub requires a paid account, and is not available for free accounts.

* Set the local Git repository to set its remote origin
  At the prompt, type the following to set up your local repository to link to your online Git repository:
	
	git remote add origin <repository URL>

* Pushing your commits to the online repository
  At the prompt, type the following to push the commits to the online repository:

	git push -u origin master

* Cloning an online repository
To clone an online repository to your computer, type the following at the prompt:

	git clone <repository URL>

