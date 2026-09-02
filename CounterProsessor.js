let NanaLiveSecond = 0
let NanaLiveDays = 0

function GetNowTime() { //現在時刻をUNIX→文字列へ、いわば「時計」。
    const now = new Date();
    const currentTimeString = now.toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' });;
    document.getElementById('currentTime').textContent = currentTimeString;
};
function GetTotalSeconds() { //総経過秒数表示
    document.getElementById('totalSeconds').textContent = NanaLiveSecond;
};
function SelectedThings() { //プルダウンに応じて表示を変えたり
    const Selected = document.getElementById('WhatCanWeDoInTheTime').value;
    if (Selected === "Beats") {
        const Beats = Math.floor(NanaLiveSecond / 60 * 70); //経過時間を60で割って分にして70を掛ける
        document.querySelector('.Iroiro').textContent = `これまでに、ななたまの心臓が、${Beats}回生きた証を残しました。(BPM70計算)`;
    } 
    else if (Selected === "Syaoran") {
        const ranran = Math.floor(NanaLiveSecond / (3 * 60 + 52)); //1曲3分52秒
        document.querySelector('.Iroiro').textContent = `これまでに、シャオシャオ蘭々を、${ranran}回分聴けました。`;
    } 
    else if (Selected === "Dokikyun") {
        const Dokikyun = Math.floor(NanaLiveSecond / (3 * 60 + 12)); //1曲3分12秒
        document.querySelector('.Iroiro').textContent = `これまでに、どきどきキュン！で大暴走♡した回数は、${Dokikyun}回分になります。`;
    } 
    else if (Selected === "Muriota") {
        const Muriota = Math.floor(NanaLiveSecond / (3 * 60)); //1曲丁度3分
        document.querySelector('.Iroiro').textContent = `これまでに、無理すぎ♡オタクハートを${Muriota}回聴けました。(ほかにも、カップ麺が${Muriota}個食える！)`;
    } 
    else if (Selected === "Kcal") {
        const Kcal = Math.floor(NanaLiveSecond * (2000 / 86400) ); //カロリーって平均出しにくそうだよね
        document.querySelector('.Iroiro').textContent = `これまでに、ハイパーウルトラ元気な女の子が私達にくれたエネルギーは、${Kcal}kcalです。(1日2000kcal想定)`;
    }
    else if (Selected === "Film") {
        const FilmMeter = Math.floor(NanaLiveSecond * 0.4572); //24fps35mm標準のフィルムは、1秒で457.2mm巻かれるそう。457.2mm≒0.4572m
        const FilmKiro = (FilmMeter / 1000); //キロメートルへ
        const FilmKiroRounded = Math.floor(FilmMeter / 1000); //小数点捨
        const FilmKiroRounded2 = (FilmMeter / 1000).toFixed(2)
        const RatePercent = (FilmKiro * 100 / 1150000).toFixed(2); //比率を求めパーセント変換
        const HowManyDoesItHaveEatrh = ((FilmMeter / 1000) / 40000).toFixed(2) //地球の円周に換算してみる
        document.querySelector('.Iroiro').textContent = `いままでの記憶のフィルムは、${FilmKiroRounded2}キロメートルになります。地球${HowManyDoesItHaveEatrh}周分です。\n115万キロに占める比率は、1150000:${FilmKiroRounded}で、約${RatePercent}%です。`; //人生を80年としフィルム長は115万キロメートルになる。https://www.youtube.com/watch?v=ReCnlwVZj1M
    }
    else if (Selected === "RawVideo") {
        const BytePerSeconds = (3840 * 2160 * 60 * 3); //4K@6024bitのB/s
        const Tera = (BytePerSeconds / 1000000000000); //単位をテラにする
        const FileSizeTeraRounded = Math.floor(NanaLiveSecond * Tera);
        document.querySelector('.Iroiro').textContent = `いままでを、4K@60fps非圧縮で記録すると、約${FileSizeTeraRounded}テラバイトになります。`;
    }
    else if (Selected === "PCMAudio") {
        const BytePerSeconds = (96000 * 3 * 2); //96kHz24bit2chのB/s
        const Tera = (BytePerSeconds / 1000000000000); //単位をテラにする
        const FileSizeTeraRoundedDisplay = (Math.floor(Tera * NanaLiveSecond * 100) /100);
        document.querySelector('.Iroiro').textContent = `いままでを、PCM96kHz/24bitで記録すると、約${FileSizeTeraRoundedDisplay}テラバイトになります。`;
    }
    else if (Selected === "FullMoon"){
        const MoonRate = 29.5; //月の周期は29.5らしい
        const FullMoonTImes = Math.floor(NanaLiveDays / MoonRate);
        document.querySelector('.Iroiro').textContent = `いままで、${FullMoonTImes}回満月が訪れました。`;
    }
    else if (Selected ==="SS"){
        const SSTimeSec = 7200 //歌枠って長いのも短いのもあるから一概に言えないけど
        const SSNumber = Math.trunc(NanaLiveSecond / SSTimeSec)
        document.querySelector('.Iroiro').textContent = `いままで、${SSNumber}回歌枠が行われました。(1回を2時間とする。)`
    }
    else if (Selected ==="CD"){
        const CDLonger = 4440 //CDの74分って本当に不思議な数値だよなぁ...ということで74m=4440s
        const CDNumber = (NanaLiveSecond / CDLonger).toFixed(2)
        document.querySelector('.Iroiro').textContent = `いままでを音楽CDに記録すると、${CDNumber}枚になります。(1枚74分、4440秒計算。)`
    }
    else {
        document.querySelector('.Iroiro').textContent = `これまでをわかりやすい単位に換算します！`;
    };
};

function SelectedThings_Down() { //プルダウンに応じて表示を変えたり
    const Selected = document.getElementById('WhatCanWeDoInTheTime').value;
    if (Selected === "Beats") {
        const Beats = Math.floor(NanaLiveSecond / 60 * 70); //経過時間を60で割って分にして70を掛ける
        document.querySelector('.Iroiro').textContent = `これから、ななたまの心臓が、${Beats}回生きた証を残します。(BPM70計算)`;
    } 
    else if (Selected === "Syaoran") {
        const ranran = Math.floor(NanaLiveSecond / (3 * 60 + 52)); //1曲3分52秒
        document.querySelector('.Iroiro').textContent = `これから、シャオシャオ蘭々を、${ranran}回分聴けます。`;
    } 
    else if (Selected === "Dokikyun") {
        const Dokikyun = Math.floor(NanaLiveSecond / (3 * 60 + 12)); //1曲3分12秒
        document.querySelector('.Iroiro').textContent = `これから、どきどきキュン！で大暴走♡する回数は、${Dokikyun}回です。`;
    } 
    else if (Selected === "Muriota") {
        const Muriota = Math.floor(NanaLiveSecond / (3 * 60)); //1曲丁度3分
        document.querySelector('.Iroiro').textContent = `これから、無理すぎ♡オタクハートを${Muriota}回聴けます。(ほかにも、カップ麺が${Muriota}個食える！)`;
    } 
    else if (Selected === "Kcal") {
        const Kcal = Math.floor(NanaLiveSecond * (2000 / 86400) ); //カロリーって平均出しにくそうだよね
        document.querySelector('.Iroiro').textContent = `これから、ハイパーウルトラ元気な女の子が私達にくれるエネルギーは、${Kcal}kcalです。(1日2000kcal想定)`;
    }
    else if (Selected === "Film") {
        const FilmMeter = Math.floor(NanaLiveSecond * 0.4572); //24fps35mm標準のフィルムは、1秒で457.2mm巻かれるそう。457.2mm≒0.4572m
        const FilmKiro = (FilmMeter / 1000); //キロメートルへ
        const FilmKiroRounded = Math.floor(FilmMeter / 1000); //小数点捨
        const FilmKiroRounded2 = (FilmMeter / 1000).toFixed(2)
        const RatePercent = (FilmKiro * 100 / 1150000).toFixed(2); //比率を求めパーセント変換
        const HowManyDoesItHaveEatrh = ((FilmMeter / 1000) / 40000).toFixed(2) //地球の円周に換算してみる
        document.querySelector('.Iroiro').textContent = `これからの記憶のフィルムは、${FilmKiroRounded2}キロメートルになります。地球${HowManyDoesItHaveEatrh}周分です。\n115万キロに占める比率は、1150000:${FilmKiroRounded}で、約${RatePercent}%です。`; //人生を80年としフィルム長は115万キロメートルになる。https://www.youtube.com/watch?v=ReCnlwVZj1M
    }
    else if (Selected === "RawVideo") {
        const BytePerSeconds = (3840 * 2160 * 60 * 3); //4K@6024bitのB/s
        const Tera = (BytePerSeconds / 1000000000000); //単位をテラにする
        const FileSizeTeraRounded = Math.floor(NanaLiveSecond * Tera);
        document.querySelector('.Iroiro').textContent = `いまからを、4K@60fps非圧縮で記録すると、約${FileSizeTeraRounded}テラバイトになります。`;
    }
    else if (Selected === "PCMAudio") {
        const BytePerSeconds = (96000 * 3 * 2); //96kHz24bit2chのB/s
        const Tera = (BytePerSeconds / 1000000000000); //単位をテラにする
        const FileSizeTeraRoundedDisplay = (Math.floor(Tera * NanaLiveSecond * 100) /100);
        document.querySelector('.Iroiro').textContent = `いまからを、PCM96kHz/24bitで記録すると、約${FileSizeTeraRoundedDisplay}テラバイトになります。`;
    }
    else if (Selected === "FullMoon"){
        const MoonRate = 29.5; //月の周期は29.5らしい
        const FullMoonTImes = Math.floor(NanaLiveDays / MoonRate);
        document.querySelector('.Iroiro').textContent = `いまから、${FullMoonTImes}回満月が訪れます。`;
    }
    else if (Selected ==="SS"){
        const SSTimeSec = 7200 //歌枠って長いのも短いのもあるから一概に言えないけど
        const SSNumber = Math.trunc(NanaLiveSecond / SSTimeSec)
        document.querySelector('.Iroiro').textContent = `いまから、${SSNumber}回歌枠が行えます。(1回を2時間とする。)`
    }
    else if (Selected ==="CD"){
        const CDLonger = 4440 //CDの74分って本当に不思議な数値だよなぁ...ということで74m=4440s
        const CDNumber = (NanaLiveSecond / CDLonger).toFixed(2)
        document.querySelector('.Iroiro').textContent = `いまからを音楽CDに記録すると、${CDNumber}枚になります。(1枚74分、4440秒計算。)`
    }
    else {
        document.querySelector('.Iroiro').textContent = `これからをわかりやすい単位に換算します！`;
    };
};

function Intervaler() {
    NanatamaLiveTime();
    GetNowTime();
    GetTotalSeconds();
    SelectedThings();
};

function Intervaler_Down() {
    NanatamaLiveTime();
    GetNowTime();
    GetTotalSeconds();
    SelectedThings_Down();
};