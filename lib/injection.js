
var function_lists = arguments.callee.toString().match(/function ([a-z0-9]+)\(/ig);
function_lists.forEach(function(v) {
  try {
    var extraction = v.match(/function ([^\(]+)\(/i)[1];
    var callbacker = null;
    try {
      eval('callbacker = ' + extraction);
      if(!callbacker.apply) throw "Not a function";
      var sig = '2424D9E05D9145E8203BB9D9D880DDAF991FDD7E8F.42F10B14517CE39CA1ABEB7493EC470CB514A337337'; //http://www.jwz.org/blog/2013/06/youtubedown/#comments
      var ciphered_sig = callbacker(sig);

      //Filter stuff
      if(!ciphered_sig) throw "invalid return";
      if(typeof ciphered_sig == 'undefined' || ciphered_sig == 'undefined' || ciphered_sig == 'NaN' || ciphered_sig == 'string' || ciphered_sig == 'null') throw "invalid return";
      if(typeof ciphered_sig !== 'string') throw "invalid return";
      if(!ciphered_sig.match(/^[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/)) throw "invalid return";

      if(ciphered_sig !== sig) {
        likelyCallback(extraction, callbacker);
      } else {
        maybeCallback(extraction, callbacker);
      }
    } catch (e) {}
  } catch(exceptioner) {}
});
endCallback();
