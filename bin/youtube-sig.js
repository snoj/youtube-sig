#!/usr/bin/node

require('../lib/youtube-sig').getSig(function(err, o) {
  if(err) {
    console.error(err);
    return;
  }

  console.log(JSON.stringify(o));
});