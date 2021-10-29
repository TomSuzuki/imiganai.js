/**
 * imiganai.js
 * Imiganai JS Library
 * @author TomSuzuki
 * @example
 *   console.log(imiganai.strfind("She said that that that that that boy used was wrong.", "that"));
 * @license MIT
 * See more usage examples at: https://github.com/TomSuzuki/imiganai.js
 */

const Imiganai = {
    strfind: function (string, word) {
        let n = [];
        let isNomore = false;
        let sum = 0;
        while (!isNomore) {
            let p = string.indexOf(word);
            if (p === -1) isNomore = true;
            else {
                n.push(sum + p);
                sum += p + word.length;
                string = string.slice(p + word.length);
            }
        }
        return n;
    }
};

window.Imiganai = Imiganai;
