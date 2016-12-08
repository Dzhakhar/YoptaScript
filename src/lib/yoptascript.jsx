/*!
 * YoptaScript v0.2.6 (https://yopta.space)
 * Copyright (c) 2016 Yopta.Space project and Contributors
 * Licensed under the MIT license
 */
import words from "./words.jsx";

class Yopta {
  compile(yoptaCode){
    return yoptaCode.replace(/([а-яА-Я]+)/g, function(e){
      if(words[e]){
        return words[e];
      } else {
        return e;
      }
    })
  }
}

const yopta = new Yopta();

if(window){
  document.querySelectorAll('[language="YoptaScript"]').forEach(yopta.compile);
}

export default Yopta;
