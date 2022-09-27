// this code moves the banner text on scroll. 

export const textBannerScrolling = () => {

    const bannerText = document.querySelectorAll('.banner-text');
    const bannerText1 = document.querySelector('.banner-text--1');
    const bannerText2 = document.querySelector('.banner-text--2');
    const bannerText3 = document.querySelector('.banner-text--3');

    // console.log(bannerText1, bannerText2, bannerText3);

    // console.log('text banner js is running');
    // if(bannerText1) {
    //     // console.log(bannerText1, bannerText2, bannerText3);

    //     setInterval(runScroll, 3000);
    // }
    // function runScroll() {
    //     console.log('run scroll is running');

    //     // take a element
    //     bannerText1.style.left = '-100px';
    //     // update translate x to it and 
    // };

    window.onscroll = () => {
        let pos = window.scrollY - 3000;
        let pos2 = window.scrollY - 4000;
        let rightPos = window.scrollY - 500;
        bannerText1.style.left = `${pos}px`;
        bannerText2.style.right = `${rightPos}px`;
        bannerText3.style.left = `${pos2}px`;

    }

}
