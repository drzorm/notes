---
title: CentOS 6相关操作
lang: zh-cn
meta:
  - name: CentOS 6相关操作
    content: centos6 eprl node go ngnix ngrok 
---


### EPEL
```shell
# EPEL的全称叫 Extra Packages for Enterprise Linux 。
# EPEL是由 Fedora 社区打造，为 RHEL 及衍生发行版如 CentOS、Scientific Linux 等提供高质量软件包的项目。
# 装上了 EPEL之后，就相当于添加了一个第三方源。
$ sudo yum install epel-release
```

### Node.js
```shell
# 8.x
$ curl --silent --location https://rpm.nodesource.com/setup_8.x | sudo bash -
# 10.x
$ curl --silent --location https://rpm.nodesource.com/setup_10.x | sudo bash -

# install
$ sudo yum -y install nodejs

# optional: install build tools
$ sudo yum install gcc-c++ make
# or: sudo yum groupinstall 'Development Tools'
```

### Ngnix
```shell
# To add NGINX yum repository
# create a file named /etc/yum.repos.d/nginx.repo and paste one of the configurations below:
[nginx]
name=nginx repo
baseurl=http://nginx.org/packages/centos/$releasever/$basearch/
gpgcheck=0
enabled=1

# 安装EPEL
$ sudo yum install epel-release

# install
$ sudo yum install nginx

# start/stop/restart
$ sudo /etc/init.d/nginx start
$ sudo /etc/init.d/nginx stop
$ sudo /etc/init.d/nginx restart

# 默认配置路径
$ /etc/nginx/conf.d/default.conf
# 配置路径
$ /etc/nginx/conf/nginx.conf
```

### 防火墙
```shell
# 开放80端口
$ /sbin/iptables -I INPUT -p tcp --dport 80 -j ACCEPT

# 保存防火墙设置
$ /etc/rc.d/init.d/iptables save

# 查看打开的端口：
$ /etc/init.d/iptables status
```

### 端口占用/进程管理
```
# 查看端口占用
$ netstat -nap | grep 8088
# 查看进程
$ ps 2180
# 杀掉进程
$ kill -9 2180
```

### git
```shell
# 若本來已有安裝git, 須先將之移除
$ sudo yum remove git

# 安裝 epel-release repository 以免找不到必要的相依套件
$ sudo yum install epel-release

# 安裝IUS repository(for RHEL/CentOS 6)：
$ sudo yum install https://centos6.iuscommunity.org/ius-release.rpm

# 安裝 git2u
$ sudo yum install git2u
```


### go
```shell
# install
$ sudo yum install golang

# 验证是否安装成功
$ go version

# 设置go的环境变量
# 在~/.zshrc或~/.bash_profile文件内，加入以下环境变量配置内容： 
export GOPATH=$HOME/go
PATH=$PATH:$HOME/.local/bin:$HOME/bin:$GOPATH/bin

#保存后，重新给sh加载下配置文件：
$ source ~/.zshrc

# 查看是否配置成功
$ go env
```


### ngrok
```shell
# https://aotu.io/notes/2016/02/19/ngrok/index.html
# http://www.racksam.com/2016/12/18/aliyun-centos7-install-ngrok/

# 安装git
# 安装go

# 拉取ngrok的源码
$ mkdir -p ~/go/src/github.com/inconshreveable
$ cd ~/go/src/github.com/inconshreveable
$ git clone https://github.com/inconshreveable/ngrok.git

# 生成自签名证书

$ cd ngrok
$ openssl genrsa -out rootCA.key 2048
$ openssl req -x509 -new -nodes -key rootCA.key -subj "/CN=ngrok.drzorm.win" -days 5000 -out rootCA.pem
$ openssl genrsa -out device.key 2048
$ openssl req -new -key device.key -subj "/CN=ngrok.drzorm.win" -out device.csr
$ openssl x509 -req -in device.csr -CA rootCA.pem -CAkey rootCA.key -CAcreateserial -out device.crt -days 5000

# 替换证书
$ cp rootCA.pem assets/client/tls/ngrokroot.crt
$ cp device.crt assets/server/tls/snakeoil.crt
$ cp device.key assets/server/tls/snakeoil.key

# 服务端程序ngrokd
$ make release-server

# 编译Linux64位版（生成：ngrok/bin/ngrok）
$ make release-client
    
# 编译Mac版 (生成：ngrok/bin/darwin_amd64/ngrok)
$ GOOS=darwin GOARCH=amd64 make release-client
    
# 编译Windows64位版 (生成：ngrok/bin/windows_amd64/ngrok.exe)
$ GOOS=windows GOARCH=amd64 make release-client
    
# 编译Windows32位版 (生成：ngrok/bin/windows_386/ngrok.exe)
$ GOOS=windows GOARCH=386 make release-client

# 成功编译后，会在bin目录下找到ngrokd和ngrok这两个文件
# 我们将ngrokd文件拷贝至~/go/bin目录下，以方便在其他目录内也可以直接通过ngrokd来访问该执行程序。
$ mkdir -p ~/go/bin
$ cp ~/go/src/github.com/inconshreveable/ngrok/bin/ngrokd ~/go/bin

# 运行ngrokd服务
$ ngrokd -domain="ngrok.drzorm.win" -httpAddr=":8088" -httpsAddr=":8089"

# 设置ngrok开机自启
# 添加ngrok自启文件
$ nano /etc/init.d/ngrok
# 填入一下内容
ngrokd -tlsKey=/root/go/src/github.com/inconshreveable/ngrok/assets/server/tls/snakeoil.key -tlsCrt=/root/go/src/github.com/inconshreveable/ngrok/assets/server/tls/snakeoil.crt -domain=ngrok.drzorm.win -httpAddr=:8088 -httpsAddr=:8089 -tunnelAddr=:4443 > /root/go/src/github.com/inconshreveable/ngrok/ngrok.log &
# 修改文件权限
$ chmod 755 /etc/init.d/ngrok

# 运行成功
[09:29:43 UTC 2018/09/15] [INFO] (ngrok/log.(*PrefixLogger).Info:83) [registry] [tun] No affinity cache specified
[09:29:43 UTC 2018/09/15] [INFO] (ngrok/log.Info:112) Listening for public http connections on [::]:8088
[09:29:43 UTC 2018/09/15] [INFO] (ngrok/log.Info:112) Listening for public https connections on [::]:8089
[09:29:43 UTC 2018/09/15] [INFO] (ngrok/log.Info:112) Listening for control and proxy connections on [::]:4443
[09:29:43 UTC 2018/09/15] [INFO] (ngrok/log.(*PrefixLogger).Info:83) [metrics] Reporting every 30 seconds

# 创建ngnix配置(ngrok.conf), 与ngnix共存
$ nano /etc/nginx/conf/ngrok.conf

# 添加以下内容
upstream ngrok {
  server 127.0.0.1:8088;
    keepalive 64;
}
server {
    listen       80;
    server_name  *.ngrok.drzorm.win;
    location / {
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header Host  $http_host:8088;
            proxy_set_header X-Nginx-Proxy true;
            proxy_set_header Connection "";
            proxy_pass      http://ngrok;
    }
}

```