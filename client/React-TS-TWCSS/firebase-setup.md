# Firebase
is a suite of tools provided by Google that provides backend services like, hosting, authentication and many more.

# Add project
You can choose to enable or disable the google analytics button

# Build -> Firestore database
- click it to create a new database
- select start in test mode if you're just working on school projects
- don't focus on location that much. Click on enable

* correct firebase rules complaint emails(`it should not be done in production`)
- click on firebase database -> rules section 
- clean every thing in between:

        match/{document=**}{
        
        }
        except: allow read, write;

        match/{document=**}{
         allow read, write;
        }
    
- publish 


# Build -> Authentication

- click on get started
- click on sign-in method section
- click on email/password and enable and save it



# Register App
- Click on project settings icon at the top part of the sidebar
- scroll down and click on the code icon (</>)
- click on register app, set name and tick option beneath it to enable deploying the app
- next install firebase cli in your project
❯ npm install -g firebase-tools      
- skip the deploy to firebase step and click on the button below to register app
- click on config and copy the codes you see