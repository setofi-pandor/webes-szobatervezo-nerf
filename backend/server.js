const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const { exec } = require('child_process');
const fs = require('fs');

const app = express();
const PORT = 3000;

app.use(cors());
app.use('/models', express.static('models'));

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        const egyediNev = Date.now() + path.extname(file.originalname);
        cb(null, egyediNev);
    }
});

const upload = multer({ storage: storage });

app.post('/upload', upload.single('video'), async (req, res) => {
    console.log('Fájl feltöltve:', req.file);

    try {
        const result = await videoFeldolgozas(req.file.path);

        res.json({
            message: 'Feldolgozás kész',
            filename: req.file.filename,
            munkaAzonosito: result.munkaAzonosito,
            kepekMappa: result.kepekMappa,
            modelUrl: result.modelUrl
        });

    } catch (error) {
        console.error('Feldolgozási hiba:', error);
        res.status(500).json({
            message: 'Hiba történt a feldolgozás során'
        });
    }
});

function kepekKinyerese(videoUtvonal, kepekMappa) {
    return new Promise((resolve, reject) => {
        const parancs = `.\\ffmpeg.exe -i "${videoUtvonal}" -vf fps=1 "${kepekMappa}/output_%03d.jpg"`;

        console.log('FFmpeg parancs:', parancs);

        exec(parancs, (error) => {
            if (error) {
                console.error('FFmpeg hiba:', error);
                reject(error);
                return;
            }

            console.log('Képkockák előállítva');
            resolve();
        });
    });
}

function colmapFuttatas(munkaMappa) {
    console.log('COLMAP lépés helye:', munkaMappa);

    return Promise.resolve();
}

function nerfFuttatas(munkaMappa) {
    console.log('Instant-NGP tanítás helye:', munkaMappa);

    return Promise.resolve();
}

function modellExport(munkaMappa) {
    console.log('Export lépés helye:', munkaMappa);

    return Promise.resolve({
        modelUrl: 'http://localhost:3000/models/room.glb'
    });
}

async function videoFeldolgozas(videoUtvonal) {
    console.log('Feldolgozás indul:', videoUtvonal);

    const munkaAzonosito = Date.now().toString();

    const munkaMappa = `jobs/${munkaAzonosito}`;
    const kepekMappa = `${munkaMappa}/frames`;

    fs.mkdirSync(kepekMappa, { recursive: true });

    await kepekKinyerese(videoUtvonal, kepekMappa);
    await colmapFuttatas(munkaMappa);
    await nerfFuttatas(munkaMappa);

    const result = await modellExport(munkaMappa);

    console.log('Teljes feldolgozási folyamat kész');

    return {
        munkaAzonosito: munkaAzonosito,
        kepekMappa: kepekMappa,
        modelUrl: result.modelUrl
    };
}

app.listen(PORT, () => {
    console.log(`Szerver fut: http://localhost:${PORT}`);
});