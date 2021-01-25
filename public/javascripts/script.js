const WIDTH = 4
let ctx = null

const textureMap = MINIMAP_GROUND_PROPERTIES.reduce((prev, curr) => {
    prev[curr.id] = {
        url: curr.noise_texture,
        points: [],
        canvas: null
    }
    return prev
}, {})

const loadCtx = (texture) => {
    return new Promise((resolve) => {
        texture.canvas = document.createElement('canvas')
        const container = document.getElementById('textures')
        container.appendChild(texture.canvas)
        const img = new Image()
        img.onload = function () {
            texture.canvas.width = this.width
            texture.canvas.height = this.height
            texture.canvas.getContext('2d').drawImage(this, 0, 0);
            resolve();
        };
        img.onerror = function (e) {
            console.warn(e)
            resolve();
        }
        img.src = texture.url;
    })
}

const drawTexture = async ({canvas, points}) => {
    for ({sx, sy, x, y} of points) {
        // Div background image có repeat do đó với canvas ta phải tính ngược lại vị trí
        let left = sx * WIDTH
        while (left >= canvas.width) {
            left -= canvas.width
        }
        let top = sy * WIDTH
        while (top >= canvas.height) {
            top -= canvas.height
        }
        ctx.drawImage(canvas, left, top, WIDTH, WIDTH, x, y, WIDTH, WIDTH)
    }
}

const readSingleFile = async (e) => {
    const file = e.target.files[0];
    if (!file) {
        return;
    }
    const reader = new FileReader();
    reader.onload = async (e) => {
        const mapData = e.target.result
        const data = processMapData(mapData)
        // Tính kích thước của canvas
        const maxRow = Math.max(...data.map(row => row.length))
        ctx.canvas.height = data.length * WIDTH
        ctx.canvas.width = maxRow * WIDTH
        // Fill màu nền
        ctx.fillStyle = "grey";
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

        const textures = Object.values(textureMap)
        await Promise.all(textures.map(texture => loadCtx(texture)))
        data.forEach((row, rowIndex) => {
            row.forEach((col, colIndex) => {
                if (textureMap[col]) {
                    textureMap[col].points.push({
                        sx: colIndex, // Vị trí cắt texture
                        sy: rowIndex, // Vị trí cắt texture
                        x: colIndex * WIDTH, // Vị trí đặt point trên trục Ox của canvas chính
                        y: rowIndex * WIDTH // Vị trí đặt point trên trục Oy của canvas chính
                    })
                }
            })
        })
        for (const texture of textures) {
            drawTexture(texture).catch()
        }
    };
    reader.readAsText(file);
}

function processMapData(mapData) {
    return mapData.split('\n').map(row => row.split(',').map(Number))
}

function init() {
    const canvas = document.getElementById('canvas')
    ctx = canvas.getContext('2d')
    document.getElementById('file')
        .addEventListener('change', readSingleFile, false)
}

window.onload = init