
function inChrist() {
    const whoIam = ['Holy', 'Righteous', 'Justified', 'A Joint Heir with Christ', 'Victorious', 'Glorified ', 
    'The Temple of God', 'Sanctified', 'Healed', 'Protected','Forgiven'];
    return whoIam[Math.floor(Math.random() * whoIam.length)];
}


function affirmations() {
    const firmArray = [ 'I am a God-carrying vessel and a dispenser of eternal verities.',
         'I’ve received an abundance of grace and the gift of righteousness.', 
         'I reign in life, over and above the corrupting influences of this world: sickness, lack, and everything that limits.' , 
         'The grace of God is multiplied in my life through the knowledge of the Word in my heart.', 
         'I am more than a man, the spirit of perfection is at work in me.',
        'I live out the supernatural life naturally, demonstrating the glory,wisdom, and excellence of divinity.', 
        'I am joined to the Lord and have become inseparable with Him, bearing fruits of His righteousness that is inherent in my spirit.'];
    return firmArray[Math.floor(Math.random() * firmArray.length)];
}


function loveOfGod() {
    const whatLove = ['personal', 'unconditional', 'infinite', 'sure', 'unfailing', 'sincere', 'true', 'steadfast', 
'incredible', 'perfect', 'unending', 'protective', 'inseparable'];
    return whatLove[Math.floor(Math.random() * whatLove.length)];
}



console.log('*');
console.log(`*  In Christ Jesus I am ${inChrist()} `);
console.log('*');
console.log(`*  I affirm that : ${affirmations()}!`);
console.log('*');
console.log(`*  God's love for me is: ${loveOfGod()}.`);  

