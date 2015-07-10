Google Sheets JSON Database
===========================

This is a Google Apps Script that turns a Google Sheets document into a simple key-value store that is exposed as JSON over HTTP. For now, this project only supports strings as values, [*okaaaay?*](https://www.youtube.com/watch?v=L5c9sktMB1s)

Usage
-----

* Create a new Apps Script project containing the code in [`google-apps-script.js`](https://github.com/ngscheurich/gsheets-json-db/blob/master/google-apps-script.js).
* Deploy your project as a web app.

Document format
---------------

Each sheet in your database document should contain two columns, the first containing keys and the second containing their corresponding values.

For example, your document should look something like this:

<table>
  <tr>
    <td><b>key</b></td>
    <td>value</td>
  </tr>
  <tr>
    <td><b>another_key</b></td>
    <td>true</td>
  </tr>
  <tr>
    <td><b>class</b></td>
    <td>rogue</td>
  </tr>
</table>

And the Apps Script web app will expose the following JSON:

```javascript
{
  "key": "value",
  "another_key": "true",
  "class": "rogue"
}
```

Thanks
------

* This idea is based on [https://gist.github.com/daichan4649/8877801](https://gist.github.com/daichan4649/8877801).
* The flag images in [`demo/images`](https://github.com/ngscheurich/gsheets-json-db/tree/master/demo/images) are from [behdad](https://github.com/behdad)’s excellent [region-flags repo](https://github.com/behdad/region-flags/).

---

[![Creative Commons License](https://i.creativecommons.org/l/by-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-sa/4.0/)

This work is licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/).
