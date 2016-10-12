# other

#### 使用[corsproxy](https://www.npmjs.com/package/corsproxy)解决跨域问题
```
npm install -g corsproxy
corsproxy
# with custom port: CORSPROXY_PORT=1234 corsproxy
# with custom host: CORSPROXY_HOST=localhost corsproxy
# with debug server: DEBUG=1 corsproxy
# with custom payload max bytes set to 10MB (1MB by default): CORSPROXY_MAX_PAYLOAD=10485760 corsproxy
```

#### 使用[weinre](https://www.npmjs.com/package/weinre)远程调试
```
npm install -g weinre
weinre --boundHost 172.16.9.47
```
