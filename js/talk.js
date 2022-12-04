new TypeIt("#tqyxhj", {
        loop: true,
        cursorSpeed: 1000,
        speed: 100
    })
    .type("陪我的小朋友又长大了一岁")
    .pause(2000)
    .delete(null, {
        delay: 500
    })
    .type("宝贝生日快乐")
    .pause(3000)
    .go();

new TypeIt('#talkToXHJ', {
    lifeLike: true,
    cursorSpeed: 1000,
    waitUntilVisible: true,
    speed: 100
}).go();