---
sidebar_position: 2
title: Installation & Setup
---

# Installation & Setup Guide

This guide will help you prepare your system for blockchain staking operations. The requirements vary depending on which network you plan to stake on.

## System Requirements

### **Minimum Hardware Requirements**

**For Ethereum Validator:**
- **CPU**: 4+ cores (Intel i5/AMD Ryzen 5 or better)
- **RAM**: 16GB minimum, 32GB recommended
- **Storage**: 2TB NVMe SSD (grows over time)
- **Network**: Reliable broadband with 25+ Mbps up/down
- **Power**: Uninterruptible Power Supply (UPS) recommended

**For Cardano Pool:**
- **CPU**: 2+ cores
- **RAM**: 8GB minimum, 16GB recommended  
- **Storage**: 100GB+ SSD
- **Network**: Stable internet connection

### **Operating System**
- **Recommended**: Ubuntu 20.04 LTS or 22.04 LTS
- **Alternatives**: Debian, CentOS, or other Linux distributions
- **Not Recommended**: Windows (limited support)

## Essential Software Installation

### **1. Update Your System**
```bash
sudo apt update && sudo apt upgrade -y
```

### **2. Install Required Packages**
```bash
sudo apt install -y curl wget git build-essential software-properties-common
```

### **3. Install Docker (Recommended)**
```bash
# Add Docker repository
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg

echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

# Install Docker
sudo apt update
sudo apt install -y docker-ce docker-ce-cli containerd.io docker-compose-plugin

# Add user to docker group
sudo usermod -aG docker $USER
```

### **4. Install Node.js (Optional, for monitoring tools)**
```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
```

## Network Configuration

### **Firewall Setup**
```bash
# Enable UFW firewall
sudo ufw enable

# Allow SSH (adjust port if changed)
sudo ufw allow 22/tcp

# Ethereum ports
sudo ufw allow 30303/tcp
sudo ufw allow 30303/udp
sudo ufw allow 9000/tcp
sudo ufw allow 9000/udp

# Cardano ports (if running Cardano)
sudo ufw allow 3001/tcp
sudo ufw allow 6000/tcp
```

### **NTP Time Synchronization**
```bash
sudo apt install -y chrony
sudo systemctl enable chrony
sudo systemctl start chrony
```

## Security Hardening

### **SSH Configuration**
```bash
# Generate SSH key pair (if not already done)
ssh-keygen -t ed25519 -C "your_email@example.com"

# Disable password authentication (edit /etc/ssh/sshd_config)
sudo nano /etc/ssh/sshd_config
```

Add or modify these lines:
```
PasswordAuthentication no
PubkeyAuthentication yes
PermitRootLogin no
```

### **Automatic Updates**
```bash
sudo apt install -y unattended-upgrades
sudo dpkg-reconfigure -plow unattended-upgrades
```

## Monitoring Setup

### **Install System Monitoring**
```bash
# Install htop for process monitoring
sudo apt install -y htop

# Install monitoring tools
sudo apt install -y prometheus node-exporter grafana
```

## Storage Configuration

### **SSD Optimization**
```bash
# Check if TRIM is enabled
sudo fstrim -v /

# Add to crontab for weekly TRIM
echo "0 2 * * 0 /sbin/fstrim -av" | sudo crontab -
```

## Backup Strategy

### **Essential Backup Items**
- **Validator Keys**: Critical for staking operations
- **Wallet Seeds**: Recovery phrases for your accounts
- **Configuration Files**: Node settings and parameters
- **SSH Keys**: For secure server access

### **Backup Storage Options**
- Encrypted external drives
- Secure cloud storage (encrypted)
- Hardware security modules (HSMs)
- Multiple geographic locations

## Verification Steps

### **Check Installation**
```bash
# Verify Docker
docker --version
docker compose version

# Check system resources
free -h
df -h
lscpu

# Verify network connectivity
ping -c 4 google.com
```

### **Performance Tuning**
```bash
# Increase open file limits
echo "* soft nofile 65536" | sudo tee -a /etc/security/limits.conf
echo "* hard nofile 65536" | sudo tee -a /etc/security/limits.conf

# Optimize network settings
echo "net.core.rmem_default = 262144" | sudo tee -a /etc/sysctl.conf
echo "net.core.rmem_max = 16777216" | sudo tee -a /etc/sysctl.conf
```

## Next Steps

With your system properly configured, you're ready to proceed with network-specific setup:

- **[Ethereum Setup](../ethereum-eth/node-setup)** - Configure an Ethereum validator
- **[Cardano Setup](../cardano-ada/introduction)** - Set up a Cardano stake pool
- **Security Best Practices** - Advanced security measures (implement proper security practices as outlined above)

## Troubleshooting

### **Common Issues**

**Insufficient Storage**: Ensure you have allocated enough disk space for blockchain data growth.

**Network Connectivity**: Verify firewall rules and ISP restrictions.

**Time Synchronization**: Critical for consensus participation - ensure NTP is working.

**Memory Issues**: Consider increasing swap space if experiencing memory pressure.

---

*A properly configured system is essential for successful staking operations. Take time to verify each step before proceeding.*
