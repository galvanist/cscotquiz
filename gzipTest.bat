curl http://192.168.0.10:3000/data/chs2013csawards.json -s --write-out "%{size_download}\n" -o NUL
curl http://192.168.0.10:3000/data/chs2013csawards.json -s -H "Accept-Encoding: gzip,deflate" --write-out "%{size_download}\n" -o NUL
curl http://cscotquiz.herokuapp.com/data/chs2013csawards.json -s --write-out "%{size_download}\n" -o NUL
curl http://cscotquiz.herokuapp.com/data/chs2013csawards.json -s -H "Accept-Encoding: gzip,deflate" --write-out "%{size_download}\n" -o NUL
