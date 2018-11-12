const axios = require('axios')
const redis = require('redis'),
      client = redis.createClient()

module.exports = {
  findAll: function(req,res) {
    client.get('moviecache', (err,reply) => {
      if(reply) {
        let data=JSON.parse(reply)
        if(req.route.path=='/'){
          data=data
        }
        if(req.route.path=='/tvs'){
          data=data.tv
        }
        if(req.route.path=='/tvs/:id'){
          let myArr=data.tv.data
          let filtered=myArr.findIndex(x => x._id ===req.params.id)
          data=myArr[filtered]
        }
        if(req.route.path=='/movies/:id'){
          let myArr=data.movies.data
          let filtered=myArr.findIndex(x => x._id ===req.params.id)
          data=myArr[filtered]
        }
        res.status(201).json(data)
      } else if (reply === null)  {
          getDataMovie(req,res)   
      } else {
          res.status(500).json('error get')
      }
    })   
  },

  createDataMovie: function(req,res) {
    let data = req.body
    
    axios({
      method: 'POST',
      url: 'http://localhost:3001/movies',
      data
    })
      .then((response) => {
        getDataMovie(req,res)
      }).catch((err) => {
        res.status(500).json('gagal buat data')
      });
  },

  createDataTv: function(req,res) {
    let data = req.body
    axios({
      method: 'POST',
      url: 'http://localhost:3002/tvs',
      data
    })
      .then((response) => {
        getDataMovie(req,res)
      }).catch((err) => {
        console.log(err)
      });
  },
  deleteDataMovie: function(req,res) {
    let data = req.params.id
    
    axios({
      method: 'DELETE',
      url: `http://localhost:3001/movies/${data}`
    })
      .then((response) => {
        getDataMovie(req,res)
      }).catch((err) => {
        res.status(500).json('gagal buat data')
      });
  },
  deleteDataTv: function(req,res) {
    let data = req.params.id
    axios({
      method: 'DELETE',
      url: `http://localhost:3002/tvs/${data}`
    })
      .then((response) => {
        getDataMovie(req,res)
      }).catch((err) => {
        console.log(err)
      });
  },
  editDataMovie: function(req,res) {
    let data = req.body
    axios({
      method: 'PATCH',
      url: `http://localhost:3001/movies/${req.params.id}`,
      data
    })
      .then((response) => {
        getDataMovie(req,res)
      }).catch((err) => {
        res.status(500).json('gagal buat data')
      });
  },

  editDataTv: function(req,res) {
    let data = req.body
    axios({
      method: 'PATCH',
      url: `http://localhost:3002/tvs/${req.params.id}`,
      data
    })
      .then((response) => {
        getDataMovie(req,res)
      }).catch((err) => {
        console.log(err)
      });
  }
}

function getDataMovie (req,res) {
  axios({
    method: 'GET',
    url: 'http://localhost:3001/movies'
  })
    .then((movies) => {
     
      axios({
        method: 'GET',
        url: 'http://localhost:3002/tvs'
      })
        .then((tv) => {

          let data = {
            movies: movies.data,
            tv: tv.data
          }

          client.set('moviecache', JSON.stringify(data), 'EX', 10)
          if(req.route.path=='/'){
            data=data
          }
          if(req.route.path=='/tvs'){
            data=data.tv
          }
          if(req.route.path=='/movies'){
            data=data.movies
          }
          if(req.route.path=='/tvs/:id'&&req.method!=='DELETE'){
            let myArr=data.tv.data
            let filtered=myArr.findIndex(x => x._id ===req.params.id)
            data=myArr[filtered]
          }
          if(req.route.path=='/movies/:id'&&req.method!=='DELETE'){
            let myArr=data.movies.data
            let filtered=myArr.findIndex(x => x._id ===req.params.id)
            data=myArr[filtered]
          }
          else{
            data=data
          }
          res.status(201).json(data)
        }).catch((err) => {
          console.log(err)
        });

    }).catch((err) => {
      console.log(err)
    });
}