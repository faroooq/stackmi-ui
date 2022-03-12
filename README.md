# PROCESS TO RUN UI APPLICATION

Login to server:
1. In server, goto: cd /home/bitnami/
2. Pull the changes from git
3. git pull -> username: faroooq, password: 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
4. npm i if any
5. Build: npm run build:ssr
6. sudo killall node
7. Restart apache: sudo /opt/bitnami/ctlscript.sh restart apache 
8. Start server: forever start dist/server/main.js

# Restart appache
sudo /opt/bitnami/ctlscript.sh restart apache

Note: If deleted the dist folder from server, then need to copy 
templates (mails) folder to dist/server/ directory.

# Restart mongodb only if required
Note: No need to start mongodb database. once you restart the instance it will auto start. but apache needs to start
sudo service mongod restart

# Root
cd /home/bitnami/stackmi/dist/server

# Apache configs for new application
https://docs.bitnami.com/general/infrastructure/lamp/administration/use-htaccess/
https://daily-dev-tips.com/posts/hosting-angular-universal-on-a-server/
Remember: No changes need to the below commented locations.
<!-- /opt/bitnami/apache2/conf/
/opt/bitnami/apache/conf/bitnami -->
Below are newly created files:
------------------------------
/opt/bitnami/apache2/conf/vhosts/stackmi-https-vhost.conf
/opt/bitnami/apache2/conf/vhosts/stackmi-vhost.conf
# project root
/home/bitnami/projects/stackmi/dist/server
# Angular CLI commands
Create Component in specific module:
ng g c academy/home --module learnings

Create Module:
ng g m academy --routing learnings

# Others
Font-Awesome Icons:
https://fontawesome.com/v5.15/icons

Side Navbar:
https://bootstrapious.com/tutorial/sidebar/index5.html

# Git Personal access token
https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token
username: faroooq
password: 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

# Open SSH AWS
ssh -i LightsailDefaultKey-ap-south-1.pem bitnami@15.65.1.254.143

# Issues:
ERR: Certificate invalid error or expired.

https://aws.amazon.com/premiumsupport/knowledge-center/linux-lightsail-ssl-bitnami/

Step 1: Navigate to /opt/bitnami/apache/conf/vhosts/
Step 2: sudo /opt/bitnami/bncert-tool
Step 3: Answer necessary questions

# MongoDB compass client connect:
mongodb://root:3JoUhoD941Yx@65.1.254.143:27017/?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false