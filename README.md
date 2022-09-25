# 도커에 대한 학습
---
## 명령어 정리
- Volume Mapping
```bash
docker run -d -it -p 9090:8080 -v /usr/src/app/node_modules -v $(pwd):/usr/src/app rojae/nodejs
```

- docker compose
```
docker-compose up 
docker-compose up --build
docker-compose up -d
docker-compose down
```
