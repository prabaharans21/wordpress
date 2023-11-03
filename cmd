sudo kill -9 $(sudo lsof -t -i:9001)

sudo update-alternatives --config php

sudo a2dismod php8.1
sudo a2enmod php7.3
sudo service apache2 restart


sudo apt-get install -y php7.3-cli php7.3-json php7.3-common php7.3-mysql php7.3-zip php7.3-gd php7.3-mbstring php7.3-curl php7.3-xml php7.3-bcmath


-------------------------------------
sudo apt-get update
sudo apt -y install software-properties-common
sudo add-apt-repository ppa:ondrej/php
sudo apt-get update
sudo apt -y install php7.4
php -v
sudo apt-get install -y php7.4-cli php7.4-json php7.4-common php7.4-mysql php7.4-zip php7.4-gd php7.4-mbstring php7.4-curl php7.4-xml php7.4-bcmath
php -m


--------------------
php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
php -r "if (hash_file('sha384', 'composer-setup.php') === '756890a4488ce9024fc62c56153228907f1545c228516cbf63f885e036d37e9a59d27d63f46af1d4d07ee0f76181c7d3') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"
php composer-setup.php
php -r "unlink('composer-setup.php');"

php composer.phar --version


sudo mv composer.phar /usr/local/bin/composer

mv composer.phar ~/.local/bin/composer

composer --version

composer init

#----------------------------
#change php config
sudo vim /etc/php7.3/apache2/php.ini / sudo vim /etc/php/7.3/cli/php.ini

sudo service apache2 restart
sudo service php7.3-fpm restart
#----------------------------
