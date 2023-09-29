# SET UP NODE VERSION MANAGER - NVM

### STEP 1

    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
    or

    wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash

    STEP 2.

### STEP 2

- After running the above commands, it's time to add a variable to your bash command. Normally, it was located from these file paths:

  ~/.bash_profile
  ~/.zshrc
  ~/.profile
  ~/.bashrc

- Using nano or vim, open one of the files above. For example i will be using ~/.bash_profile

  nano ~/.bash_profile

- Then paste the code below, then hit crtl + o + enter then ctrl + x to close the file.

  export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
  [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm

- Then source ~/.bash_profile to set up environment for NVM:

  source ~/.bash_profile

### STEP 3

- To check the available lists of available node version that you can use. Type this command.

  nvm ls-remote

- You will see a long lists of available version up-to the latest. Something like this below:

...
v14.14.0
v14.16.0 (LTS: Fermium)
v14.16.1 (LTS: Fermium)
v14.17.0 (Latest LTS: Fermium)
v15.0.0
v15.0.1
v16.0.0
v16.1.0
v16.2.0

- NVM can install any of these versions available in the list. For example, to install version v16.2.0, type:

  nvm install v16.2.0
  OR
  nvm install node

- To install the latest stable version, type:

  nvm install stable

- To switch to any version installed by nvm.

  nvm use v15.0.1

# Node JS

allows us to bring the power of Javascript to the
desktop

- it is a javascript runtime built on Chrome V8
  javascript engine

- it uses an event-driven, non-blocking i/o model

* makes it lightweight and efficient

# Architecture of NodeJS

- Node core/ Standard library (JS)
- Node Bindings (c++)
- Chrome V8(c++), libuv(c)

# Node Package Manager

- NPM for short, manages the ecosystem of node modules / packages
- A package contains:
  JS files
  package.json(manifest)

# Package.json

- serves as a documentation for what packages your project depends on
- allows you to specify the versions of a package that your project can use using
  semantic versioning rules
- makes your build reproducible which means that it's way easier to share with other developers

### Start a new Project

- initialise package.json file for your project

  npm init

- To install an npm package on which your project is directly dependent on use:

  npm install <package name> --save-dev
