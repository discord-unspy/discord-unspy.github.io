![image](https://user-images.githubusercontent.com/51213244/210503145-2e094329-fd96-4b49-bcc0-ba7f73df9005.png)

Demo: https://korbsstudio.com/w/discordunspy/

# Build and Run
## Prerequisites
- [GCC](https://gcc.gnu.org/install/)
- [Make](https://www.gnu.org/software/make/)
- [Ruby](https://www.ruby-lang.org/en/downloads/)
- [Bridgetown Gem](https://rubygems.org/gems/bridgetown)
- [Node](https://nodejs.org)
- [Yarn](https://yarnpkg.com)

**Install on Ubuntu**
```sh
# Installing Ruby
sudo apt-get install ruby-full ruby-bundler autoconf bison build-essential libssl-dev libyaml-dev libreadline6-dev zlib1g-dev libncurses5-dev libffi-dev libgdbm6 libgdbm-dev libdb-dev

# Installing NodeJS
curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
sudo apt remove cmdtest # this is so we can install Yarn
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt-get update
sudo apt-get install -y nodejs yarn
```

**Installing on Fedora**
```sh
sudo dnf install ruby ruby-devel git-core zlib zlib-devel gcc-c++ patch readline-devel libyaml-devel libffi-devel openssl-devel make bzip2 autoconf automake libtool bison curl sqlite-devel nodejs nodejs-devel nodejs-yarn
```

## Download and Run
```sh
git clone https://github.com/discord-unspy/website/
cd website
yarn install
sudo bundle install
```

> Learn more: [Bridgetown Getting Started Documentation](https://www.bridgetownrb.com/docs/).

## Development
To start the website in development mode, run `bin/bridgetown start` and navigate to [localhost:4000](https://localhost:4000/)!

### Commands
```sh
# Run locally at http://localhost:4000/
bin/bridgetown start

# Build & Deploy to Production
bin/bridgetown deploy

# Load up the website in Ruby Console (IRB)
bin/bridgetown console
```

> The Font Awesome Kit provided is now domain restricted, so please view on `localhost` instead of `127.0.0.1`. [Learn More](https://fontawesome.com/v6/docs/web/setup/use-kit#kits-and-pageviews)

> Learn more: [Bridgetown CLI Documentation](https://www.bridgetownrb.com/docs/command-line-usage)
