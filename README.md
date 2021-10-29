# imiganai.js
使いどころのわからない機能をまとめる。

## インポート
```
<script src="./imiganai.js"></script>
```

## 機能
### strfind
`indexOf` のように文字列を検索します。最初の一つだけでなく、すべての文字を検索します。
`Imiganai.strfind(string, word);`
- string ...探索元の文字列です。
- word ...探索する単語です。
#### 例
```javascript
Imiganai.strfind("She said that that that that that boy used was wrong.", "that")); // >> 9,14,19,24,29
```

