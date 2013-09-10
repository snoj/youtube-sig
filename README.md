# No longer works

Google has changed their methods enough and I don't care enough at this time to go hunting for a fix.

Beside there are probably better ways to accomplish this.

# youtube-sig

  Will attempt to identify the signature needed to download Youtube videos.
  
  Should everything work as it should, it will return a JSON object with the name 
  of the method, the method code, and the javascript file it is found in.
  
```
{ url: 'http://s.ytimg.com/yts/jsbin/html5player-vflART1Nf.js',
  methods: [
    { func: 'hj',
       code: 'function hj(a){a=a.split("");a=a.slice(3);a=a.reverse();var b=a[0];a[0]=a[63%a.length];a[63]=b;a=a.slice(2);a=a.reverse();a=a.slice(1);return a.join("")}'
    }
  ]
}
```

# Install
```
git clone https://github.com/snoj/youtube-sig.git
npm install ./youtube-sig
```

# Usage

```
[user@localhost$] youtube-sig
{"url":"http://s.ytimg.com/yts/jsbin/html5player-vflART1Nf.js","methods":[{"func":"hj","code":"function hj(a){a=a.split(\\\"\\\");a=a.slice(3);a=a.reverse();var b=a[0];a[0]=a[63%a.length];a[63]=b;a=a.slice(2);a=a.reverse();a=a.slice(1);return a.join(\\\"\\\")}"}]}
```

## License 

(The MIT License)

Copyright (c) 2013 Josh Erickson &lt;josh@snoj.us&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
