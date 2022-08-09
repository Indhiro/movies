function tanyaKabar(name) {
    console.log('Apa kabar,', name);
}

let katakanHallo=(name) => {
    setImmediate(function () {
        console.log('Hallo,', name);
    });
}

katakanHallo('Guntur');
console.log('123');