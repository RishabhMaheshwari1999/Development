let db;
let dbRequest = indexedDB.open("Gallery");
dbRequest.onupgradeneeded = function(e){
    db = e.target.result;
    let mediaTable = db.createObjectStore("Media" , {keyPath : "mid"});
};

dbRequest.onsuccess = function(e){
    db = e.target.result
};

function saveMedia(mediatype, mediaurl){
    let txn = db.transaction("Media","readwrite");
    let mediastore = txn.objectStore("Media");
    let mediafile = {
        mid : Date.now(),
        mediatype,
        mediaurl, 
    }
    mediastore.add(mediafile);
}