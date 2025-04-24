function generateMelody(scale, length) {
    const melody = [];
    for (let i = 0; i < length; i++) {
        const note = scale[Math.floor(Math.random() * scale.length)];
        melody.push(note);
    }
    return melody;
}

const majorScale = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
console.log("Generated Melody:", generateMelody(majorScale, 8));
