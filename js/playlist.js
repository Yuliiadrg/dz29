let playListItems = [
    { author: "LED ZEPPELIN", song: "STAIRWAY TO HEAVEN", },
    { author: "QUEEN", song: "BOHEMIAN RHAPSODY", },
    { author: "LYNYRD SKYNYRD", song: "FREE BIRD", },
    { author: "DEEP PURPLE", song: "SMOKE ON THE WATER", },
    { author: "JIMI HENDRIX", song: "ALL ALONG THE WATCHTOWER", },
    { author: "AC/DC", song: "BACK IN BLACK", },
    { author: "QUEEN", song: "WE WILL ROCK YOU", },
    { author: "METALLICA", song: "ENTER SANDMAN", },
];

// забираю елемент списку за допомогою id
const playList = document.getElementById("playList");
// перебрати циклом кожну пісню в масиві playListItems
for (let i = 0; i < playListItems.length; i++) {

    // додаю новий елемент  li
    const songItem = document.createElement("li");

    // вставляю текст до li
    songItem.innerText = `${playListItems[i].author} - ${playListItems[i].song}`;

    // додаю новий елемент списку li до списку ol
    playList.appendChild(songItem);
}