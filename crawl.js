// Paste in the Chrome console

(async nameList => {
  try {
    const res = await Promise.all(nameList.map(color => $.post('/php/io.php', { color })));
    const fmtList = res
      .map(data => JSON.parse(data))
      .reduce((tmp, { rgb }, idx) => Object.assign(tmp, { [nameList[idx]]: `#${rgb}` }), {});

    console.log(JSON.stringify(fmtList, null, 2).replace(/"([A-Z]+)"/g, '$1'));
  } catch(e) {
    console.error(e);
  }
})($('#colors a').map(function() { return $(this).text().split(' ')[1].trim() }).get())
