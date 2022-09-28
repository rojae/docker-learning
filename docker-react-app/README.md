## React Run
- react run ...

## Without docker-compose
- docker run -d -it -p 3000:3000 -v /usr/src/app/node_modules -v $(pwd):/usr/src/app rojae/docker-react-app

## With docker-compose
- docker-compose -d up
- docker-compose up --build 
- Use Travis, ElasticBeanstalk
