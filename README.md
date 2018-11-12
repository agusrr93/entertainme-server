Small redis cache project with node js

EndPoints

| URL                                             | METHOD | body                                             | Description               |
| ----------------------------------------------- | ------ | ------------------------------------------------ | ------------------------- |
| http://localhost:3000/entertainme           | GET    | -                                                | get All movies and series |
| http://localhost:3000/entertainme/tvs       | GET    | -                                                | get series                |
| http://localhost:3000/entertainme/movies    | GET    | -                                                | get movies                |
| http://localhost:3000/entertainme/tvs       | POST   | title, poster_path, popularity(number), overview | create series             |
| http://localhost:3000/entertainme/movies    | POST   | title, poster_path, popularity(number), overview | create movies             |
| http://localhost:3000/entertainme/tvs/:id   | GET    | -                                                | get series by id          |
| http://localhost:3000/entertainme/movies:id | GET    | -                                                | get movies by id          |
| http://localhost:3000/entertainme/tvs/:id   | DELETE | -                                                | delete series by id       |
| http://localhost:3000/entertainme/movies:id | DELETE | -                                                | delete movies by id       |
| http://localhost:3000/entertainme/tvs/:id   | PATCH  | title, poster_path, popularity(number), overview | update series by id       |
| http://localhost:3000/entertainme/movies:id | PATCH  | title, poster_path, popularity(number), overview | update movies by id     |
