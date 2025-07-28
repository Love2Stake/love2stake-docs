# Building a Cardano Node

This guide will explain how to build a Cardano Node using the <a href="github.com/Love2Stake/love2automate-ada">Love2Automate</a> tool and should be followed after completing an installation of Ubuntu Server 22.04+.

### 1. Installing Ansible, required collections, and set system PATH
This code block will update packages, install Ansible using pip3, set system PATH, and install required collected required to run <a href="https://github.com/Love2Stake/love2automate-ada">Love2Automate</a>: 
```bash
# Update package index to ensure we get the latest versions of packages
sudo apt update

# Install latest ansible
sudo apt install python3-pip
pip3 install --user ansible

# Add to path
echo 'export PATH="$HOME/.local/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc

# Install required collections
ansible-galaxy collection install community.general
ansible-galaxy collection install ansible.posix
```

### 2. Installing Love2Automate
This will download the latest release of Love2Automate from the <a href="https://github.com/Love2Stake/love2automate-ada">Love2Automate repository</a> and ensure it becomes an executable:
```bash
# Download the latest release tar.gz and extract it
curl -sL "https://github.com/Love2Stake/love2automate-ada/archive/refs/tags/$(curl -s https://api.github.com/repos/Love2Stake/love2automate-ada/releases/latest | grep -oP '"tag_name": "\K(.*)(?=")').tar.gz" -o love2automate-ada.tar.gz

# Extract the tar.gz
tar -xzf love2automate-ada.tar.gz

# Make the extracted file executable (assumes only one file in the archive)
chmod +x "$(tar -tzf love2automate-ada.tar.gz | head -n 1)"
```

### 3. Running Love2Automate
1. This command will pull all Ansible playbooks from the <a href="https://github.com/Love2Stake/love2automate-ada">Love2Automate GitHub repository</a> and store them in ```/opt/love2automate-ada/```
    ```bash
    # sudo is REQUIRED for this command
    ./love2automate-ada --setup
    ```

2. This command will begin building the Cardano Node using the Ansible playbooks that were pulled from the <a href="https://github.com/Love2Stake/love2automate-ada">repository</a>
    ```bash
    ./love2automate-ada --install cardano-node
    ```